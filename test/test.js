'use strict';

var bitcore = require('..');

var PublicKey = bitcore.PublicKey;
var PrivateKey = bitcore.PrivateKey;
var Address = bitcore.Address;
var Script = bitcore.Script;
var Networks = bitcore.Networks;

var privateKey = new PrivateKey();
var address = privateKey.toAddress();
console.log(address);
