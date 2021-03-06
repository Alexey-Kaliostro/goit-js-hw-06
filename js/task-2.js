//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-2");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*
Получить массив объектов пользователей по цвету глаз (поле eyeColor).
*/

//Task START

import users from './users.js'

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


