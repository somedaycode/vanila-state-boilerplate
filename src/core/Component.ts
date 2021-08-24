export default class Component<T = void, S = unknown> {
  public $target: HTMLElement;
  public props: T;
  public state?: S;
  public keys: string[];

  constructor($target: HTMLElement, props: T) {
    this.$target = $target;
    this.props = props;
    this.keys = [];
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

  mountChildComponent() {}

  subscribe() {
    // observer.ts 사용시 추가
    // this.keys.forEach(key => subscribe(key, this.render.bind(this)));
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mountChildComponent();
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
