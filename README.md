# Temporal PNPM

This is the JavaScript version of our Hello World sample.

The [Hello World Tutorial](https://docs.temporal.io/docs/typescript/hello-world/) walks through the TypeScript version of this sample.

### Running this sample

1. Make sure Temporal Server is running locally (see the [quick install guide](https://docs.temporal.io/docs/server/quick-install/)).
1. `pnpm install` **([install pnpm](https://pnpm.io/installation) if needed)**
1. `pnpm run start` to start the Worker.
1. In another shell, `pnpm run workflow` to run the Workflow.

The Workflow should return:

```
Hello, Temporal!
```

But currently it does this:

```
/t/temporal-pnpm> pnpm run start

> hello-world-js@0.1.0 start
> node src/worker.js

2021-11-28T20:41:43.471Z [INFO] [temporal_sdk_core] Registering worker task_queue="hello-javascript"
2021-11-28T20:41:43.729Z [ERROR] asset main.js 225 KiB [emitted] (name: main)
2021-11-28T20:41:43.729Z [ERROR] runtime modules 1.77 KiB 4 modules
2021-11-28T20:41:43.729Z [ERROR] modules by path ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/*.js 75.9 KiB
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 9.57 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/internals.js 17.9 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/alea.js 2.9 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/errors.js 2.19 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/cancellation-scope.js 6.58 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/index.js 6.07 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/interfaces.js 772 bytes [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/workflow.js 28.4 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/interceptors.js 256 bytes [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]   ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/trigger.js 1.29 KiB [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR] ../../../src/main.js 578 bytes [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR] ./src/workflows.js 249 bytes [built] [code generated]
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/cancellation-scope.js 16:17-46
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/common' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 12:29-60
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/errors.js 4:17-46
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/common' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 14:17-36
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/index.js 65:15-44
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/common' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./src/workflows.js 1:0-55 3:18-33
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/interfaces.js 4:18-58
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/proto/lib/coresdk' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/internals.js 43:21-44
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 11:20-42
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/internals.js 38:31-46
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve 'long' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 11:20-42
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/internals.js 39:32-61
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve 'protobufjs/minimal' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 11:20-42
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/internals.js 40:17-46
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/common' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 11:20-42
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/internals.js 41:18-58
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/proto/lib/coresdk' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 11:20-42
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 9:17-46
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/common' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/worker-interface.js 10:18-58
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/proto/lib/coresdk' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js 1:0-68 4:0-19 5:0-18 26:4-7
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] ERROR in ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/workflow.js 4:17-46
2021-11-28T20:41:43.729Z [ERROR] Module not found: Error: Can't resolve '@temporalio/common' in '/private/tmp/tp2/node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib'
2021-11-28T20:41:43.729Z [ERROR]  @ ./node_modules/.pnpm/@temporalio+workflow@0.16.0/node_modules/@temporalio/workflow/lib/index.js 84:13-34
2021-11-28T20:41:43.729Z [ERROR]  @ ./src/workflows.js 1:0-55 3:18-33
2021-11-28T20:41:43.729Z [ERROR]  @ ../../../src/main.js
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] 11 errors have detailed information that is not shown.
2021-11-28T20:41:43.729Z [ERROR] Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
2021-11-28T20:41:43.729Z [ERROR]
2021-11-28T20:41:43.729Z [ERROR] webpack 5.64.4 compiled with 11 errors in 132 ms
Error: Webpack finished with errors, if you're unsure what went wrong, visit our troubleshooting page at https://docs.temporal.io/docs/typescript/troubleshooting#webpack-errors
    at /private/tmp/tp2/node_modules/.pnpm/@temporalio+worker@0.16.2/node_modules/@temporalio/worker/lib/workflow/bundler.js:172:36
    at finalCallback (/private/tmp/tp2/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Compiler.js:436:32)
    at /private/tmp/tp2/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Compiler.js:500:17
    at /private/tmp/tp2/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/HookWebpackError.js:68:3
    at Hook.eval [as callAsync] (eval at create (/private/tmp/tp2/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/private/tmp/tp2/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/Hook.js:18:14)
    at Cache.storeBuildDependencies (/private/tmp/tp2/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Cache.js:122:37)
    at /private/tmp/tp2/node_modules/.pnpm/webpack@5.64.4/node_modules/webpack/lib/Compiler.js:496:19
    at Hook.eval [as callAsync] (eval at create (/private/tmp/tp2/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/private/tmp/tp2/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/Hook.js:18:14)
```
