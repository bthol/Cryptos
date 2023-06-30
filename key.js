const plaintext = document.body.querySelector(`#plaintext`);
const encrypted = document.body.querySelector(`#encrypted`);
const key = document.body.querySelector(`#key`);
const decrypted = document.body.querySelector(`#decrypted`);

function randAlpha() {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let lets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let alphaScram = [];
  while (lets.length >= 1) {
    const idx = Math.floor(Math.random() * lets.length);
    alphaScram.push(lets[idx]);
    lets.splice(idx, 1)
  }
  let randAlpha = [];
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      if (alphaScram[i] === alphabet[j]) {
        randAlpha.push(j);
        j = 26;
      }
    }
  }
  return randAlpha;
};

function encrypt(plaintext) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const randID = randAlpha();
  let keyStr = "";
  for (let i = 0; i < 26; i++) {
    keyStr = `${keyStr}${randID[i]}-`;
  }
  key.innerText = keyStr;

  let ltrarr = [];
  const plainLen = plaintext.length;
  for (let i = 0; i < plainLen; i++) {
    ltrarr.push(plaintext.slice(i, i + 1));
  }

  let ltrarridx = [];
  for (let i = 0; i < plainLen; i++) {
    for (let j = 0; j < 26; j++) {
      if (ltrarr[i] === alphabet[j]) {
        ltrarridx.push(j);
      }
    }
  }

  let randAlphabet = []
  randID.forEach((letter, index) => {
    randAlphabet.push(alphabet[randID[index]])
  });

  let encrypt = "";
  for (let i = 0; i < plainLen; i++) {
    encrypt = `${encrypt}${randAlphabet[ltrarridx[i]]}`;
  }

  encrypted.innerText = `${encrypt}`;
};
encrypt(plaintext.innerText);

function decrypt(cyphertext, key) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let keyarr = [];
  let last = 0;
  for (let i = 0; i < key.length; i++) {
    if (key.slice(i, i + 1) === "-") {
      keyarr.push(Number(key.slice(last, i)))
      last = i + 1;
    }
  }

  let keyarrchar = [];
  for (let i = 0; i < keyarr.length; i++) {
    keyarrchar.push(alphabet[keyarr[i]]);
  }

  let keyChange = [];
  for (let i = 0; i < keyarrchar.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (keyarrchar[i] === alphabet[j]) {
        keyChange.push(i - j);
      }
    }
  }

  let cypherarr = [];
  for (let i = 0; i < cyphertext.length; i++) {
    cypherarr.push(cyphertext.slice(i, i + 1));
  }

  let cypherarridx = [];
  for (let i = 0; i < cypherarr.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (cypherarr[i] === alphabet[j]) {
        cypherarridx.push(j);
      }
    }
  }

  let decrypt = "";
  for (let i = 0; i < cypherarr.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (cypherarr[i] === keyarrchar[j]) {
        decrypt = `${decrypt}${alphabet[cypherarridx[i] + keyChange[j]]}`;
      }
    }
  }

  decrypted.innerText = `${decrypt}`;
};
setTimeout(() => {
  decrypt(encrypted.innerText, key.innerText);
}, 500)