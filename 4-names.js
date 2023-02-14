//This is a file and it is a module.
//It contains name variables.
//4-names.js, 5-utils.js are meant to intertwine with app.js.
//local variable(not sharing with the app)
const secret = 'Super Spy'
//share
const mike = 'mike'
const meg = 'meg'

//Logging a global variable to check for exports{}
//Whatever we put into exports:{} we can access anywhere in the app.
 
console.log(module)
 
//This is how we share modules.
module.exports = {mike, meg}