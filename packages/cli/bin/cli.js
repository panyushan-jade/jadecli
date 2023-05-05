#! /usr/bin/env node

const importLocal = require('import-local');
const { log } = require('@jadecli/utils');
const entry = require('../lib/index');

if(importLocal(__filename)){
  log.info('cli','使用本地 jade-cli 版本')
}else{
  entry(process.argv.slice(2));
}