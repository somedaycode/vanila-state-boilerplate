export default class Component<S = void, T = void> {
  public $target: HTMLElement;
  public props: T;
  public state: S | null; // 추후 조정

  constructor($target: HTMLElement, props: T, state = null) {
    this.$target = $target;
    this.props = props;
    this.state = state;
    this.setup();
    this.render();
  }

  setup() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }

  setEvent() {}

  setState(newState: S) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
