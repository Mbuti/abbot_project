import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService} from '../services/AuthService';
import { UserService} from '../services/User.Service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user: any = {};
    loading = false;
    error = '';
    redirectUrl: string;

    private env: string[] = [
        'Dev',
        'Uat',
        'Prod'
    ];


    constructor(private router: Router,  private activatedRoute: ActivatedRoute,
        private authenticationService: AuthService,
        private userService: UserService) {
            this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
        }

    ngOnInit(): void {
        this.userService.logout();
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}