const cache = require('./todo_cache')
const chokidar = require('chokidar');
const apple = require('./apple_todos')
const watcher = chokidar.watch(process.env.MARKDOWN_WATCH_DIR, { 
  recursive: true, 
  persistent: true,
  atomic: true,
  followSymlinks: false
})
const grepWithShell = require('./grepWithShell')

const watchTodo = () => {
  watcher.on('change', async (path) => {
    if (!path.match(".md")) return
    let todos = await grepWithShell(path)
    if (todos === false){return}
    todos = parseTodo(todos)
    todos.forEach(todo => {
      upsertTodo(path, todo)
    }) 
  })
  watcher.on('add', async (path) => {
    if (!path.match(".md")) return
    let todos = await grepWithShell(path)
    if (todos === false){return}
    todos = parseTodo(todos) 
    cache.add(path, todos)
  })

}

const parseTodo = (data) => {
    const todos = data.split('\n') || [`${data}\n`]
    todos.pop()
    return todos.map((todo) => {
      todo = todo.match(/- \[ \]\s+(.*)/)
      if (!todo) { return ""}
      return todo[1]
    })
}

const upsertTodo = async (file, todo) => {
  if (await cache.exists(file, todo) ) {return}
  apple.addTodo(todo)
  console.log("added: ", todo, "to Reminders")
  await cache.add(file, todo) 
  
}

watchTodo()

module.exports = {watchTodo}