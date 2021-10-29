class Person {
     id:number;
     name: string;
     bio: string;
     constructor(id:number,name:string,bio:string){
          this.id = id;
          this.name = name;
          this.bio = bio;
     }

}

let lista: Array<Person> = [
     {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
     {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
     {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
     {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

/*
  This function returns a person's bibliography via their id
  Params: 1;
  Type: number;
  return: bibliography of the person that id was passed by params;   
*/
function getBiographyByIdFunctional(id:number) : string {
     return lista.find(person => person.id == id)?.bio as string;
}

/*
  This function returns a person's bibliography via their id
  Params: 1;
  Type: number;
  return: bibliography of the person that id was passed by params;   
*/
function getBiographyById(id:number) : string {
     for(let person of lista){
          if(person.id === id){
               return person.bio as string;
          }
     }
     return 'Pessoa não encontrada';
}

/*
  This function returns a person's name via their id
  Params: 1;
  Type: number;
  return: name of the person that id was passed by params;   
*/
function getNameByIdFunctional(id:number) : string {
     return lista.find(person => person.id == id)?.name as string;
}

/*
  This function returns a person's name via their id
  Params: 1;
  Type: number;
  return: name of the person that id was passed by params;   
*/
function getNameById(id:number) : string {
     for(let person of lista){
          if(person.id === id){
               return person.name as string;
          }
     }
     return 'Pessoa não encontrada';
}

/*
  This function delete a person that id was passed by params
  Params: 1;
  Type: number;
  return: void;   
*/
function deletePersonByIdFunctional(id:number) : void {
     return lista.forEach((person,index) =>{
          if(person.id === id){
               lista.splice(index,1);
          }
     });
}

/*
  This function delete a person that id was passed by params
  Params: 1;
  Type: number;
  return: void;   
*/
function deletePersonById(id:number) : void {
    for(let i = 0;  i < lista.length; i++){
          if(id === lista[i].id){
               lista.splice(i,1);
          }
    } 
}
/*
     This function changes a person's name or bio in the array
     Parmans:3
     Types: number, string,string
     return void;
*/
function changeAPesonBioFunctional(id:number, option:string, newValue:string) : void {
    lista.forEach((person,index) =>{
          if(person.id === id){
               if(option === "name"){
                    lista[index].name = newValue;
               } else if(option === "bio"){
                    lista[index].bio = newValue;
               } 
          }               
     });
}

/*
     This function changes a person's name or bio in the array
     Parmans:3;
     Types: number, string,string;
     return void;
*/

function changeAPesonBio(id:number, option:string, newValue:string) : void {
     for(let person of lista){
          if(person.id === id){
               if(option === "name"){
                    person.name = newValue;
               } else if(option === "bio") {
                    person.bio = newValue;
               }
          }
     }
}
//Examples
console.log(getBiographyByIdFunctional(1));
console.log(getBiographyById(2));
console.log(getNameByIdFunctional(4));
console.log(getNameByIdFunctional(3));
changeAPesonBioFunctional(2,"bio","Bio changed");
console.log(lista);
changeAPesonBio(1,"name","pedro");
console.log(lista);
deletePersonById(1);
console.log(lista);
deletePersonByIdFunctional(2);
console.log(lista)
