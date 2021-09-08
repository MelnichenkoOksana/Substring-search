let inputStrings = new Array;
let substrings = new Array;

for (var i = 2; i < process.argv.length; i++) {
  inputStrings.push(process.argv[i]);
}

switch (inputStrings.length) {
  case 0:
    console.log('');
    break;

  case 1:
    console.log(inputStrings[0]);
    break;

  case 2:
    inputStrings = sortASC(inputStrings);
    substrings = lsc(inputStrings[0], inputStrings[1]);
    substrings.length > 0 ? console.log(substrings[substrings.length - 1]) : console.log('');
    break;

  default:
    inputStrings = sortASC(inputStrings);
    let a = inputStrings.splice(0, 1)[0];
    let b = inputStrings.splice(0, 1)[0];
    substrings = lsc(a, b);
    while ((inputStrings.length > 0) && (substrings.length > 0)) {
      let c = inputStrings.splice(0, 1)[0];
      let newSubstrings = new Array

      substrings.forEach(elem => {
        if (c.includes(elem)) newSubstrings.push(elem);
      });
      substrings = newSubstrings;
    }
    if (substrings.length > 1) substrings = sortASC(substrings);
    substrings.length > 0 ? console.log(substrings[substrings.length - 1]) : console.log('');

    break;

}

function sortASC(a) {
  a.sort(function (a, b) {
    ASC => b.length - a.length
    DESC => a.length - b.length
    return a.length - b.length;
  });
  return a;
}

function lsc(s1, s2) {
  let substrings = new Array;
  for (let l = s1.length; l > 0; l--) {
    for (let p = 0; p <= s1.length - l; p++) {
      const substring = s1.slice(p, p + l);
      if ((s2.includes(substring)) && (!substrings.includes(substring))) substrings.push(substring);
    }
  }
  substrings = sortASC(substrings);
  return substrings;
}