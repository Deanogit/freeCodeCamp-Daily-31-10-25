// SpOoKy~CaSe
// // Given a string representing a variable name, convert it to "spooky case" using the following constraints:

// // Replace all underscores (_), and hyphens (-) with a tilde (~).
// // Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
// // For example, given hello_world, return HeLlO~wOrLd.

// function spookify(boo) {
//   console.log(boo);

//   // handletilde
//   const tildeRegex = /[_-]/;
//   let tilde = boo.replace(tildeRegex, '~');
//   console.log(tilde);

//   // split
//   const arr = tilde.split('');

//   let letterRegex = /[a-z]/i;
//   let counter = 0;
//   // loop
//   for (let i = 0; i < arr.length; i++) {
//     if (letterRegex.test(arr[i])) {
//       counter++;
//     }
//     if (counter === 0 || counter % 2 === 0) {
//       arr[i] = arr[i].toUpperCase();
//     } else {
//       arr[i] = arr[i].toLowerCase();
//     }
//   }
//   console.log(arr.join(''));
//   return arr.join('');

//   return boo;
// }

function spookify(boo) {
  const arr = boo.split('');
  let letterRegex = /[a-z]/i;
  let counter = 0;

  for (let i = 0; i < boo.length; i++) {
    // handle tilde
    if (arr[i] === '_' || arr[i] === '-') {
      arr[i] = '~';
    }

    // handle spooky letters
    if (letterRegex.test(arr[i])) {
      if (counter % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
      } else {
        arr[i] = arr[i].toLowerCase();
      }
      counter++;
    }
  }

  console.log(arr.join(''));
  return arr.join('');
}
