const through = require('through2')
const size = 0
const tr = through.obj((row, enc, next) => {
  next(null, row.n * 1000 + '\n')
})

tr.pipe(process.stdout)
tr.write({ n: 5 })
tr.write({ n: 10 })
tr.write({ n: 3 })
tr.end()
