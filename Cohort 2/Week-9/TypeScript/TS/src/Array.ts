// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function filterUser(user: User[]) {
//   return user.filter((x) => x.age >= 18);
// }

// console.log(
//   filterUser([
//     {
//       firstName: "John",
//       lastName: "Doe",
//       age: 35,
//     },
//     {
//       firstName: "Jack",
//       lastName: "Doe",
//       age: 19,
//     },
//   ])
// );

function maxVal(arr: number[]): number {
  // return Math.max(...arr);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maxVal(arr));
