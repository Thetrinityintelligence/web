import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { STATUS_CODE } from 'src/app/utill/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  serviceLists:any[]=[];
  constructor(private httpServices: HttpService) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.getAllServices();
  }
  getAllServices() {
    this.httpServices.getAllServices().subscribe((res: any) => {
      console.log('res::', res);
      if (res.statusCode==STATUS_CODE.SUCCESS){
        this.serviceLists=res.data
      }
      
    });
  }
}
