import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Postre} from '../shared/postre';
import { PostreService } from '../shared/postre.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss']
})
export class VerMasComponent implements OnInit {
  public postres:Postre[];
  
  constructor(private postreService: PostreService) { }

  ngOnInit()  {
    this.getPostres();
  }
  public getPostres():void{
    this.postreService.getPostres().subscribe(
      (response:Postre[])=>{
        this.postres=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
      
    );
  }

}
