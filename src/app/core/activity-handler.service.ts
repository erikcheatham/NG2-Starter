import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
//Service responsible for:
//Listening for and indicating UI activity on the page.
export class ActivityHandlerService {

	constructor() { }

	// Observable string sources
	private isLoadingSource = new Subject<boolean>();


	private errorAnnouncedSource = new Subject<string>();
	private errorConfirmedSource = new Subject<string>();

	// Observable boolean streams
	isLoading$ = this.isLoadingSource.asObservable();


	// Observable string streams
	errorAnnounced$ = this.errorAnnouncedSource.asObservable();
	errorConfirmed$ = this.errorConfirmedSource.asObservable();

	// Service message commands
	announceLoading() {
		this.isLoadingSource.next(true);
	}
	endLoading() {
		setTimeout(() => { this.isLoadingSource.next(false); }, 500);
		// this.isLoadingSource.next(false);
	}

	announceError(error: string) {
		this.errorAnnouncedSource.next(error);
	}
	confirmError() {
		this.errorConfirmedSource.next();
	}

}
