import { DejiroturPage } from './app.po';

describe('dejirotur App', () => {
  let page: DejiroturPage;

  beforeEach(() => {
    page = new DejiroturPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
