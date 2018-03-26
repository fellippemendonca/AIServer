'use strict';

const address = require('./config');
const logger = require('./lib/logger/logger')();
const onDataMethod = require('./lib/onDataMethod/onDataMethod');


const socketServer = require('./lib/socketServer/socketServer');

socketServer(address.host, address.port, onDataMethod)

/*
setInterval(() => {

  logger.info('hello world');
  logger.error('this is at error level');
  logger.info('the answer is %d', 42);
  logger.info({ obj: 42 }, 'hello world');
  logger.info({ obj: 42, b: 2 }, 'hello world');
  logger.info({ obj: { aa: 'bbb' } }, 'another');
  setImmediate(function () {
    logger.info('after setImmediate')
  });
  logger.error(new Error('an error'));

  var child = logger.child({ a: 'property' });
  child.info('hello child!');

  var childsChild = child.child({ another: 'property' });
  childsChild.info('hello baby..');

}, 1000);
*/

