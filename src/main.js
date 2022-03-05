import Cliente from "./cliente.js";
import Impuestos from "./impuesto.js";


const impuesto1 = new Impuestos()
impuesto1.montoBrutoAnual = 1000000
impuesto1.deducciones = 180000

const impuesto2 = new Impuestos()
impuesto2.montoBrutoAnual = 500000
impuesto2.deducciones = 80000

const cliente1 = new Cliente()
cliente1.nombre = 'Maria'
cliente1.impuesto = impuesto1

const cliente2 = new Cliente()
cliente2.nombre = 'Jacove'
cliente2.impuesto = impuesto2

console.log(cliente1)
console.log(cliente2)
cliente1.calcularImpuesto()
cliente2.calcularImpuesto()