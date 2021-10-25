# [Echelon Angular](https://github.com/SmithBWare89/primeng2)

## Description
This is a demonstration of Angular along with use of the PrimeNG library for styling.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [UI/UX Library](#UI/UX)
* [Languages](#languages)
* [Contributing](#contributing)
* [Collaborator](#collaborators)
* [Tests](#test)

## Installation
Clone the repository to your local machine. Navigate to the folder with your terminal and run `npm install` from the root directory of the folder. Once all packages are installed run `ng serve` from your terminal to spin up an instance of the project typically on `localhost: 4200`

## Usage
### Lazy Loading
The Dashboard module lazy loads the Cards module whenever the `/` route is visited allowing for the subscription to only occur whenever the cards need to be displayed. This would be useful if other routes are added in the future.

### API Call/Service
The `Echelon API Service` file acts as state management and provides the capacity to retrieve data from the API endpoint using one fetch. When the App Component is initialized it retrieves the data using the `retrieveData()` method of the service, uses the `pluck` pipe to only retrieve the `items` array that the applicaiton will use, and sets it as a `new Subject` using `updateEchelonData()` method which will the data to be multicasted to different observers. Whenever the data is retrieved by the `Card Component` the initial data retrieved from the API is able to be subscribed to without making another API call to fetch data. This data is unsubscribed to whenever the user navigates to another page.

### Sort/filter
Users are able to sort/filter the information on the webpage using the `select boxes` just below the navigation menu. Users are able to select between a category of workout, their level of fitness, or their trainer of choice. Using the Echelon API Service the applicaiton is able to call the `updatedFilteredSelection()` method using the value from the dropdown, which calls the `next()` method, and feeds the selection through the processing pipeline for filtering in the Card Components ts file.


## UI/UX
PrimeNG

## Languages
![HTML-5 Badge](https://img.shields.io/badge/Language-HTML--5-blue)
![CSS Badge](https://img.shields.io/badge/Language-CSS-blue)
![Javascript Badge](https://img.shields.io/badge/Language-Javascript-blue)
![Node Badge](https://img.shields.io/badge/Language-Node-blue)
![Angular Badge](https://img.shields.io/badge/Framework-Angular-green)

## Collaborators
There were no other contributors to this project.

## Test
  N/A

## Questions
All questions can be directed to [my email](smithwrestling89@tgmail.com) or [github](https://www.github.com/SmithBWare89).