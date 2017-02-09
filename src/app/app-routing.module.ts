import { RouterModule, Routes }  from '@angular/router';
import { NgModule }              from '@angular/core';

import { HomeComponent }         from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'mockup-components', loadChildren: 'app/_mockup-component-repo/mockup.module#MockupModule' }, // For Asynchronous loading
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
