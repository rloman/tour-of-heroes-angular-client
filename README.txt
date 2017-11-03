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


Added a lot of security using URls
- https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part1/
- https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part2/
(and more inline urls)


v2.0.0
	Released v2.0.0 since this is a complete review of it, using real REST api using the springboot rest api project. And hence the update and delete are now failing
      Add (working) HomeComponent
      Add login component
      Amend login component to stefan his example on the url
      Add AuthenticationService. Modify the other component to have the AuthenticationService
      Add headers and USE THEM when sending GET request. Please continue with POST and DELETE
      When not logged in (hence error in authentication.service) please redirect to login
      copied the code from the site and it works. I forgot to add the provider (and that was a year ago the same :-))
      clean up the code again
      Wat krijg je een raar programma als je de heroService niet insluit als provider. Dan gaat het goed; eng dit
      Add Can Activate AuthGuard to prevent a REST API call being made, which is than invalid (401) and showing the login screen. This feature prevents being an invalid api call beint made

