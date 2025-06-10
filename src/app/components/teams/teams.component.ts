import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CONSTANT, STATUS_CODE } from 'src/app/utill/common';
import * as _ from 'lodash'
@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
    teamsList: any[] = [];
    constant=CONSTANT;
    constructor(private httpServices: HttpService) {
        window.scrollTo(0, 0);
    }
    ngOnInit(): void {
        this.getAllTeams();
    }
    getAllTeams() {
        this.httpServices.getAllTeams().subscribe((res: any) => {
            if (res.statusCode == STATUS_CODE.SUCCESS) {
                this.teamsList = res.data;
                this.teamsList = _.sortBy(this.teamsList, 'order');
            } else {
                this.teamsList = [];
            }
        });
    }
}
