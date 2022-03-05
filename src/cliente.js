export default class Cliente {
	constructor() {
		this._nombre = ""
		this._impuesto = {}
	}
	get nombre() {
		return this._nombre
	}
	set nombre(name) {
		this._nombre = name
	}
	get impuesto() {
		return this._impuesto
	}
	set impuesto(imp) {
		this._impuesto = imp
	}
	calcularImpuesto() {
		const totalImpuesto = (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21
      console.log(`total de impuesto a pagar para el cliente ${this.nombre} es: ${totalImpuesto}`)
	}
}
