import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Pedido, Otro } from '../shared/pedido';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.scss']
})
export class HacerPedidoComponent implements OnInit {
  
  
  checkoutForm = this.formBuilder.group({
    
    email:'',
    tipoPostre:'',
    porciones:'',
    comentarios:'',
    imagen:''
  });
  constructor( private formBuilder: FormBuilder) {
    
  }

  onSubmit(): void {
   
  
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
 
  ngOnInit() {
    
  }

}
