const  numbers=[12,13,21,23,34]
for(let i=0;i<numbers.length;i++){
    const number=numbers[i];
    console.log(number);
}



for(const number of numbers){
    console.log(number);
}


const products=[
    {id: 1,   name:'oppo',price:20000},
    {id: 2,   name:'vivo',price:21000},
    {id: 3,   name:'samsung',price:330000},
     {id: 4,   name:'walton',price:30000},

  {id: 5,   name:'redmi',price:20000},

  {id: 6,   name:'i phone',price:120000},

]
for(const product of products){
    console.log(product);
}

