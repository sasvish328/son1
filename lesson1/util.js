const HASH_STORAGE = new Map();
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateHash(length) {
  let resultString = '';
  const charactersLength = CHARACTERS.length;
  for (let i = 0; i < length; i++) {
    resultString += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return resultString;
}

function accumulateAnyHash(IterationQuantity) {
  nullHashStorage();
  let count = 0;
  for (let i = 0; i < IterationQuantity; i++) {
    let hashStr = generateHash(100);
    for (let j = 0; j < hashStr.length; j++) {
      count = HASH_STORAGE.get(hashStr[j]);
      HASH_STORAGE.set(hashStr[j], ++count);
    }
  }
}

function statisticPrint() {
  console.log('-- char use statistic:');
  console.log('first char: ', HASH_STORAGE.get(CHARACTERS[0]));
  console.log('last char: ', HASH_STORAGE.get(CHARACTERS[CHARACTERS.length -1]));
  console.log('10th char: ', HASH_STORAGE.get(CHARACTERS[9]));
  console.log('20th char: ', HASH_STORAGE.get(CHARACTERS[19]));
}


function nullHashStorage() {
  for (let i = 0; i < CHARACTERS.length; i++) {
    HASH_STORAGE.set(CHARACTERS[i], 0);
  }
}


module.exports = {generateHash, CHARACTERS, HASH_STORAGE, nullHashStorage, accumulateAnyHash, statisticPrint};
