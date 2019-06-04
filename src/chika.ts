
import chalk from 'chalk'
import consola from 'consola'
import ArtNet from 'artnet'

export function chika({
  host,
  universe = 1,
  interval,
  min,
  max,
  version,
  sendAll,
  refreshInterval
}, {
  input,
  showHelp,
  showVersion
}) {

  if(version) showVersion()

  universe /= 1
  interval /= 1

  refreshInterval /= 1

  if(sendAll) {
    consola.info('sendAll flag specified. Transmitting all channels...')
  }

  const artnet = ArtNet({
    host,
    universe,
    refresh: refreshInterval
  })

  const addrs = [];

  if(input.length === 0) {
    consola.error('No address specified')
    showHelp()
  }

  input.forEach(ins => {
    ins.split(',')
      .forEach(a => {

        if(a.match(/^([0-9]+)\-([0-9]+)$/)) {

          const startAddr: number = Math.min(+RegExp.$1, +RegExp.$2)
          const endAddr: number = Math.max(+RegExp.$1, +RegExp.$2)

          for(let i = startAddr; i <= endAddr; i++) {
            addrs.push(i)
          }

        }else if(a.match(/^[0-9]+$/)) {

          addrs.push(a/1)

        }else {

          consola.error('Invalid address')
          showHelp()

        }
      })
  })

  consola.log(`Universe: ${universe}`)
  consola.log(`Host: ${host}`)

  let vs: boolean[] = new Array(addrs.length).fill(false)
  let csr: number = 0

  setInterval(() => {

    vs[csr] = !vs[csr]
    csr++
    if(csr >= vs.length) csr = 0;

    let output = '\r' + addrs.map((a, i)=>{

      const addrStr = ('   ' + a).slice(-3)
      if(vs[i]) return chalk.bgWhite(chalk.black(addrStr))
      else return chalk.black(chalk.white(addrStr))

    }).join(' ')

    process.stdout.write(output)

    vs.forEach((v, i) => artnet.set(addrs[i], v ? max : min))

  }, interval * 1000)

}

