import { PrelimPage } from './app.po';

describe('prelim App', () => {
  let page: PrelimPage;

  beforeEach(() => {
    page = new PrelimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
