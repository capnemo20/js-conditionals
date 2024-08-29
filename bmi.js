weight = 83
height = 1.4
bmi = weight/(height*height)

if(bmi<18.5){
    console.log("You are Underweight");
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("You are OK");
}
else if(bmi>=25 && bmi<=29.9){
    console.log("You are Overweight");

}
else{
    console.log("You are  Obese");
}