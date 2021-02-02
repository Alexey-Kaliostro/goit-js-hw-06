//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-6");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
*/

// Task START

import users from './users.js'

const getUsersWithAge = (users, min, max) => {
  // твой код
  return users.filter(users => users.age >= min && users.age <= max);

};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");