## Deployed at

https://daily-fresh-news.netlify.app

The website is build in JavaSript using React JS by `npx create-react-app name`
Run `npm i` to install required dependencies
to run - `npm start`.

The news on the website:

1. are fetched from
   https://gnews.io/?ref=apilist.fun

2. allowing user to search for specific key words
3. Topics available are:
   - UK,
   - world,
   - business,
   - technology,
   - entertainment,
   - sports,
   - science,
   - health.
4. 10 articles per page

Low-fidelity design you can find in "./src/prototype/prototype.png"

Next steps to develop:

1. Text in articles overflow from the container, needs to be responsive
2. Home page renders UK search
3. Make "search" a component
4. Not searching by category, but by search only
5. Performance of the site is slow, google to fix it
6. Create a function to check if article has been repeated
7. Create a function to check length of the title and description to put in proper div
8. Responsive text and layout. Layout on mobile screen is different, so the text fonts.
9. Sometimes images are coming stretched from external sources. Check if there's a way to fix it.
