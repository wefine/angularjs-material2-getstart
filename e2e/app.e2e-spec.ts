import { AngularjsMaterial2GetstartPage } from "./app.po";

describe('angularjs-material2-getstart App', () => {
  let page: AngularjsMaterial2GetstartPage;

  beforeEach(() => {
    page = new AngularjsMaterial2GetstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
