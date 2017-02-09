import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MockupComponent }      from './mockup.component';
import { MockupPalette }        from './palette/palette.component';
import { MockupDialog }         from './dialog/dialog.component';


const mockupRoutes: Routes = [
	{ 
		path      : '',
		component : MockupComponent,
		children  : [
			{
				path       : '',
				redirectTo : 'palette',
				pathMatch  : 'full'
			},
			{
				path      : 'palette',
				component : MockupPalette
			},
			{
				path      : 'dialog',
				component : MockupDialog
			}
		] 
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(mockupRoutes)
	],
	declarations: [

	],
	exports: [
		RouterModule
	]
})
export class MockupRoutingModule { }
