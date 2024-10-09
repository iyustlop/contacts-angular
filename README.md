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

In app.component.html we bind `(onNewContactEvent)=“onClickNewContact()”`.

## Lesson 6 - Display a Table
We have taken a ui material board. Inside the grid component we have put the HTML and ts.

Data is injected from the `list.component.ts` which is the parent of `grid.component.*` Data and columns are injected as tags

In grid.component.ts data and displayedColumns are signals and dataSource a table imported from Material ui. we join dataSource.data with a signal data. `ngOnInit` manage the data. 

>[!INFO]
>
> [OnInit](https://angular.dev/api/core/OnInit)

In grid.component.html we use a for loop to pass the name of the column in the header and the data in the cell.

## Lesson 7 - Sort, Paginator and filter
First, we add in `grid.component.html` the directives matSort in the table and mat-sort-header to display the arrows that allow us to sort the data by columns.

>[!INFO]
>
> [viewChild](https://angular.dev/api/core/viewChild)

We use viewChild signal to access the data and use MatSort to sort it. 

Everything is linked together in the ngOnInit

For paginator we follow the same pattern using MatPaginator

For Filter, a `<mat-form-field>`in included at the top of the page. this tag includes `<mat-label>`and one input.

`(keyup)` is used to trigger an event every time a key is pressed. The event is defined in a method. We take the value in a constant and we apply it to the data with filter.

## Lesson 8 - Encapsulate the filter

>[!INFO]
>
> [ngModel](https://angular.dev/api/forms/NgModel)

Filter HTML is moved to their own component. `ngModel` replace `keyup`. 

In `grid.component.html` the label and placeholder are defined. `valueToFilter` is a signal that is injected also.

To filter, `effect(()=>{},{allowSignalWrites: true})` is used in the constructor and link dataSoure.filter with valueToFilter

## Lesson 9 - Buttons 

Buttons are located at the end of the row under the action column. This column is not sortable and therefore we have to remove the `mat-sort-header` directive.  

Like the data and column names, sortable columns are defined in `list.component.ts` and placed in your HTML. 

## Leasson 10 - Consume ContactService

We inject Firestore as a private variable and then define the collection variable using the FireStore variable and the name of the collection in FireStore. 

`getAllContacts` is an Observable that returns the information taken from FireStore. This method is subscribed in `list.component.ts` and links the contacts with data using `tap()`.

```javascript
  getAllContacts(){
    this._contactSvc.getAllContacts()
    .pipe(
      takeUntilDestroyed(this._destroyRef),
      tap((contacts:Contact[]) => this.data = [...contacts])
    )
    .subscribe()
  }
```
`takeUntilDestroyed(this._destroyRef),` unsuscribe 

## lesson 11 - Modal 
In lesson 5, we implemented `onClickNewContact()`. Now, we implement inside this method the opening of the modal. For this we first define `modal.service.ts` and inside we define two methods `openModal` and `closeModal`.

In `modal.service.ts` we inject the `inject(MatDialog)` material dialog as `_dialog`. 

`closeModal()` closes the modal once we close the modal after pressing submit.

`openModal()` is in charge of opening the modal when we click and execute `onClickNewContact()`. `openModal()` needs three things in the signature. One of type `ComponentType<CT>` with generic type. The data and if you are editing `isEditing`. The first property is passed the `ModalComponent(modal.component.ts)` and casts the same. the second is the data type. We make that by default it is of type `Contact`. The third `isEditing` is false. All this we pass it to _dialog that we have created previously. `data` and `isEditing` we pass it inside `const config`.

When `modal.component.ts` is opened, `contactForm!: FormGroup` is created and during the creation of the class, a form with the fields is created. 

When the modal is filled in and the accept button is pressed, the `contact.service.ts` method `newContact(contact)` is called and displays the message that the contact has been added.

To delete a contact, we start by creating an event in `grid.component.html` that calls the `deleteContact(element.id)` method. Inside this method we will use the `confirm` native to which we pass a message. In case of acceptance. the `contact.service.ts` method `deleteContact(id)` is called.

To update a contact, follow the same flow. We create the event click that points to `openEditForm(element)` to which the contact is passed. In `grid.component.ts` we implement the method that opens the modal, in this case we pass `ModalComponent`, `data` and `true` because we are editing. As we have `data`, the `onSubmit()` method calls the `updateContact()` which updates the contact.

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
