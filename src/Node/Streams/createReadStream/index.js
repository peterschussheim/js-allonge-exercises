const fs = require('fs')
const through = require('through2')

// Using `through` will wrap our `write` fn and allow us to pipe data
// through the function.

fs.createReadStream(process.argv[2]).pipe(through(write)).pipe(process.stdout)

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
