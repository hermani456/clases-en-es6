// Exportando y creando la clase Impuestos
export default class Impuesto {
	constructor() {
		this._montoBrutoAnual = 0
		this._deducciones = 0
	} //Getters y Setters
	get montoBrutoAnual() {
		return this._montoBrutoAnual
	}
	set montoBrutoAnual(monto) {
		this._montoBrutoAnual = monto
	}
	get deducciones() {
		return this._deducciones
	}
	set deducciones(deduc) {
		this._deducciones = deduc
	}
}
