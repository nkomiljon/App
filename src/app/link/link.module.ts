import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LinkComponent} from "./link.component";
import {LinkRoutingModule} from "./link-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule
  ],
  declarations: [
    LinkComponent
  ]
})

export class LinkModule {

}
