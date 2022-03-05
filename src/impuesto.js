export default class Impuestos{
   constructor(){
      this._montoBrutoAnual = 0
      this._deducciones = 0
   }
   get montoBrutoAnual(){
      return this._montoBrutoAnual
   }
   set montoBrutoAnual(monto){
      this._montoBrutoAnual = monto
   }
   get deducciones(){
      return this._deducciones
   }
   set deducciones(deduc){
      this._deducciones = deduc
   }
}