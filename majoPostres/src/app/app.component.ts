import { Component, OnInit } from '@angular/core';
import { Postre } from './shared/postre';
import { PostreService } from './shared/postre.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  


  title = 'majoPostres';
}
