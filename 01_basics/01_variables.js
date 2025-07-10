const accountId = 1234567890
let accountEmail = "himanshuach.842@gmail.com"
var accountPassword = "himanshu@123"
let accountState;

/*
prefer not to use var, as it has function scope and can lead to unexpected behavior. and also it is hoisted. not used in block scope.
Use const for variables that should not change, such as accountId.
Use let for variables that will change and const for constants that should not be reassigned.
*/

accountCity = "Delhi"

// accountId = 2  // not allowed, const cannot be reassigned
accountEmail = "mcdowellswifi653@gmail.com"
accountPassword = "mcdowells@123"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log (accountPassword);
console.log(accountCity);   

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
