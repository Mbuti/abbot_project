import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

class Crede {
    Value: string;   
    constructor(  public alertNotificationTypes: number = 0,
                  public username: string = '', public systemUsername: string = '', public  useremail: string='',
                  public loginAttemps: number = 0,
                  public alertEventTypes: number = 0, public userRoleId: number = 0
          ) 
          {
              this.useremail = useremail;
              this.userRoleId = userRoleId;
              this.alertEventTypes = alertEventTypes;
              this.username = username;
              this.systemUsername = systemUsername;
              this.loginAttemps = loginAttemps;
              this.alertNotificationTypes = alertNotificationTypes;
          }
  }


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    goToLink(){
        console.log("Clickable");
    }
}