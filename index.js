
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

const user = { username: "user1", password: "password123" };
const tracker = createLoginTracker(user);

console.log(tracker("wrong1"));     
console.log(tracker("wrong2"));     
console.log(tracker("password123")); 
console.log(tracker("wrong4"));     

// ()
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};