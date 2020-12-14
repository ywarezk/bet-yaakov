# SSR - @angular/universal

## Lesson Plan

- Platform
- Isomorphic / universal code
- Angular services for helping us write universal code
- The problems with SPA
- @angular/universal
- prerendering
- accelerating initialization requests

## SSR Summary

1. do I need SSR? 
2. write universal code: PLATFORM_ID, isPlatformBrowser
3. npx ng add @nguniversal/express-engine
4. npm run ssr:dev
5. Cache interceptor - to make init ajax calls in the server only
6. prerender - angular.json
7. ssr - deploy to a node server

## EX.

Create an angular website that has routing and navigation bar to the following pages:  

- `/` - HomePage
- `/about` - AboutPage
- Error404Page for all the other routes

Create a Navigation bar with links to the HomePage and AboutPage.  

- Add @angular/universal to your project according to the instructions here: https://angular.io/guide/universal

- Add prerendering for all the pages you created.
- Try and build your app and use `npx http-server` to open a local server in your dist folder to examine the result of your app with prerendering.

