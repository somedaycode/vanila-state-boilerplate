import Router from '@src/lib/Router';
import Component from '@src/core/Component';

import Home from './components/Home';
import SecondPage from './components/SecondPage';

const routerPath = {
  '/': Home,
  '/second': SecondPage
};
export const router = new Router(routerPath);
export default class App extends Component {
  setup() {}

  mounted() {
    router.init(this.$target);
  }
}
