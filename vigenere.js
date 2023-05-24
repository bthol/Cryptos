// const unencrypted = document.body.querySelector(`#plaintext`).innerText;
// const keyword = document.body.querySelector(`#key`).innerText;
// const encrypted = document.body.querySelector(`#cyphertext`);

// function constructTabulaRecta() {
//   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   const tabulaRecta = [];
//   alphabet.forEach((letter) => {
//     let letterPlace = 0;
//     for (let i = 0; i < 26; i++){
//       if (alphabet[i] === letter) {
//         letterPlace = i;
//       }
//     }
//     let arr = []
//     for (let i = letterPlace; i < 26; i++){
//       arr.push(alphabet[i]);
//     }
//     for (let i = 0; i < letterPlace; i++) {
//       arr.push(alphabet[i]);
//     }
//     tabulaRecta.push(arr);
//   })
//   return tabulaRecta;
// }
// const tabRec = constructTabulaRecta();

// function vigenereEncrypt(plainText, keyword) {
//   let encrypt = plainText;
//   let encryptAlphaID = [];
    
//   // get letter from keyword
//   for (let x = 0; x < keyword.length; x++) {
//     const subKey = keyword.slice(x, x + 1);
//     // console.log(subKey);

//     // get alphabetic index for each letter from keyword
//     let keyAlphaID;
//     tabRec[0].forEach((letter, index) => {
//       if (tabRec[0][index] === subKey) {
//         keyAlphaID = index;
//       }
//     });
//     // console.log(keyAlphaID);

//     // use alphabetic index to select appropriate cypher in the tabula recta
//     const cypher = tabRec[keyAlphaID];
//     // console.log(cypher);

//     // iterate over encrypt compiling an array of the alphabetic indices of each letter
//     encryptAlphaID = [];
//     for (let x = 0; x < encrypt.length; x++) {
//       subText = encrypt.slice(x, x + 1);
//       tabRec[0].forEach((letter, index) => {
//         if (tabRec[0][index] === subText) {
//           encryptAlphaID.push(index);
//         }
//       })
//     }
//     console.log(encryptAlphaID);
    
//     // assign letters from cypher accessed by the alphabetic indices of the plainText
//     let strCompile = "";
//     for (let i = 0; i < encryptAlphaID.length; i++) {
//       strCompile = `${strCompile}${cypher[encryptAlphaID[i]]}`;
//     }
//     encrypt = strCompile;
//   }
//   encrypted.innerText = encrypt;
// }
// vigenereEncrypt(unencrypted, keyword);

// // const tabRec = [
// //   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
// //   ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"],
// //   ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b"],
// //   ["d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c"],
// //   ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d"],
// //   ["f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e"],
// //   ["g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f"],
// //   ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
// //   ["l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
// //   ["m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"],
// //   ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"],
// //   ["o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"],
// //   ["p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
// //   ["q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"],
// //   ["r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"],
// //   ["s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"],
// //   ["t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"],
// //   ["u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
// //   ["v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"],
// //   ["w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"],
// //   ["x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"],
// //   ["y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x"],
// //   ["z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"],
// // ];