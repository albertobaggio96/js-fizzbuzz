const sectionElement = document.querySelector("section");

for(let i = 1; i <= 100; i ++){
  let myNumber = i;

  let color = "";

  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");
    myNumber = "FizzBuzz" ;
    color = "red";
  }else if (i % 3 === 0){
    console.log("Fizz");
    myNumber = "Fizz";
    color = "blue";
  }else if (i % 5 === 0){
    console.log("Buzz");
    myNumber = "Buzz";
    color = "green";
  }

  sectionElement.innerHTML+= `<div class="${color}">${myNumber}</div>`;
}


