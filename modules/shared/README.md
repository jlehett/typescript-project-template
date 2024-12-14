# Using Shared Packages in a Monorepo

## Local Development

Link shared packages locally for development:

1. Run `npm link` in the shared package's directory.
2. Run `npm link {package-name}` in the consuming package's directory.
3. Import the shared package in the consuming package as you would normally.

For example, to link the `shared` package to the `frontend` package:

```sh
cd modules/shared
npm link
cd modules/frontend
npm link shared
```

```js
// modules/frontend/src/index.ts
import { sharedFunction } from 'shared';
```

This will allow you to make changes to the shared package and see them reflected in the consuming package without having to publish the shared package to npm.

## Preparing for Deployment

There are a few options for how to handle shared packages in a monorepo when deploying to a remote environment:

1. **Publish to npm**: Publish the shared package to npm and install it as a dependency in the consuming package.
2. **Copy Files**: Copy the shared package files into the consuming package's build directory.

The best option will depend on the specific requirements of your project.