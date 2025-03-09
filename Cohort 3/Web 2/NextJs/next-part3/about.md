### Next-Part-3

### Route groups () -

- Parentheses allow you to create **grouped** routes that **do not** affect the URL path.
- For example, if you have a folder named `(marketing)` or `(auth)`, Next.js will not include `(marketing)` or `(auth)` in the URL—it’s just an organizational tool to group certain routes or apply layouts without changing the URL structure.

#### Note - You cant keep all the routes at the same level. If you do, the layout will be applied to the user page as well. Hence the route groups

### Dynamic routes [] -

A folder or file in the form `[slug]` defines a **dynamic** parameter in the route (e.g., `/blog/[slug]` might match `/blog/hello-world` or `/blog/another-post`).

Inside your components, you can access this parameter via `params.slug`.

### Catch-All Segments [...] -

A folder or file in the form /docs/[...slug] will match all segments in that position (e.g., /docs/anything/here will be matched by [...slug]).

Inside your components, you can access this parameter via `params.slug`.

```tsx
export default function ({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  return <div>{JSON.stringify(params.slug)}</div>;
}
```

### Catch all [[…slug]] -

You can also use double brackets like [[...slug]] to make the catch-all optional (so it can match /docs as well as /docs/anything/here).

### CSR, SSR and Static Site Rendering -

#### What is Rendering?

Rendering in web development refers to the process of generating a visual representation of a webpage or application from code. This involves converting HTML, CSS, and JavaScript into a viewable page on a user's web browser. There are different types of rendering techniques:

- **Client-Side Rendering (CSR)**: The browser is responsible for rendering the content. The initial load may be slower, but subsequent interactions can be faster since only parts of the page may need updating.

- **Server-Side Rendering (SSR)**: The server generates the complete HTML for a page and sends it to the client. This can improve SEO and the initial loading time, but may lead to slower interactions since each interaction can require a new page load from the server.

- **Static Site Generation (SSG)**: The pages are pre-rendered as static HTML files during the build process. These files can be served quickly by a web server or CDN, leading to fast load times and improved performance for static content.

In modern web applications, rendering can be a combination of these techniques to optimize for both performance and user experience.

- **Client-Side Rendering (CSR)**: The browser renders the page. React will download the necessary JavaScript and render the page on the client side.
- **Server-Side Rendering (SSR)**: The server renders the page. The server will generate the HTML and send it to the client.
- **Static Site Rendering (SSG)**: The pages are pre-built by the server at build time. Next.js will generate static HTML files that can be served directly by a web server or a CDN.

### Example of Rendering Techniques in Next.js

To illustrate the different rendering techniques in Next.js, let's consider a simple example of a page that displays a list of users fetched from an API.

#### Client-Side Rendering (CSR)
In CSR, the data fetching occurs on the client side after the page is loaded.

```tsx
import { useEffect, useState } from 'react';

function ClientSidePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users List (CSR)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientSidePage;
```

#### Server-Side Rendering (SSR)
In SSR, the data fetching occurs on the server for each request.

```tsx
import { GetServerSideProps } from 'next';

function ServerSidePage({ users }) {
  return (
    <div>
      <h1>Users List (SSR)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

export default ServerSidePage;
```

#### Static Site Generation (SSG)
In SSG, the data fetching occurs at build time.

```tsx
import { GetStaticProps } from 'next';

function StaticPage({ users }) {
  return (
    <div>
      <h1>Users List (SSG)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

export default StaticPage;
```

In these examples, each component demonstrates a different rendering technique, highlighting how data fetching and page rendering differ between CSR, SSR, and SSG in Next.js.


### What is Hydration in Next.js?
Hydration is the process of taking the pre-rendered HTML generated by Next.js and "hydrating" it with event listeners and JavaScript functionality. This is typically done on the client-side, but Next.js also provides server-side hydration for pages that are rendered on the server.
Hydration is the process by which a client-side JavaScript framework (such as React) takes over an already rendered HTML page and makes it interactive. In a Next.js application, pages are often server-rendered (SSR) or statically generated (SSG). The server sends a fully formed HTML document to the browser, allowing users to see meaningful content quickly (which is great for SEO and performance). Once the page arrives in the browser, React’s JavaScript bundle “hydrates” that static HTML by attaching event listeners and other interactive behaviors so that the page becomes a fully functional React application. 
