import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GenerComponent} from "./gener.component";
import {GenerRoutingModule} from "./gener-routing.module";

@NgModule({
  imports: [
    CommonModule,
    GenerRoutingModule
  ],
  declarations: [
    GenerComponent
  ]
})

export class GenerModule {

}
