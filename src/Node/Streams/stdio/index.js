const fs = require('fs')
const through = require('through2')

// The example below uses `stdin` to wait for user to enter
// text and then pipe to upper case transformation back to the terminal `stdout`.
process.stdin.pipe(through(write)).pipe(process.stdout)

/**
 * 
 * @param {Buffer} buf 
 * @param {string} enc 
 * @param {function} next 
 */
function write(buf, enc, next) {
  // the first arg of `next` is null since we aren't passing an error
  next(null, buf.toString().toUpperCase())
}
