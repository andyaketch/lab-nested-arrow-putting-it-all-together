// const password=[1,2,3]

// // function passwordCheck(keyword){
// for (let i=0 ;i<length.password ;i++ )
//   console.log(prompt("Enter your password:"))
//   if (keyword===password);
//   then;
//   console.log("Password Accepted")
//   else
//     console.log("Wrong Password")
// }

function createLoginTracker(userInfo){

let attemptCount=0
return (passwordAttempt) => {
    attemptCount += 1;

if (attemptCount > 3)
  console.log("Incorrect Password, YOu have run out of attempts")

if (passwordAttempt===userInfo)
  console.log("Password Accepted")
else
   console.log("Incorrect password")
}
}

// ()
// module.exports = {
//   ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
// };