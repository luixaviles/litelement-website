import { LitElement, html, customElement, css } from 'lit-element';

@customElement('lit-blog-posts')
export class BlogPosts extends LitElement {
  render() {
    return html`
      <h2>Blog Posts</h2>
      <ul>
        <li><a href="/blog/posts/1">LitElement Introduction</a></li>
        <li><a href="/blog/posts/1">Secrets of JavaScript</a></li>
        <li><a href="/blog/posts/1">Web Components and TypeScript</a></li>
      </ul>
    `;
  }
}
