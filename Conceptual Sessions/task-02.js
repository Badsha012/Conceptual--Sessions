






function onlyCharacter(str) {
    // Check if input is not a string
    if (typeof str !== "string") {
        return "Invalid";
    }
    // Remove all spaces, convert to uppercase
    return str.replace( /\s+/g, " ").toLowerCase();
}
let x=onlyCharacter(["hack", "me"]);  


console.log(x);
// console.log(onlyCharacter(8888888)); 