const plaintext = document.body.querySelector(`#plaintext`);
const scrambled = document.body.querySelector(`#scrambled`);
const unscrambled = document.body.querySelector(`#unscrambled`);

function scrambler1(plaintext) {
  let Length = plaintext.length;
  let plainArr = [];
  for (let i = 0; i < Length; i++) {
    plainArr.push(plaintext.slice(i, i + 1));
  }
  if (Length % 2 === 0) {
    plainArr.push("&");
    Length += 1;
  }

  let scramble = [];
  let toggle = true;
  for (let i = 0; i < Length; i++) {
    if (toggle) {
      scramble.push(plainArr[i]);
    } else {
      scramble.unshift(plainArr[i])
    }
    toggle = !toggle;
  }
  
  let scramStr = "";
  scramble.forEach((item, index) => {
    scramStr = `${scramStr}${scramble[index]}`;
  })

  scrambled.innerText = scramStr;
};
scrambler1(plaintext.innerText);

function unscrabler1(scrambled) {
  const Length = scrambled.length;
  let scramble = [];
  for (let i = 0; i < Length; i ++) {
    scramble.push(scrambled.slice(i, i + 1));
  }
  
  let unscram = [];
  let mid = Math.floor(Length / 2);
  let odds = [];
  for (let i = mid - 1; i >= 0; i--) {
    odds.push(scramble[i]);
  }

  let evens = [];
  for (let i = mid + 1; i < Length; i++) {
    evens.push(scramble[i]);
  }

  unscram.push(scramble[mid]);
  for (i = 0; i < (Math.floor(Length / 2)); i++) {
    unscram.push(odds[i]);
    unscram.push(evens[i]);
  }

  let unscramStr = "";
  unscram.forEach((item, index) => {
    unscramStr = `${unscramStr}${unscram[index]}`;
  })

  unscrambled.innerText = unscramStr;
}
unscrabler1(scrambled.innerText);