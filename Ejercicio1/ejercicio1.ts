/* Para este primer ejercicio se pide hacer una petición GET al siguiente endpoint: Quote Garden - Star on GitHub | QuoteGarden (pprathameshmore.github.io) 
Este servicio nos devolverá un listado de cuotas. Una vez obtengamos las cuotas deberemos imprimir por pantalla la información del siguiente modo.
Se debe cambiar la X por cada campo de la respuesta:
"Genero: x Autor: x Quote: x"
Punto extra: Cada llamada imprime 10 cuotas, buscar la manera de obtener 30 cuotas distintas
*  deno run --allow-all ejercicio1.ts

*/
export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        Data[];
}
export interface Data{
    id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    _v:number;

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
    const response = await fetch(
        "https://quote-garden.onrender.com/api/v3/quotes"

    );

    // Takes a Response stream and reads it to completion. It returns a promise that resolves
    // with the result of parsing the body text as JSON.
    const data: ResponseData = await response.json();

    console.log("Status:",data.statusCode); 
    data.data.forEach((quote:Data) => {
        console.log("---------------------------------")
        console.log("Genero: ",quote.quoteGenre,"Autor: ",quote.quoteAuthor,"Quote: ",quote.quoteText)    //Se va a imprimir el genero, el autor y la quote
      })
  } catch (error) {
    // Debemos tratar siempre los errores cuando trabajemos con Promesas
    console.log(error);
  }
};
const llamadas= async()=>{
    for(let i=0;i<3;i++){                                                                                 //Como cada llamada son 10 cuotas, 3 llamadas son 30 cuotas
        await fetchData(); 
    }
}



/*const secondMethod = () => {
  fetch("https://quote-garden.onrender.com/api/v3/authors?genre=business&limit=10")
    .then((response) => response.json())
    .then((data: ResponseData) => {
        console.log("Status:",data.statusCode);
        data.data.forEach(author => {
        console.log("---------------------------------")
        console.log(author)
      })
    })
    .catch((error) => console.log(error));
};
*/

await llamadas();                                                                                          //Utilizamos await para que se espere a que se hagan las 3 llamadas
//secondMethod();