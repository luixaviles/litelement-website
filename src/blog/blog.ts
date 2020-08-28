import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-blog')
export class Blog extends LitElement {
  render() {
    return html` <slot></slot> `;
  }
}
