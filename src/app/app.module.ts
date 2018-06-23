import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ModalModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [BsModalService]
})
export class AppModule {}
