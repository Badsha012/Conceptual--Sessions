function valueDigit(number) {
    if(number.length  !== 11){
        return false;
    } 
     if(number.starsWith('01'=== false)){
        return false
    }
    if(number.includes (" ")===true){
        return false;
    }
    return true;
}
const s=valueDigit("01994   53781");
console.log(s);