import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-about')
export class About extends LitElement {
  render() {
    return html`
      <h2>About Me</h2>
      <p>
        Suspendisse mollis lobortis lacus, et venenatis nibh sagittis ac. Morbi
        interdum purus diam, vitae pharetra tellus auctor sagittis. Proin
        pellentesque diam a mauris euismod condimentum. Nullam eros ante,
        pretium eget euismod ut, molestie sed nunc. Nullam ut lorem tempus,
        convallis dui ac, congue dolor. Maecenas rutrum magna ac ullamcorper
        fermentum. Nunc porttitor sem at augue ornare, nec interdum ex laoreet.
        Ut vitae mattis urna. In elementum odio a diam iaculis, vel molestie
        diam gravida. Sed in urna nec nibh feugiat fermentum ac vitae dolor. Sed
        porta enim ut orci egestas, vitae gravida mauris scelerisque. Duis
        convallis tincidunt vehicula.
      </p>
    `;
  }
}
