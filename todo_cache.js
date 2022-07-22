const { createClient } = require('redis')

const client = createClient()
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

const exists = async (key, value) => {
  return await client.sIsMember(key, value) ? true : false
}

const add = async (key, value) => {
  return await client.sAdd(key, value)
}

module.exports = {exists, add}