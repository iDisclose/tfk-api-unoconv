'use strict'

var spawn = require('child_process').spawn;
spawn('/usr/bin/unoconv', ['--listener', '--server=0.0.0.0', '--port=2002'], {detached: true}).unref()

const server = require('./server')
server.start()
