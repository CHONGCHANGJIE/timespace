import { SchedulerPage } from './app.po';

describe('scheduler App', () => {
  let page: SchedulerPage;

  beforeEach(() => {
    page = new SchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
