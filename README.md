# Notes App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.
This Angular application allows you to manage notes effectively. You can create, edit, and delete notes with ease. The app includes the following features:

### Note Entry

- **Title**: Enter a title for your note (minimum 5 characters).
- **Content**: Input the main content of your note (minimum 7 characters).

### Functionality

- **Save Button**: Store the note after entering the title and content.
- **Display of Saved Notes**: View all saved notes sequentially below the form.
  - Each note is displayed uniquely.
- **Selecting a Note**: Click on a note to select it.
  - Selected note displays additional buttons for editing and deleting.

### Note Actions

- **Edit Button**: Edit the content of the selected note within the form.
- **Save Edit Button**: Update the content of an existing note.
- **Delete Button**: Remove the selected note from the list.

### Validation

- **Title and Content Validation**:
  - The title must contain at least 5 characters.
  - The content must contain at least 7 characters.
  
If there is an error in the input fields (e.g., insufficient characters), the form will display a red border around the fields and provide a message to inform the user about the issue.

### Additional Features

- **Error Messaging**: Clear error messages guide users on correct input.
- **User-Friendly Interface**: Intuitive design for easy note management.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.