const student={
    name:'badsha',
    id :111,
    address:'dhaka',
    isSingle:true,
    friends:['mim','rupa','suma'],
    act:function (params) {
        console.log('i love u');
        
    },
    car:{
        brand:'tesla',
        price:6900000000,
        made:2025,
        manufactor:{
            name:'bmw',
            ceo:' i am king',
            country:'bangladesh'
        }
    }

}
//console.log(student.car);
console.log(student.act);