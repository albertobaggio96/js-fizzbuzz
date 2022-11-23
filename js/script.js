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

  // sectionElement.innerHTML+= `<div>${myNumber}</div>`

  if (myNumber=== "FizzBuzz"){
    sectionElement.innerHTML+= `<div class="red">${myNumber}</div>`
  } else if (myNumber === "Fizz"){
    sectionElement.innerHTML+= `<div class="blue">${myNumber}</div>`
  } else if (myNumber === "Buzz"){
    sectionElement.innerHTML+= `<div class="green">${myNumber}</div>`
  } else {
    sectionElement.innerHTML+= `<div>${myNumber}</div>`
  }
}


