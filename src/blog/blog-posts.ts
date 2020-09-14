import { Router } from '@vaadin/router';
import { LitElement, html, customElement, property, css } from 'lit-element';
import { POSTS } from './data';
import { Post } from './post';

@customElement('lit-blog-posts')
export class BlogPosts extends LitElement {
  static styles = css`
    h2 {
      margin: 20px;
    }
  `;

  @property({ type: Array }) blogPosts?: Post[];

  constructor() {
    super();
  }

  render() {
    this.loadBlogCard();

    return html`
      <h2>Blog Posts</h2>
      ${this.blogPosts?.map(
        post => html`<blog-card .post="${post}"></blog-card>`
      )}
    `;
  }

  firstUpdated() {
    this.blogPosts = POSTS;
    this.addEventListener('readMore', event => {
      const post = (event as CustomEvent).detail as Post;
      Router.go(`/blog/posts/${post.id}`);
    });
  }

  async loadBlogCard() {
    await import('./blog-card');
  }
}
