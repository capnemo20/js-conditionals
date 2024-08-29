const money = 30;
if(money>300){
    // console.log("bro you are rich")
}
else{
    if(money>100){
        // console.log("tui gorib o na borolok o na");
    }
    else{
        if(money>50){
            // console.log("tui to foinni");
        }
        else{
            if(money>20){
                // console.log("tui to beda rich")
            }
            else{
                if(money>5){
                    // console.log("tor kopal bhalo");
                }
                else{
                    // console.log("tui mara kha");
                }
            }
        }
    }
}

let price = 500;
const isLeader = true;
if(isLeader===true){
    // console.log(0);
}
else{
    price+=100;
}
// console.log(price);

price = isLeader===true?0:price=price+100;

// console.log(price= isLeader===true?0:price=price+100);

price = isLeader === true? 
    price>1000?
        1000/2:0:
            price+1000;

