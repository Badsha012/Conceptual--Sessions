

// let x= totalFine(0);
function totalFine(fare) {


    // chanlless
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    

    // code
 
      
    let fine = fare + (fare * 0.20) + 30;
    
    return fine;
  
}
let x= totalFine(552);




 console.log(x);





