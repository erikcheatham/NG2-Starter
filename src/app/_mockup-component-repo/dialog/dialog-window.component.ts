import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
	selector    : 'mockup-dialog-window',
	templateUrl : './dialog-window.component.html',
	styleUrls   : [ './dialog-window.component.scss' ]
})

export class MockupDialogWindow {
	constructor(public dialogRef: MdDialogRef<MockupDialogWindow>) {}
}
