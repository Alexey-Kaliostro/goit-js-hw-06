//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-7");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Получить общую сумму баланса (поле balance) всех пользователей.
*/

// Task START

import users from './users.js'

const calculateTotalBalance = users => {
  // твой код
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
};

console.log(calculateTotalBalance(users)); // 20916

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");