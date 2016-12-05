import { NgrxPlayPage } from './app.po';

describe('ngrx-play App', function() {
  let page: NgrxPlayPage;

  beforeEach(() => {
    page = new NgrxPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
