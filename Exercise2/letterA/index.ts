class Person {
     id:number;
     bio: string;
     name: string;
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
function getBiographyById(id:number){
     return lista.find(person => person.id == id)?.bio;
}

console.log(getBiographyById(2));