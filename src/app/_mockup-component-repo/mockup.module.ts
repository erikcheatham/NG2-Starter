import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockupRoutingModule } from './mockup-routing.module';

//Components
import { MockupPalette } from './palette/palette.component';
import { MockupDialog } from './dialog/dialog.component';
import { MockupComponent } from './mockup.component';
import { MockupDialogWindow } from './dialog/dialog-window.component';

@NgModule({
	declarations: [
		MockupComponent,
		MockupPalette,
		MockupDialog,
		MockupDialogWindow
	],
	imports: [
		CommonModule,
		MockupRoutingModule,
		FormsModule,
		MaterialModule.forRoot(),
		FlexLayoutModule.forRoot()
	],
	entryComponents: [
		MockupDialogWindow
	]
})

export class MockupModule { }
