/*31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var users = ["Ali", "imran", "samad", "Admin", "fayaz", "zeeshan"];
// to remove all members
// userName1 = [];
// console.log(userName);
//console.log(userName)
// 
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("hello admin. would you like to see status report?");
        }
        else {
            console.log("helow ".concat(users, ", thank you for loggin in again}"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some user");
}
