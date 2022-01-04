import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pedido, Otro } from '../shared/pedido';

@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.scss']
})
export class HacerPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  pedido: Pedido;
  otro = Otro;

  otroPostre:string[]=["hola","que","tal", "popeta"];
  selectedQuantity = "hola";

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.pedidoForm = this.fb.group({

      email: '',
    comentarios: '',
    //imagen: '',
    tipoPostre: '',
    porciones:0,
    //masaColor: '',
    //masaSabor: '',
    //coberturaColor: '',
    //coberturaSabor: '',
    otro:'None'
  
    });
  }
  onSubmit() {
    this.pedido = this.pedidoForm.value;
    console.log(this.pedido);
    
  }
  ngOnInit() {
  }

}
