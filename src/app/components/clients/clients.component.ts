import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { STATUS_CODE,CONSTANT } from 'src/app/utill/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientsList: any[] = [];
  constant=CONSTANT;
  constructor(private httpServices: HttpService) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.getAllClients();
  }
  getAllClients() {
    this.httpServices.getAllClients().subscribe((res: any) => {
      if (res.statusCode == STATUS_CODE.SUCCESS) {
        this.clientsList = res.data;
      }
    });
  }
}
