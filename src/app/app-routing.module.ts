import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
 { path:"",component:HomeComponent},
 
 {path:"contact",component:ContactComponent},
 {path:"aboutus",component:AboutComponent},
 {path:"menu",component:MenuComponent},
 {path:"gallery",component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
