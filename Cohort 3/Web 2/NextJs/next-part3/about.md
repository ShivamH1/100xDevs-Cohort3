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
