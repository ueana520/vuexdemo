const data = require('./mock-data')
const LATENCY = 16

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.threadID,
    threadName: thread.threadName,
    authorName: 'Evan'
  }
  console.log(message)
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}
