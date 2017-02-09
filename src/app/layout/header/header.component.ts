import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	showRoutes : boolean;
	userInfo   : any;

	constructor(private router: Router) {}
}
