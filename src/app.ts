import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { PLATFORM } from "aurelia-framework";

@autoinject
export class App {

  public router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';

    config.map([
      { route: ['', 'portfolio'], name: 'portfolio', moduleId: PLATFORM.moduleName('./portfolio/portfolio', 'portfolio'), nav: true, title: 'Portfolio' },
      { route: 'commondata', name: 'commondata', moduleId: PLATFORM.moduleName('./commondata/commondata', 'commondata'), nav: true, title: 'Commondata' },
      { route: 'risk', name: 'risk', moduleId: PLATFORM.moduleName('./risk/risk', 'risk'), nav: true, title: 'Risk' },
      { route: 'reporting', name: 'reporting', moduleId: PLATFORM.moduleName('./reporting/reporting', 'reporting'), nav: true, title: 'Reporting' },
      { route: 'tresury', name: 'treasury', moduleId: PLATFORM.moduleName('./treasury/treasury', 'treasury'), nav: true, title: 'Treasury' }
    ]);

    this.router = router;
  }
}
