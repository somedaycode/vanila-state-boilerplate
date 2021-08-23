export default class Component<T = void, S = unknown> {
  public $target: HTMLElement;
  public props: T;
  public state: S | null; // 추후 조정

  constructor($target: HTMLElement, props: T, state = null) {
    this.$target = $target;
    this.props = props;
    this.state = state;
    this.init();
  }

  init() {
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  template() {
    return '';
  }

  mounted() {}

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  setState(newState: S) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent<K extends keyof HTMLElementEventMap>(
    eventType: K,
    selector: string,
    callback: (event: HTMLElementEventMap[K]) => void
  ) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target as HTMLElement)) return false;
      callback(event);
    });
  }
}
