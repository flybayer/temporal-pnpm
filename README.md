# Temporal PNPM

This is the JavaScript version of our Hello World sample.

The [Hello World Tutorial](https://docs.temporal.io/docs/typescript/hello-world/) walks through the TypeScript version of this sample.

### Running this sample

1. Make sure Temporal Server is running locally (see the [quick install guide](https://docs.temporal.io/docs/server/quick-install/)).
1. `pnpm install` **([install pnpm](https://pnpm.io/installation) if needed)**
1. `pnpm run start.watch` to start the Worker.
1. In another shell, `pnpm run workflow` to run the Workflow.

The Workflow should return:

```
Hello, Temporal!
```

But currently it does this:

```
/t/temporal-pnpm> pnpm run start.watch

> hello-world-js@0.1.0 start.watch /private/tmp/temporal-pnpm
> nodemon src/worker.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/worker.js`
2021-11-28T18:37:20.700Z [INFO] [temporal_sdk_core] Registering worker task_queue="hello-javascript"
2021-11-28T18:37:20.878Z [ERROR] asset main.js 8.4 KiB [emitted] (name: main)
2021-11-28T18:37:20.878Z [ERROR] runtime modules 670 bytes 3 modules
2021-11-28T18:37:20.878Z [ERROR] cacheable modules 837 bytes
2021-11-28T18:37:20.878Z [ERROR]   ../../../src/main.js 588 bytes [built] [code generated]
2021-11-28T18:37:20.878Z [ERROR]   ./src/workflows.js 249 bytes [built] [code generated]
2021-11-28T18:37:20.878Z [ERROR]
2021-11-28T18:37:20.878Z [ERROR] ERROR in ./src/workflows.js 1:0-55
2021-11-28T18:37:20.878Z [ERROR] Module not found: Error: Can't resolve '@temporalio/workflow' in '/private/tmp/temporal-pnpm/src'
2021-11-28T18:37:20.878Z [ERROR] resolve '@temporalio/workflow' in '/private/tmp/temporal-pnpm/src'
2021-11-28T18:37:20.878Z [ERROR]   Parsed request is a module
2021-11-28T18:37:20.878Z [ERROR]   using description file: /private/tmp/temporal-pnpm/package.json (relative path: ./src)
2021-11-28T18:37:20.878Z [ERROR]     Field 'browser' doesn't contain a valid alias configuration
2021-11-28T18:37:20.878Z [ERROR]     resolve as module
2021-11-28T18:37:20.878Z [ERROR]       looking for modules in /private/tmp/temporal-pnpm/node_modules
2021-11-28T18:37:20.878Z [ERROR]         single file module
2021-11-28T18:37:20.878Z [ERROR]           using description file: /private/tmp/temporal-pnpm/package.json (relative path: ./node_modules/@temporalio/workflow)
2021-11-28T18:37:20.878Z [ERROR]             no extension
2021-11-28T18:37:20.878Z [ERROR]               Field 'browser' doesn't contain a valid alias configuration
2021-11-28T18:37:20.878Z [ERROR]               /private/tmp/temporal-pnpm/node_modules/@temporalio/workflow doesn't exist
2021-11-28T18:37:20.878Z [ERROR]             .ts
2021-11-28T18:37:20.878Z [ERROR]               Field 'browser' doesn't contain a valid alias configuration
2021-11-28T18:37:20.878Z [ERROR]               /private/tmp/temporal-pnpm/node_modules/@temporalio/workflow.ts doesn't exist
2021-11-28T18:37:20.878Z [ERROR]             .js
2021-11-28T18:37:20.878Z [ERROR]               Field 'browser' doesn't contain a valid alias configuration
2021-11-28T18:37:20.878Z [ERROR]               /private/tmp/temporal-pnpm/node_modules/@temporalio/workflow.js doesn't exist
2021-11-28T18:37:20.878Z [ERROR]         /private/tmp/temporal-pnpm/node_modules/@temporalio/workflow doesn't exist
2021-11-28T18:37:20.878Z [ERROR]  @ ../../../src/main.js
2021-11-28T18:37:20.878Z [ERROR]
2021-11-28T18:37:20.878Z [ERROR] ERROR in ../../../src/main.js 1:0-68
2021-11-28T18:37:20.878Z [ERROR] Module not found: Error: Can't resolve '@temporalio/workflow/lib/worker-interface.js' in '/src'
2021-11-28T18:37:20.878Z [ERROR] resolve '@temporalio/workflow/lib/worker-interface.js' in '/src'
2021-11-28T18:37:20.878Z [ERROR]   Parsed request is a module
2021-11-28T18:37:20.878Z [ERROR]   No description file found in /src or above
2021-11-28T18:37:20.878Z [ERROR]   resolve as module
2021-11-28T18:37:20.878Z [ERROR]     looking for modules in /private/tmp/temporal-pnpm/node_modules
2021-11-28T18:37:20.878Z [ERROR]       /private/tmp/temporal-pnpm/node_modules/@temporalio/workflow doesn't exist
2021-11-28T18:37:20.878Z [ERROR]
2021-11-28T18:37:20.878Z [ERROR] webpack 5.64.4 compiled with 2 errors in 61 ms
Error: Webpack finished with errors, if you're unsure what went wrong, visit our troubleshooting page at https://docs.temporal.io/docs/typescript/troubleshooting#webpack-errors
    at /private/tmp/temporal-pnpm/node_modules/.pnpm/@temporalio+worker@0.16.2/node_modules/@temporalio/worker/lib/workflow/bundler.js:172:36
    at finalCallback (/private/tmp/temporal-pnpm/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Compiler.js:436:32)
    at /private/tmp/temporal-pnpm/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Compiler.js:500:17
    at /private/tmp/temporal-pnpm/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/HookWebpackError.js:68:3
    at Hook.eval [as callAsync] (eval at create (/private/tmp/temporal-pnpm/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/private/tmp/temporal-pnpm/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/Hook.js:18:14)
    at Cache.storeBuildDependencies (/private/tmp/temporal-pnpm/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Cache.js:122:37)
    at /private/tmp/temporal-pnpm/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Compiler.js:496:19
    at Hook.eval [as callAsync] (eval at create (/private/tmp/temporal-pnpm/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/private/tmp/temporal-pnpm/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/Hook.js:18:14)
[nodemon] app crashed - waiting for file changes before starting...
```
