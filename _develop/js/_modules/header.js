import $ from 'jquery';

export default class App {
  constructor() {
    this.$el = $('.sp-menu');
    this.$overlay = $('.overlay');
    this.init();
  }
  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', this.onClick.bind(this));
    this.$overlay.on('click', this.handleOverlay.bind(this));
  }

  onClick() {
    this.$el.toggleClass('is-close');
    this.$overlay.parent().toggleClass('is-close');
  }

  handleOverlay() {
    this.$el.toggleClass('is-close');
    this.$overlay.parent().toggleClass('is-close');
  }
}