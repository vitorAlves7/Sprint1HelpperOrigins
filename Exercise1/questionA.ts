    let allVowels: string[] = ['a','e','i','o','u','A','E','I','O','U'];

    function numberOfVowels(valueWord: string) : number{
        
        let allVowelsInTheStting: number = 0;

        for(let letter of valueWord){
           if(allVowels.indexOf(letter) !== -1){
               allVowelsInTheStting++;
           }
        }
        
        return allVowelsInTheStting;
    }

    console.log(numberOfVowels('Winter is coming!'));