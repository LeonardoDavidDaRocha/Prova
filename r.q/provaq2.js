/*Utilizando arrow function, escreva uma função chamada capitalizarTitulos que use o
método map para transformar uma lista de títulos de livros (strings) em uma lista com
cada palavra dos títulos capitalizada. Por exemplo, se a função receber o array ["o
pequeno príncipe", "dom casmurro", "a metamorfose"], ela deve retornar ["O Pequeno
Príncipe", "Dom Casmurro", "A Metamorfose"].*/

const capitalizarTitulos = Livros => Livros.map(String => String.split(' ').map(nome => nome.charAt(0).toUpperCase() + nome.slice(1)).join(' '));

console.log(capitalizarTitulos( ["o pequeno príncipe", "dom casmurro", "a metamorfose"]));
