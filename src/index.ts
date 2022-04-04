import { Frutas } from './modulos/frutas';
//import { saludo, edad } from './saludo';
import * as pepito from './modulos/saludo';
import { bienvenido } from './bienvenido/';
import defaultsaludo from './modulos/saludo2';

let fruta1 = new Frutas("Manzana","rojo");

console.log(fruta1.nombre);
console.log(fruta1.color);

pepito.saludo("Antonio");
console.log(pepito.edad);

bienvenido("Pedro");

defaultsaludo("Mundo");







