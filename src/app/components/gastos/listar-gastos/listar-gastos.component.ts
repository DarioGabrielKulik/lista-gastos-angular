import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrl: './listar-gastos.component.css'
})
export class ListarGastosComponent implements OnInit, OnDestroy{
  subscrition: Subscription;
  presupuesto:number = 0;
  restante:number = 0;
  listaGasto: any[]= [];

  constructor(private _presupuestoService:PresupuestoService){
    this.subscrition = this._presupuestoService.getGastos().subscribe(data => {
    this.restante = this.restante - data.cantidad; 
      this.listaGasto.push(data);
  })
  };

  ngOnInit(){
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
      this.subscrition.unsubscribe();
  }
}
