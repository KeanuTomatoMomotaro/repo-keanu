'use strict';

let sys = require('util'),
childProcess = require('child_process'),
gammu;
gammu = "test message baru cuiii"
childProcess.exec(`gammu sendsms TEXT 085883151182 -text "${gammu}"`, function (error, stdout,stderr){
  if(error){
    console.log(error);
  }
  console.log(stdout);
})
