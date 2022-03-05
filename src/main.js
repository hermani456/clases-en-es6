// Importando Cliente e Impuesto
import Cliente from "./Cliente.js"
import Impuesto from "./Impuesto.js"

function main() {
	// Creando nuevo Impuesto
	const impuesto1 = new Impuesto()
	impuesto1.montoBrutoAnual = 100000
	impuesto1.deducciones = 5000

	// Creando nuevo Cliente
	const cliente1 = new Cliente()
	cliente1.nombre = "Kika"
	cliente1.impuesto = impuesto1

	// Mostrando cliente1 y el calculo de su impuesto
	console.log(cliente1)
	cliente1.calcularImpuesto()
}

main()