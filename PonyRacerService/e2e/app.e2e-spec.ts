import { PonyRacerCliPage } from './app.po';

describe('pony-racer-cli App', function() {
  let page: PonyRacerCliPage;

  beforeEach(() => {
    page = new PonyRacerCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('PonyRacer');
  });
});
