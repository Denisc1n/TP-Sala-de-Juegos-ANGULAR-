import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { DataService } from "../../servicios/data.service";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.css"],
})
export class PrincipalComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getCurrentUserName();
  }

  getCurrentUserName() {
    let user = this.authService.getCurrentUser();
    this.dataService.getUserByUid(user).subscribe((res) => {
      this.user = res;
    });
  }
}
