const numbers = [5, 2, 9, 30, 12, 1, 0, 13, 3, 8, 10, 2 ,3 ,5, 29];
let swap = true;
let i = true;

let temp = 1;



    for(let x = 0 ; x < numbers.length; x++)
    {
        for(y = 0 ; y < numbers.length ; y++)
        if(numbers[x] < numbers[y]){
            let num1 = numbers[x];
            numbers[x] = numbers[y]; 
            numbers[y] = num1;
        }


    temp--;
}

    console.log(numbers);


