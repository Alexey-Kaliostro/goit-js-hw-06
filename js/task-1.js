//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-1");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Получить массив имен всех пользователей (поле name).
*/

// Task START

const getUserNames = users => {
  // твой код
  return users.map(user => user.name);
 
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//Task END

/*

// Первый вариант
const userNamesArr = users.map(function(user){
  return user.name;
});
console.log(userNamesArr);

// Второй вариант
const userNamesArr2 = users.map(user => user.name);
console.log(userNamesArr2);

*/

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");