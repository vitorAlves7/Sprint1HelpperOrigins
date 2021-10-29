/*
    This part of the code is the part with the imperative paradigm
*/

/*
This function receives a list and checks if it is of type number, if it is it returns a list with the largest number in the list
, the smallest and the average of the numbers. Otherwise returns an empty list and print to the console that is not a numeric list.
Params: 1;
Type: any [];
return: A number list with the highest value at position 0, the lowest at 1, and the average at position 3;
*/
function main(listItems: any[]) : number []{
    let biggerSmallerAndMediaNumbers: number [] = [];
    if(!validatesIfItIsNumericalList(listItems)){
        console.log('A lista passada não é numérica');
        return biggerSmallerAndMediaNumbers;
    } else {
        biggerSmallerAndMediaNumbers.push(returnTheBiggestNumberInArray(listItems));
        biggerSmallerAndMediaNumbers.push(returnTheSmallerNumberInArray(listItems));
        biggerSmallerAndMediaNumbers.push(returnTheAverageOfTheNumbersInArray(listItems));
    }
    return biggerSmallerAndMediaNumbers;
}

/*
    This function returns whether a list is of type number or not
    Params: 1;
    Type: any [];
    return: A boolean value whether it is a number list or not
*/
function validatesIfItIsNumericalList(listItems: any[]) : boolean {
    for(let item of listItems){ 
        if(typeof(item) !== 'number'){
            return false;
        }
    }
    return true;
}

/*  
    This function returns the highest value in the list
    Params: 1;
    Type: number;
    return: the highest number in the list
*/
function returnTheBiggestNumberInArray(numberList: number []): number{
    let bigger = numberList[0];
    for(let i = 1; i < numberList.length; i++){
        if(numberList[i] > bigger){
            bigger = numberList[i];
        }
    }
    return bigger;
}

/*  
    This function returns the smaller value in the list
    Params: 1;
    Type: number;
    return: the smaller number in the list
*/
function returnTheSmallerNumberInArray(numberList: number []): number{
    let smaller = numberList[0];
    for(let i = 1; i < numberList.length; i++){
        if(numberList[i] < smaller){
            smaller = numberList[i];
        }
    }
    return smaller;
}

/*  
    This function returns the average of all values in the list.
    Params: 1;
    Type: number;
    return: the  the average of the numbers in the list
*/
function returnTheAverageOfTheNumbersInArray(numberList: number []): number{
    let total = 0;
    for(let number of numberList){
        total += number;
    }
    return total / numberList.length;

}

let numberList  = [5,2,3,5,8];
console.log(main(numberList));
// console.log(returnTheSmallerNumberInArray(numberList));
// console.log(returnTheBiggestNumberInArray(numberList));
