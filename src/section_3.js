/**
 * var, let, constの違い
 */

// var val1 = "a";
// console.log(val1);

// val1 = "b";
// console.log(val1);

// var val1 = "c";
// console.log(val1);

// let val2 = "d";
// console.log(val2);

// val2 = "e";
// console.log(val2);

// let val2 = "f";

// const val3 = "g";
// console.log(val3);

// // val3 = "h";

// const val3 = "i";

// const val4 = {
//   name: "aa",
//   age: 28
// };
// val4.name = "bb";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// --------------------------------
/**
 * テンプレート文字列
 */
// const name = "kengo";
// const age = 25;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// -------------------------------
/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// -------------------------------
/**
 * 分割代入
 */

// const myProfile = {
//   name: "kengo",
//   age: 25
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。2`;
// console.log(message2);

// const myProfile = ["kengo", 25];
// const message3 = `名前は${myProfile[0]}。年齢${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前${name}, 年齢${age}`;
// console.log(message4);

// -------------------------------
/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "kengo") => console.log(`こんにちは${name}`);
// sayHello("kengo");
// sayHello();
// sayHello("sato");

// --------------------------------
/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// -----------------------------
/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["tanaka", "sato", "suzuki"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const nuwNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(nuwNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "sato") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// -------------------------------
/**
 * 参考演算子
 */

// // ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値じゃ";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "OK";
// };
// console.log(checkSum(10, 20));

// -----------------------------------
/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1 or 2 are true");
// }

// // || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "undefined";
// console.log(fee);

// // &&　は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "something";
// console.log(fee2);
