import { UtalentAppPage } from './app.po';

describe('utalent-app App', function() {
  let page: UtalentAppPage;

  beforeEach(() => {
    page = new UtalentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
