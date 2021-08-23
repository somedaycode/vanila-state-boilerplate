import { router } from '@src/App';
import Component from '@src/core/Component';

export default class Home extends Component {
  template() {
    return `<h1>somedaycode's vanila-state-boilerplate</h1>
    <p>여기는 홈입니다.</p>
    <button class="second">두번째 페이지로 이동하기</ㅠ>`;
  }

  switchPage(e: MouseEvent) {
    const clickedTarget = e.target as HTMLParagraphElement;
    const page = clickedTarget.className;
    router.push(this.$target, `/${page}`);
  }

  setEvent() {
    this.addEvent('click', '.second', this.switchPage.bind(this));
  }
}
