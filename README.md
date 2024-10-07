# Introduction

After learning REACT, I want to start with ANGULAR. This project has to get me started and learn the basic lessons.

## Lesson 1 - Env Variables
The environment variables are not put in the .env file. they are generated with ng g environments. the concept is similar to a js property file. 
You have to put the src/environments folder inside .gitignore.

## Lesson 2 - Route
The routes are defined in the app.routes.ts file. Inside this file you can make redirects with redirectTo and loadChildren. 
loadChildren allows you to load a set of routes from another .routes.ts file.
Inside the children you define an object of type Routes and create the routes that load the components.
```javascript
const contactsRoute:Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
  }
];
```

## Lesson 3 - All implementation in one file
Run `ng g c folder/component -t -s` for create a template in one file.

## Lesson 4 - how to map components
`index.html` points to the `app-root` which is the main component of the app. `app-root` is the selector that is defined in app.component.ts. 
In `app.component.html` the components that are defined are mapped.  
For example `app-toolbar` is the component of the upper toolbar that is defined in `toolbar.component.ts`.  

## Lesson 5 - How to emit a click
In toolbar.component.ts the `emitClick()` click event is defined which triggers the onNewContactEvent event with the output of Angular 18. 

In app.component.ts the implementation of the onClickNewContact event is defined. 

In app.component.html we bind `(onNewContactEvent)=“onClickNewContact()”` to `(onNewContactEvent)=“onClickNewContact()”`.

## Lesson 6 - Display a Table
We have taken a ui material board. Inside the grid component we have put the HTML and ts.

Data is injected from the `list.component.ts` which is the parent of `grid.component.*` Data and columns are injected as tags

In grid.component.ts data and displayedColumns are signals and dataSource a table imported from Material ui. we join dataSource.data with a signal data. `ngOnInit` manage the data. 

>[!DOCUMENTATION]
>
> [OnInit](https://angular.dev/api/core/OnInit)

In grid.component.html we use a for loop to pass the name of the column in the header and the data in the cell.

## Lesson 7 - Sort, Paginator and filter
First, we add in `grid.component.html` the directives matSort in the table and mat-sort-header to display the arrows that allow us to sort the data by columns.

>[!DOCUMENTATION]
>
> [viewChild](https://angular.dev/api/core/viewChild?tab=api)

We use viewChild signal to access the data and use MatSort to sort it. 

Everything is linked together in the ngOnInit

For paginator we follow the same pattern using MatPaginator

For Filter, a `<mat-form-field>`in included at the top of the page. this tag includes `<mat-label>`and one input.

`(keyup)` sirve para que cada vez que pulse una tecla se produzca un evento. El evento se define en un método. Cogemos el valor en una constante y se la aplicamos a los datos con filter.

## Lesson 8 - 



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
