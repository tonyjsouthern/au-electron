export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Domain Tool';
    config.map([
      { route: '/',         name: 'index', moduleId: 'index',   title: 'Index' },
      { route: '/about', name: 'about', moduleId: 'about',      title: 'about' }
  ]);
  }
}
