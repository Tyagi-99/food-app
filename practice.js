const no = function(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
}




const EvenNO = () =>{
    for(let i = 0; i <50; i++ ){
        if(i % 2 !==0){
        console.log(i + " this is odd bro ")
    }
    }
    
}


const printTable = (x)=>{
    for(let i = 1; i <= 10; i++){
        console.log( x * i )
    }
}

// printTable();


const SumofNo = () =>{
    let sum = 0;
    for(let i =1; i <= 100; i++){

        if(i%2 !==0) {
            sum +=i;

        }


    }
      console.log("the sum of odd no from  1 to 100 is " + sum)
}


const printPattern = (x) => {
    for (let i = 1; i <= x; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }

    }
}

printPattern(50);
