import { ModuleWithProviders, NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ActivityHandlerService } from './activity-handler.service';
import { environment }            from '../../environments/environment';

//Runs when app is bootstrapping and resolving providers
//If you need to asynchronously initialize a service before consuming it, place init logic in init_app
export function init_app() {
	return true;
}

@NgModule({
	imports: [CommonModule],
	declarations: [],
	exports: [],
	providers: [ActivityHandlerService]
})
export class CoreModule {

	// Register your shared services ie... database,error-handling services

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			// Here we configure angular to asynchronously initialize our provider using our factory(init_app)
			// providers: [
			// 	DataContextService,
			// 	AuthService,
			// 	{
			// 		provide: APP_INITIALIZER, // Allows for providers to resolve according to init_app factory(async)
			// 		useFactory: init_app,
			// 		deps: [DataContextService, AuthService],
			// 		multi: true
			// 	},
			// 	RepositoryService
			// ]
		};
	}

	//Will throw an error if the Core Module is imported more than once
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}
}
