"use strict";
// interface User {
//     name : string;
//     age : number;
// }
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
function updatePerson(updatePersonProps) {
    console.log('Hit THE DB');
}
function updateUser(updatedProps) {
    // hit the database tp update the user
}
updateUser({});
