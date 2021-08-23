export default class Router {
  constructor(routes) {
    this.routes = routes;
  }

  init(el) {
    this.renderHTML(el, this.routes['/']);
    window.onpopstate = e =>
      this.renderHTML(el, routes[window.location.pathname]);
  }

  push(el, pathName) {
    window.onpopstate = e => {
      return this.renderHTML(el, routes[window.location.pathname]);
    };
    window.history.pushState({}, pathName, window.location.origin + pathName);
    console.log(this.routes);
    this.renderHTML(el, this.routes[pathName]);
  }

  renderHTML(el, route) {
    new route(el);
  }
}
