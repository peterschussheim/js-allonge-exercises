const Transform = require('stream').Transform

// This example has identical functionality to the previous `stdio` example
// except we use Node core's `stream.Transform` API instead of `through2`.
const toUpper = new Transform({
  transform: (buf, enc, next) => next(null, buf.toString().toUpperCase())
})

process.stdin.pipe(toUpper).pipe(process.stdout)
