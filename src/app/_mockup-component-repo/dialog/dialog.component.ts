import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { MockupDialogWindow } from './dialog-window.component';

@Component({
	selector    : 'mockup-dialog',
	templateUrl : './dialog.component.html'
})

export class MockupDialog {
	dialogRef: MdDialogRef<MockupDialogWindow>

	constructor(public dialog: MdDialog) {}
	
	openDialog() {
		this.dialogRef = this.dialog.open(MockupDialogWindow, {
			disableClose: false
		});

		this.dialogRef.afterClosed().subscribe(result => {
			console.log('User Clicked: ' + result);
			this.dialogRef = null;
		});
	}
}
