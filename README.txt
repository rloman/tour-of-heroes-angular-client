routing:  https://angular.io/tutorial/toh-pt5#routing
refactor routing to a separate module: done
add styling: https://angular.io/tutorial/toh-pt5#style-the-app


file should now (after styling) look like this: https://angular.io/generated/live-examples/toh-pt5/eplnkr.html


to add the "angular-in-memory-web-api" I (Raymond) had to supply the following command:
$ npm install angular-in-memory-web-api --save

Be aware (written by me)
==> You have to be aware of the order of the imports in the app.module file.        And you have to change in
    the hero.service.ts file that there is no .data() after heroes.response.data().
    Please correct this sentences later. (since we have to leave now ...)

    Shortented: it now works :-)




Add the ability to search by name using this url:
https://angular.io/tutorial/toh-pt6#observables


Use a real http service
Just change the url in the hero.service
Remove the following line from app.module
        InMemoryWebApiModule.forRoot(InMemoryDataService),