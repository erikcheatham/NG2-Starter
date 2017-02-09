import { browser, element, by } from 'protractor';

export class FireCodeAnalysisPage {
	navigateTo() {
		return browser.get('/project-characteristics');
	}

	getHeadingText() {
		return element(by.css('h2')).getText();
	}
}
