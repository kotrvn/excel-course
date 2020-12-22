import {Router} from "./Router";
import {Page} from "../Page";

class DashbordPage extends Page {
  getRoot() {
    const root = document.createElement('div')
    root.innerHTML = 'dashboard'
    return root
  }
}
class ExcelPage extends Page {}

describe('Router:', () => {
  let router;
  let $root;

  beforeEach(() => {
    $root = document.createElement('div')
    router = new Router($root, {
      dashboard: DashbordPage,
      excel: ExcelPage,
    })
  })

  test('should be define', () => {
    expect(router).toBeDefined()
  })

  test('should be render dashboard page', () => {
    router.changePageHandler()
    expect($root.innerHTML).toBe(`<div>dashboard</div>`)
  })
})