const plaintext = document.body.querySelector(`#plaintext`);
const cyphertext = document.body.querySelector(`#cyphertext`);

function blockEncrypt(plaintext) {
  const Length = plaintext.length;
  const blockSize = 5;
  // const binl = Length / blockSize;
  // const endBlockLen = binl % 1 * blockSize;
  // const endBlockStart = Length - ((binl - (binl % 1)) * blockSize);
  
  let count = 0;
  let blocks = [];
  let block = [];
  for (let i = 0; i < Length; i++) {
    if (count >= blockSize) {
      count = 0;
      blocks.push(block);
      block = [];
    }
    block.push(plaintext.slice(i, i + 1));
    count += 1;
    if (i === Length - 1) {
      blocks.push(block);
    }
  }

  const blocksLen = blocks.length;
  let blockScram = []
  for (let i = 0; i < blocksLen; i++) {
    let binScram = [];
    let toggle = true;
    for (let j = 0; j < blocks[i].length; j++){
      if (toggle) {
        binScram.push(blocks[i][j]);
      } else {
        binScram.unshift(blocks[i][j]);
      }
      toggle = !toggle;
    }
    blockScram.push(binScram);
  }

  let cyphertext = "";
  for (let i = 0; i < blocksLen; i++) {
    for (let j = 0; j < blocks[i].length; j++) {
      cyphertext = `${cyphertext}${blockScram[i][j]}`;
    }
  }
  console.log(cyphertext);
};
blockEncrypt(plaintext.innerText);