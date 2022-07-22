require('dotenv').config()
const {google} = require('googleapis');
const {tasks}=require('googleapis/build/src/apis/tasks');

  const auth = new google.auth.GoogleAuth({
    keyFile: "tuckerbradford.com_api-project-740336674324-3bb0e8911c06.json",
    scopes: ["https://www.googleapis.com/auth/tasks"]
  });

google.options({ auth: auth })

module.exports.upload = async () => {
  const googleTasks = google.tasks('v1')
  const {data} = await googleTasks.tasks.list({tasklist: 'MTAzMDIwNjA4MzEzODA5NDg4ODk6MDow'})
  console.log(data.items)
  return data
}
// {
//   kind: 'tasks#taskList',
//   id: 'MTAzMDIwNjA4MzEzODA5NDg4ODk6MDow',
//   etag: '"NTExNDc0ODIw"',
//   title: 'My Tasks',
//   updated: '2022-07-21T02:00:51.431Z',
//   selfLink: 'https://www.googleapis.com/tasks/v1/users/@me/lists/MTAzMDIwNjA4MzEzODA5NDg4ODk6MDow'
// }