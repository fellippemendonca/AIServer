'use strict';

const pino = require('pino');
const fs = require('fs');

module.exports = logger;


function logger() {
  const logFilePath = './log';
  const logFileName = `AIServerLog-${new Date().toISOString()}.log`;
  return pino(fs.createWriteStream(`${logFilePath}/${logFileName}`));
};
