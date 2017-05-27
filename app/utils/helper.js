import request from 'superagent';
// import rn from 'random-number';

const http = {
  post: (text) => {
    if (text && text.length > 0) {
      const url = `https://api.github.com/search/repositories?q=more&page=2&per_page=3`;
      return request.post(url).send().set('Accept', 'application/x-www-form-urlencoded');
    }
  },
};
// function randomNumber(minimum, maximum) {
//   const options = {
//     min: minimum ? minimum : 1,
//     max: maximum ? maximum : 1111111,
//     integer: true,
//   };
//   return rn(options);
// }
// function prettifyCamelCase(input) {
//   if (!input) {
//     return input;
//   }
//   let output = '';
//   const len = input.length;
//   let char;

//   for (let i = 0; i < len; i++) {
//     char = input.charAt(i);
//     if (i === 0) {
//       if (char === '-' || char === '_') {
//         output += '';
//         i++;
//       }
//       output += input.charAt(i).toUpperCase();
//     } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
//       output += ` ${char}`;
//     } else if (char === '-' || char === '_') {
//       output += ' ';
//     } else {
//       output += char;
//     }
//   }
//   return output;
// }
// function createOptions(datas) {
//   const keys = Object.keys(datas);
//   const newDatas = {};
//   keys.forEach((key) => {
//     const data = datas[key][0];
//     const newData = [];
//     const postKeys = ['post_keys', 'meta_keys', 'taxonomy_keys'];
//     postKeys.forEach((dataKey) => {
//       const children = [];
//       data[dataKey].forEach(option => children.push({
//         name: prettifyCamelCase(option),
//         slug: option,
//       }));
//       if (children.length > 0) {
//         newData.push({
//           name: prettifyCamelCase(dataKey),
//           slug: dataKey,
//           children,
//         });
//       }
//     });
//     newDatas[key] = newData;
//   });
//   return newDatas;
// }
export {
  http,
  // randomNumber,
  // prettifyCamelCase,
  // createOptions,
};
