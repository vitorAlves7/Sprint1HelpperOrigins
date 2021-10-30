let word : HTMLInputElement = document.getElementById('stringInput') as HTMLInputElement;
let vowels : HTMLElement = document.getElementById('vowels') as HTMLElement;

/*
This function returns the number of vowels in a string.
Params: 1;
Type: string;
return: number of vowels; 
*/

function numberOfVowels(valueWord: string) : number{
    //All vowels,upper and lowercase
    let allVowels: string[] = ['a','e','i','o','u','A','E','I','O','U'];

    let allVowelsInTheStting: number = 0;

    for(let letter of valueWord){
        if(allVowels.indexOf(letter) !== -1){
            allVowelsInTheStting++;
        }
    }
    
    return allVowelsInTheStting;
}

function responseVowels(){
    vowels.textContent = numberOfVowels(word.value).toString();

}

document.addEventListener('input', responseVowels);


