const fs = require('fs')
const w = fs.createWriteStream('coolbeans.txt')

w.on('finish', () => {
  console.log('finished 👍')
})
w.write('hi\n')
w.write('wow\n')
w.end()
