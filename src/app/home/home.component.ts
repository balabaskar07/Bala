import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public c:CommonService){

}  
nav(a:string){
   this.c.navigateToHome(a)
}
}
