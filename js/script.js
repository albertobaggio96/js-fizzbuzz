const sectionElement= document.querySelector("section")

for(let i = 1; i <= 100; i ++){
  let myNumber;
  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");
    myNumber= "FizzBuzz";
  }else if (i % 3 === 0){
    console.log("Fizz");
    myNumber= "Fizz";
  }else if (i % 5 === 0){
    console.log("Buzz");
    myNumber= "Buzz"
  }else{
    console.log(i); 
    myNumber = i
  }

  sectionElement.append(myNumber) 
}


