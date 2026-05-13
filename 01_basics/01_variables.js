const accountId = 1234;
let accountEmail = "Kuldeep@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

accountEmail = "Lakhera@gmail.com";
accountPassword = "6969";
accountCity = "Maharashtra";

/*
prefer not to use var
because o fissue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
