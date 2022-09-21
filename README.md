# Site 3.0

This is a repo tracking (another) rebuild process for my personal website. Originally built using vanilla HTML, CSS and JavaScript in [this mySiteVanilla repository](https://github.com/madisonlowe/mySiteVanilla), I later rebuilt the site in React in [this mySiteReact repository](https://github.com/madisonlowe/mySiteReact), to get some practice in with an unfamiliar technology. For the sake of better routing and speed, I since rebuilt the site again in Next.js, which is the current version!

It's a really fun and useful learning exercise to try and accomplish similar goals in different technologies. For the next rebuild, I'm thinking about trying out some UI libraries, so that I can get a little bit more practice in with those, but we'll find out what happens when we get there!

## Next.js README

### Dynamic Routing example

This example shows how to do [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) in Next.js. It contains two dynamic routes:

1. `pages/post/[id]/index.js`
   - e.g. matches `/post/my-example` (`/post/:id`)
1. `pages/post/[id]/[comment].js`
   - e.g. matches `/post/my-example/a-comment` (`/post/:id/:comment`)

These routes are automatically matched by the server.
You can use `next/link` as displayed in this example to route to these pages client side.

### Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/dynamic-routing)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing&project-name=dynamic-routing&repository-name=dynamic-routing)

### How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example dynamic-routing dynamic-routing-app
```

```bash
yarn create next-app --example dynamic-routing dynamic-routing-app
```

```bash
pnpm create next-app --example dynamic-routing dynamic-routing-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
