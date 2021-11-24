import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GenerComponent} from "./gener.component";

const  routes: Routes = [
  {
    path: '',
    component: GenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export  class GenerRoutingModule { }
