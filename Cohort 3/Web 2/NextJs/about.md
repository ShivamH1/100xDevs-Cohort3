### NextJs Intro

=================

NextJS was a framework that was introduced because of some minor inconviniences in React

#### Note - In fact, React is not primarily a browser framework; it excels in efficiently managing and updating the UI by using a process called "reconciliation". Reconciliation is the process of determining what changes need to be made to the UI by comparing the previously rendered UI with the newly desired UI.React can be used to build mobile applications and web applications. For mobile applications we use "react-native" and for web applications we use "react-dom". And we need "react-router-dom" for doing routing in application components.

- In a React project, you have to maintain a separate Backend project for your API routes
- React does not provide out of the box routing (you have to use react-router-dom)
- React is not SEO Optimised
  - not exactly true today because of React Server components
  - we'll discuss soon why
- Waterfalling problem

#### SEO Optimisation

Google/Bing has a bunch of crawlers that hit websites and figure out what the website does.
It ranks it on Google based on the HTML it gets back
The crawlers DONT usually run your JS and render your page to see the final output.
While Googlebot can run JavaScript, dynamically generated content is harder for the scraper to index.

Try visiting a react website
What does the Googlebot get back when they visit a website written in react?
![page](image.png)
Googlebot has no idea on what the project is. It only sees Vite + React + TS in the original HTML response.
Ofcourse when the JS file loads eventually, things get rendered but the Googlebot doesn’t discover this content very well.

#### Waterfalling Problem

Let’s say you built a blogging website in react, what steps do you think the request cycle takes?
![req-response cycle in react](image-1.png)

1. Fetching the index.html from the CDN
2. Fetching script.js from CDN
3. Checking if user is logged in (if not, redirect them to /login page)
4. Fetching the actual blogs

The "waterfalling problem" in React, and more broadly in web development, refers to a scenario where data fetching operations are chained or dependent on each other in a way that leads to inefficient loading behavior.

What does nextjs provide you?
![req-response cycle in nextjs](image-2.png)

### Why nextjs?

Next.js offers several advantages over React:

- **Server-Side Rendering (SSR):** Improves SEO by rendering content on the server. React is CSR(Client Side Rendering) or CDN(Content Delivery Network) -> files server and Next.js provides SSR(Server Side Rendering).
- **Integrated API Routes:** Allows for a unified codebase combining frontend and backend.
- **File-Based Routing:** Eliminates the need for react-router-dom.
- **Optimized Bundling and Static Site Generation:** Enhances performance.
- **Backed by Vercel:** Ensures robust support and updates.

**Drawbacks:**

- **Requires Server:** Cannot be distributed via CDN, necessitating a server for SSR, which can be costly.
- **Highly Opinionated:** Makes it challenging to migrate away due to its specific conventions and structure.

#### Note - When we run `npm run build` in React, we build a bundle of file which is none other that the html, css and js files. In Next.js, this command builds a production-ready application with optimized server-side rendering, static site generation, and route pre-rendering.

#### Important - Next.js uses a file-based routing system. This means if you create a directory named `users` and within it a file named `page.tsx`, accessing the `/users` route will render the content of the `page.tsx` file.

### Routing in nextjs

Routing in React -
![routing in react](image-3.png)

##### Next.js has a file based router. This means that the way you create your files, describes what renders on a route

![routing in next.js](image-4.png)
![routing in nextjs](image-5.png)

### Server Side Rendering (SSR) - Solves SEO optimization and waterfalling problem 

1. Run npm run dev
2. Visit http://localhost:3000/signup
3. Notice the response you get back in your HTML file
   ![ssr](image-6.png)
   Now if GoogleBot tries to scrape your page, it’ll understand that this is a signup page without running any Javascript.
   The first index.html file it get’s back will have context about the page since it was server side rendered

### Layouts - Layouts let you wrap all child pages inside some logic.
![layout](image-7.png)

In Next.js, layouts are used to wrap multiple pages with a consistent design or functionality. A layout file is typically used to define elements that are common across multiple pages, such as a header, footer, or sidebar.

#### `layout.tsx` Usage

The `layout.tsx` file serves as a root component that can wrap around the content of each route. It ensures that all pages share a common structure or set of components. Here's an example of how `layout.tsx` can be structured:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
```

In this example, the `RootLayout` component wraps the `Navbar` component and a `main` element around the `children` prop, which represents the child pages. This structure ensures that the `Navbar` is present on every page rendered within this layout.

###### In React, we can achieve the same by using the `Outlet` component from `react-router-dom`. The `Outlet` component serves as a placeholder for the child routes that are rendered inside a parent route. When a child route is matched, the `Outlet` component is replaced with the rendered content of the child route. This allows us to share a common layout between multiple pages, similar to how Next.js uses layouts.
