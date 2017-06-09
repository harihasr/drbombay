import { DrbombayPage } from './app.po';

describe('drbombay App', () => {
  let page: DrbombayPage;

  beforeEach(() => {
    page = new DrbombayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
