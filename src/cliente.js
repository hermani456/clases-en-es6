// Definiendo la clase Cliente y exportandola
export default class Cliente {
	constructor() {
		this._nombre = ""
		this._impuesto = {}
	}
	// Getters y Setters de Cliente e Impuesto
	get nombre() {
		return this._nombre
	}
	set nombre(nombre) {
		this._nombre = nombre
	}
	get impuesto() {
		return this._impuesto
	}
	set impuesto(impuesto) {
		this._impuesto = impuesto
	}
	//  Método para calcular el Impuesto
	calcularImpuesto() {
		const totalImpuesto =
			(this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21
		console.log(
			`total de impuesto a pagar para el cliente ${this.nombre} es: ${totalImpuesto}`
		)
	}
}
