
/*
===========================
|   Exercise 2 code       |
===========================
*/

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
     return: void;
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


/*
===========================
|   Exercise 4 code       |
===========================
*/

let tableOfPeople : HTMLElement = document.getElementById('tableOfPeople') as HTMLElement;
let allPeople : string = renderTable(lista) as string;
tableOfPeople.innerHTML = allPeople as string;


/*
     This function loads a table in the HTML body
     Parmans:0;
     Types: void;
     return:  void;
*/

function loadTable(lista: Person[]): void{
     let tableOfPeople : HTMLElement = document.getElementById('tableOfPeople') as HTMLElement;
     
     let allPeople : string = renderTable(lista) as string;
     tableOfPeople.innerHTML = allPeople as string;
}

/*
     This function create the table with all people from a person list
     Parmans:1;
     Types: People [];
     return: return A HTML people table ;
*/

function renderTable(people: Person []) : string {
  let rows = people.map((person: Person) => {
    return createTableLine(person.id, person.name, person.bio);
  });	
  return createTableHeader(rows);
}


/*
     This function creates the line of a table with person attributes
     Parmans:3;
     Types: number, string, string;
     return: A person's table line ;
*/

function createTableLine(id: number, name: string, bio: string) : string{
     return`<tr id="${id}">
               <td>${id}</td>
               <td>${name}</td><td>${bio}</td>
               <td><a href="#form${id}" type="button" id="edit-person-${id}" onClick="renderForm(${id});">Alterar dados de ${name}</a><td>
               <td><a href="#" type="button" id="delete-person-${id}" onClick="deletePersonFromTheTable(${id});">Deletar dados ${name}</a><td>
          </tr>`;
}

/*
     This function create the header of a person table
     Parmans:1;
     Types: string [];
     return: A header from an HTML table;
*/

function createTableHeader(rows : string []) : string{ 
  return`<table>
            <tr><td><b>Id</b></td>
            <td><b>Name</b></td>
            <td><b>Bio</b></td>
            <td><b>Editar</b></td>
            <td><b>Deletar</b></td></tr>
            ${rows.join("")}
        </table>`;
}

/*
     This function delete a table person
     Parmans:1;
     Types: string;
     return  void;
*/

function deletePersonFromTheTable(id: number): void{
     deletePersonByIdFunctional(id);
     let tableOfPeople : HTMLElement = document.getElementById('tableOfPeople') as HTMLElement;
     let allPeople : string = renderTable(lista) as string;
     tableOfPeople.innerHTML = allPeople as string;
     formPeople.innerHTML = ``;
}

/*
     This function edit a table person
     Parmans:2;
     Types: number,string;
     return  void;
*/

function editFormPerson(id: number,option: string) : void {
     let input: HTMLInputElement = document.querySelector(`#${option}`)as HTMLInputElement;
     let textValue = input.value;
     changeAPesonBioFunctional(id, option, textValue);
     let allPeople : string = renderTable(lista) as string;
     tableOfPeople.innerHTML = allPeople as string;
     formPeople.innerHTML = ``;
    
}

/*
     This function creates a form to edit a person
     Parmans:1;
     Types: number
     return  void;
*/



let formPeople : HTMLElement = document.getElementById('formPeople') as HTMLElement;
function renderForm(id : number): void{
    formPeople.innerHTML = ` <h1>Alterar dados</h1>
    <form id="formName" name="formName" onsubmit="editFormPerson(${id},'name')">
        <label for="fname"><b>Nome da pessoa:</b></br>${getNameByIdFunctional(id)}</label><br>
        <input type="text" id="name" name="fname">
        <input type="submit" value="Mudar nome"></br>
    </form>
    <form id="formBio" name="formBio" onsubmit="editFormPerson(${id},'bio')">  
        <label for="fbio"><b>Bio da Pessoa:</b></br>${getBiographyByIdFunctional(id)}</label><br>
        <input type="text" id="bio" name="fbio">
        <input type="submit" value="Mudar Bio">
    </form>`
}