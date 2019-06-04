#! /usr/bin/env node

const meow = require('meow')
const chika =  require('./chika')

const cli = meow(`
Usage:
  $ achika -h [HOST IP] [ADDRESS1] [ADDRESS2] [...]

  --version, -v Show version
  --host, -h [HOST IP] Set host IP
  --universe, -u [UNIVERSE] Set universe
  --interval, -i  [INTERVAL SEC] Set interval in seconds
  --max [MAX VALUE] / --min [MIN VALUE] Set max/min value
`, {
  flags: {

    version: {
      type: 'boolean',
      alias: 'v'
    },

    host: {
      type: 'string',
      alias: 'h',
      default: '255.255.255.255'
    },

    universe: {
      type: 'string',
      alias: 'u',
      default: 1
    },

    interval: {
      type: 'string',
      alias: 'i',
      default: 1
    },

    max: {
      type: 'string',
      default: 255
    },

    min: {
      type: 'string',
      default: 0
    },

    sendAll: {
      type: 'boolean',
      default: false
    },

    refreshInterval: {
      type: 'string',
      default: 1000/60
    }

  }
} );

chika(cli.flags, cli);
