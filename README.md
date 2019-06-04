# 💡A-Chika
Test tool for Art-Net receivers.

## Features
- Transmit Art-Net blink signals from command line
- Options
  - Universe
  - Multiple channels
  - Blink interval

## Install & Quick use
```
$ npm install -g achika
$ achika 1

// OR just

$ npx achika 1
```

## Usage
```
Usage:
  $ achika -h [HOST IP] [ADDRESS1] [ADDRESS2] [...]

  --version, -v Show version
  --host, -h [HOST IP] Set host IP
  --universe, -u [UNIVERSE] Set universe
  --interval, -i  [INTERVAL SEC] Set interval in seconds
  --max [MAX VALUE] / --min [MIN VALUE] Set max/min value
```

## Contributing
Issues and PRs for adding features, bug fix or refactoring are welcome. Please do not include built files in your PRs.

## Naming
Named from `L-Chika（Lチカ）`, the Japanese word of simple "Hello World" in electric circuits development, just blink a LED.

In this case `L` comes from "LED", so `A` of "A-Chika" comes from "Art-Net".
