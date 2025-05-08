--Home Page (index.html)
Displays a welcome header and an image of a cat.
"Get a Random Cat Fact" button gets a new fact from the CatFact Ninja API.
Uses Bootstrap for responsive layout and styling.


--Cat Breeds Page (page2.html)
Displays a grid of cat breeds, each in a card format.
"Load More Breeds" button gets and appends 10 more breeds per click.
Each card includes:
Breed name
Country of origin
Coat type
Pattern

-- JavaScript (main.js)
Handles all API calls and DOM manipulation.
loadRandomFact(): Fetches and displays a random cat fact.
loadBreeds(page): Loads 10 breeds per page from the API.
Adds event listeners to buttons to trigger data loads.


-- Styling (styles.css)
Dark theme background.
Adds hover effect to cards.