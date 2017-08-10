const collect = require('collect-stream')
const split = require('split2')

const sp = process.stdin.pipe(split(JSON.parse))

collect(sp, (err, rows) => {
  try {
    console.log(rows)
  } catch (err) {
    console.error(err)
  }
})

// collects a stream's output into a single buffer or for object streams,
// collect output into an array of objects.
