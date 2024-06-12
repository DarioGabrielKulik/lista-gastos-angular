import { Component } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrl: './ingresar-gastos.component.css'
})
export class IngresarGastosComponent {
nombreGasto:string = "";
cantidad:number = 0;
formularioIncorrecto:boolean = false;
textIncorrecto: string = "Nombre, Gasto o Cantidad incorrecta";

constructor(private _presupuestoService: PresupuestoService){}

agregar(){
  if(this.nombreGasto === "" || this.cantidad <= 0 || this.cantidad >= this._presupuestoService.restante){
    this.formularioIncorrecto = true;
  }else{
    const GASTO = {
      nombre:this.nombreGasto,
      cantidad: this.cantidad
    }

    this._presupuestoService.agregarGasto(GASTO);

    this.formularioIncorrecto = false;
    this.nombreGasto = "";
    this.cantidad = 0;
  }
}
}
