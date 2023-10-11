/*Para este segundo ejercicio se pide que el usuario sea capaz de escribir por consola el nombre de un Pokémon para después imprimir por pantalla su información. PokéAPI (pokeapi.co) 
Para esta parte del ejercicio se tendrá que usar la API de Deno Input Prompts - Deno by Example.
Los datos que se deberán mostrar son:
Nombre
tipo/tipos
id
Punto extra: Antes de pedir al usuario el nombre del Pokémon. Indicar con un 1 o un 2 si se quiere buscar un tipo o un Pokémon respectivamente. Para el tipo imprimir lo siguiente:
Tipo
Generación
*/
export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    pokemon:     Pokemon[];
}
export interface Pokemon{
    name: string;
    types:Type[];
    id:number;
    generation:Generacion[];

}
export interface Type{
    slot:number;
    type:{
      name:string;
      url:string;
    }

}
export interface Generacion{
    name:string;
    url:string;
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

const fetchData = async () => {
  try {
    // Fetch a resource from the network. It returns a Promise
    // that resolves to the Response to that Request, whether it is successful or not.
    const num=prompt("1: Busca un tipo 2: Busca un pokemon"); 
    console.log("La opcion es la ",num);
    if(num==="1"){
      const tipo=prompt("Dime el tipo que quieres buscar");
      const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
      const data: Pokemon = await response.json();
      console.log("El tipo es ",data.name," y su generacion es ",data.generation)
    }
    
    if(num==="2"){
      const nombre=prompt("Dime el nombre del pokemon que queremos buscar");
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      const data: Pokemon = await response.json();
      console.log("Nombre del Pokemon: ",data.name,"\n","Su tipo: ",data.types,"\n","Su Id es: ",data.id);
  }
      
   
  } catch (error) {
    // Debemos tratar siempre los errores cuando trabajemos con Promesas
    console.log(error);
  }
};
  

await fetchData();
