import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Postre} from '../shared/postre';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss']
})
export class VerMasComponent implements OnInit {

  postres:Postre[]=[
    {
      name:'Torta de limón',
      id:'Torta1',
      image:'../assets/images/IMG_5882.JPG',
      category:'torta',
      description:'Torta de limón en forma de corazón cubierta con crema de mantequilla sabor vainilla',
  },
  {
    name:'Torta de 2 pisos',
    id:'Torta2',
    image:'../assets/images/NXVF2168.JPG',
    category:'torta',
    description:'Torta de 2 pisos cubierta con crema de mantequilla sabor vainilla',
},
{
  name:'Torta de santiago',
  id:'Torta3',
  image:'../assets/images/IMG_5492.JPG',
  category:'torta',
  description:'Torta de almendra decorada con azucar en polvo',
}
  ];
  constructor() { }

  ngOnInit() {
  }

}
