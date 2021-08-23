import './index.scss';

import App from '@src/App';

function init() {
  const root = document.querySelector('#root') as HTMLElement;
  new App(root);
}

init();
