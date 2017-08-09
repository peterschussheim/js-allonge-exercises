const net = require('net')

net
  .createServer(stream => {
    stream.pipe(net.connect(5000, 'localhost'))
  })
  .listen(5001)
