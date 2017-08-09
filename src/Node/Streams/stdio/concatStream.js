const concat = require('concat-stream')

// concat-stream buffers all the data of our stream into memory.
process.stdin.pipe(
  concat(body => {
    console.log(body.length)
  })
)
