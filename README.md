# MyReads Project

This is the final assesment of React Fundemantals section of the Udacity React Nanodegree Program. This Bookshelf
App allows the user to find books and place them on one of 3 book shelves. Built in react this project
was about building an application using a given api and using react and react router to show the data.
The idea was to build an app and be able to pass data between the components.


## Get It Running
To run this project please have yarn or npm installed on your machine and run:

* `npm install`
* `npm start`
or
* `yarn install`
* `yarn start`

## How It Works

In the shelves are the book you have in your data base. They should be in the correct shelf. Clicking
on the green arrow on one of the books will have a drop down menu with the shelf names and 'None'. Clicking on
one of the shelf names will move that book to its new location instantly. Clicking on the 'None' will remove
that book from your book shelf.
![](./appGifs/main_app.gif)

On the bottom right corner there is a round green button with a magnifying glass. Clicking this button will
bring you the the Search page. The url should also change to '/search'. On the top of this page you will
find a search bar. Clicking the back arrow in the search bar or the browser back button will bring you back to the home page. By starting to type one of the given search terms from [SEARCH_TERMS.md](SEARCH_TERMS.md) a list of books matching the query will appear as you type. If a book if already in your bookshelf it will show a banner on the
top with the shelf name. By clicking the green arrow on a book you will see a drop down with the shelf names. If the
book is in your bookshelf the correct shel should be selected in the drop down. If your book is not in the bookcase you may select a shelf to put it on. Your can test that it worked by clicking the back button in the search bar and seeing if the book is in the correct shelf, then go back the the search and double check the banner has the correct label and the drop down menu of that book has the correct shelf selected.
![](./appGifs/search_page.gif)

If a user enters a search term that is not valid an error message will show saying the search does not meet
the required terms and give a random 5 reccomendation terms that you can use. These are always 5 random search terms
from [SearchTerms.js](./src/Utils/SearchTerms.js)
![](./appGifs/search_error.gif)

If the user tries to go to any url besides the root '/' or the search page '/search' they will be directed to a danger page telling then this page does not exist and given a back button to direct the user to the home page.
![](./appGifs/not_found.gif)

#Reach Goal
For the next iteration of this app I want to build a new page to show more information on a selected book.
(Title, Author, Publishing Date, Description, ect.)

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
