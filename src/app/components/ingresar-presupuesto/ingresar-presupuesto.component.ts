import { Component, Input } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent {
cantidad:number=0;
cantidadIncorrecta:boolean = false;

constructor(private _presupuestoService:PresupuestoService, private router:Router){

}

agregar(){
  if(this.cantidad > 0){
    this.cantidadIncorrecta = false;  
    this._presupuestoService.presupuesto = this.cantidad;
    this._presupuestoService.restante = this.cantidad;
    this.router.navigate(['/gastos'])
  }else{
    this.cantidadIncorrecta = true;
  }
}
}
