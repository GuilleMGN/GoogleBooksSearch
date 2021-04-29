# GoogleBooksSearch

## Description
This is a Google Books Search application that works with React. It displays a list of books and its information, including title, author, description, link, and thumbnail; all info is from the [Google Books API](https://http://www.googleapis.com/books/v1/volumes?q=). The application has a search box where the user can input any book title, and the results will return the matching titles. It has 2 pages, one being the search page, and the other is a saved page, where the user can store what books they like and view or delete them from there. The book information is stored in MongoDB, and the application is hosted live on Heroku. The application is mobile-responsive with Bootstrap. 

## Steps for Completion
Unfortunately, time was not a luxury I had. Locally, the application is able to get results from the API call, and display the books with all their information. The link button takes the user to the official google books page, and the save button stores the book information into the Robo3T MongoDB. The routing works so that the user is able to access the Saved books page. The books the user had saved are all displayed on this page, with all information, and a delete button. Unfortunately, the delete button gave errors upon request. Upon deploying to heroku, the main search page is displayed correctly and functions well, however the Mongo Atlas is not functioning properly yet, therefore it gives an error when attempting to display the Saved page. Fixing these errors and making them work with the components will make a flawless working application, which I plan on completing soon. 

## Links
Link to live application: https://hidden-river-44937.herokuapp.com/ </br>
Link to GitHub Repository: https://github.com/GuilleMGN/GoogleBooksSearch </br>
Questions? My email: matthewguillen777@gmail.com </br>

[![Name of Label](https://img.shields.io/badge/Javascript-JS-%23F7DF1E.svg)](https://www.w3schools.com/Js/)
[![Name of Label](https://img.shields.io/badge/Node.js-Node-green.svg)](https://nodejs.org/en/)
[![Name of Label](https://img.shields.io/badge/React.jsx-React-%2361DAFB.svg)](https://reactjs.org/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots
![googlebooks](https://user-images.githubusercontent.com/73862470/116502328-2fbb8c80-a881-11eb-91c7-78caeea793ca.PNG)
