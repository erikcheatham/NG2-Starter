import { FireCodeAnalysisPage } from './app.po';

xdescribe('fire-code-analysis App', function () {
	let page: FireCodeAnalysisPage;

	beforeEach(() => {
		page = new FireCodeAnalysisPage();
	});

	it('should display message saying Project Characteristics', () => {
		page.navigateTo();
		expect(page.getHeadingText()).toEqual('Project Characteristics');
	});
});
