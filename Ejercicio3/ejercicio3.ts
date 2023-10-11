//Teniendo en cuenta el ejercicio anterior, se pide crear un programa CLI Command Line Interface para una biblioteca. El tipo de un Libro será:
//id: Identificador único del libro. NO PUEDE HABER DOS IGUALES
//title
//author
//pages
//genre
//Tendremos las siguientes opciones:
//1 - Crear libro
//2 - Filtrar libro por género
//3 - Borrar libro
//4 - Salir
//Punto extra: Realizar test de cada función siguiendo la guía oficial de Deno
type libro={                                                                                                                      //Creamos un tipo libro
    id:number;
    title:string;
    author:string;
    pages:number;
    genre:string;
}

//No me funciona el filtrar por genero
const filtro_genero=(biblioteca:libro[],genre:string)=>{                                                                                                                                                                      
    biblioteca.forEach((libro:libro)=>{
        if(genre===libro.genre){                                                                                                   //Si el genero del libro es igual al genero que hemos introducido por teclado, nos imprime el titulo del libro
            console.log(libro.title);
        }
    });
}

const Menu=()=>{
    const biblioteca:libro[]=[];                                                                                                      //Creamos un array de libros para guardar los libros que creemos
    let rep:boolean=true;
    let cond:boolean=true;
    let opcion:number=0;
    do {
        console.log("Dime que opcion quieres hacer\n 1-Crear libro\n 2-Filtrar libro por genero\n 3-Borrar libro\n 4-Salir")
        do{
            try {
                opcion=Number(prompt())
                if(opcion<=0 || opcion>4) {
                    console.log("Los numeros tienen que estar entre 1 o 4");
                }
                cond=false;
            }
            catch(error) {
                console.log(error);
            }
        
            switch(opcion){
                    case 1:
                        //Creamos un libro
                        const id=Number(prompt("Dime el id del libro")) ;
                        const titulo=prompt("Dime el titulo del libro");
                        const autor=prompt("Dime el autor del libro");
                        const paginas=Number(prompt("Dime las paginas del libro"));
                        const genero=prompt("Dime el genero del libro");
                        const newlibro: libro={id,titulo,autor,paginas,genero};
                        biblioteca.push(newlibro);                                          //Añadimos el libro al array
                        console.log("Hemos creado el libro")                                                                                        
                        break;
                    case 2:
                        //Filtramos por genero 
                        const genero_busque = prompt("Dime el genero del libro que queremos buscar");
                        if (genero_busque !== null) {
                            const f=filtro_genero(biblioteca, genero_busque);
                            console.log(f);
                        } else {
                            console.log("No se ingresa un genero correcto");
                        }
                        break;
                    case 3:
                        //Borramos el ultimo libro creado
                        console.log("Hemos eliminado este libro",biblioteca.pop())                                                                                                   
                        break;
                    case 4:
                        //Salimos del programa
                        rep=false;
                        console.log("Saliste del programa");
                        break;
                }
        }while(cond);
    }while(rep);

}
Menu();
