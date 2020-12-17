import { assert, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { BlogCard } from '../src/blog/blog-card';
import { Post } from '../src/blog/post';

const post: Post = {
  id: 0,
  title: 'Web Components Introduction',
  author: 'Luis Aviles',
  description: 'A brief description of the article...',
};

describe('Blog Card Component', () => {
  let element: BlogCard;

  beforeEach(async () => {
    element = await fixture<BlogCard>(
      html`<blog-card .post="${post}"></blog-card> `
    );
  });

  it('is defined', () => {
    assert.instanceOf(element, BlogCard);
  });

  it('defines a post attribute', () => {
    expect(element.post).to.equal(post);
  });

  it("renders 'Web Components Introduction' as a title", () => {
    const h1 = element.shadowRoot?.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Web Components Introduction');
  });

  it("renders 'Luis Aviles' as author", () => {
    const h2 = element.shadowRoot?.querySelector('h2')!;
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('Luis Aviles');
  });

  it("renders a 'Read More' link", () => {
    const a = element.shadowRoot?.querySelector('a')!;
    expect(a).to.exist;
    expect(a.getAttribute('class')).to.equal('blog-link');
    expect(a.textContent).to.equal('Read More');
  });

  it('dispatch a click event', async () => {
    setTimeout(() => element.handleClick());
    const { detail } = (await oneEvent(element, 'readMore')) as CustomEvent<
      Post
    >;
    expect(detail).to.be.equal(post);
  });
});
