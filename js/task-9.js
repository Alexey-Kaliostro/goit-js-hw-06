//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-9");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/

// Task START

const getNamesSortedByFriendsCount = users => {
  // твой код
  return [...users]
  .sort((lessFriendsQty, moreFriendsQty) => lessFriendsQty.friends.length - moreFriendsQty.friends.length)
  .map(user => user.name);
    
    
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");