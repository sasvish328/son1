//проверил равномерность распределения символов

const req2 = require('./util.js');

req2.accumulateAnyHash(10000);
req2.statisticPrint();