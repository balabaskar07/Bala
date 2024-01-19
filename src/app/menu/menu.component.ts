import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
arr:{a:string,b:string}[]=[
  {a:"Bread with Butter and Jam",b:"$5"},
{a:"House Baked Muffins",b:"$3"},
{a:"Cereal",b:"$7"},
{a:"Eggs and Sausage/Bacon",b:"$3"},
{a:"Porridge",b:"$5"},
{a:"Baked Beans",b:"$7"}

]
arr1:{a:string,b:string}[]=[
  {a:"Tuna Sandwich",b:"$10"},
{a:"House Baked Muffins",b:"$20"},
{a:"Cucumber Sandwich",b:"$17"},
{a:"Lemon Tart",b:"$13"},
{a:"Ham and Mustard",b:"$20"},
{a:"Assortments of Tea",b:"$27"}

]
}
