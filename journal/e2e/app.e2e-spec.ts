import { JournalPage } from './app.po';

describe('journal App', function() {
  let page: JournalPage;

  beforeEach(() => {
    page = new JournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
