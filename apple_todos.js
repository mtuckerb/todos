
const applescript = require('applescript');

const add_todo = (todo) => `
on run a
	tell application "Reminders"
		tell list "Reminders" of default account
			make new reminder with properties {name: "${todo}"}
		end tell
	end tell
end run
`
const delete_todo = (todo) => `
on run a
	tell application "Reminders"
		tell list "Reminders" of default account
    delete (reminder with properties {name: "${todo}"})
		end tell
	end tell
end run
`

module.exports.addTodo = (todo) => {
  console.log("arrived in apple")
  applescript.execString(add_todo(todo), (err, rtn) => {
    if (err) {
      console.error(err)
    }
    if (Array.isArray(rtn)) {
      
        console.log(rtn);
      
    }
  });
}

module.exports.deleteTodo = (todo) => {
  applescript.execString(delete_todo(todo), (err, rtn) => {
    if (err) {
      console.error(err)
    }
    if (Array.isArray(rtn)) {
      for (const songName of rtn) {
        console.log(songName);
      }
    }
  });
}