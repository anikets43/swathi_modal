import { Component, TemplateRef } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { setTheme } from "ngx-bootstrap/utils";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Modal Example";
  modalRef: BsModalRef;
  name = "Default Value";
  constructor(private modalService: BsModalService, private http: HttpClient) {
    setTheme("bs3"); // or 'bs4'
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onClose() {
    this.modalRef.hide();
    this.modalRef = null;
    // Call your API Here

    this.http.get("assets/config.json").subscribe(
      data => {
        alert("API succcess");
      },
      err => {
        alert("API Failure");
      }
    );
  }
}
