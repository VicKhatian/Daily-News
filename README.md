# Percayso Programming Exercise 3

## Solution

The news site is published at https://glistening-mousse-846a7b.netlify.app/. Sorry it's published late as I struglled to find a solution for my error (to add CI = before the token key+value)

Site might not work properly as the api key token might be invalid due to limit of call per day.

The website is build in `JavaSript` using React JS
To install - `npx create-react-app name`
Run `npm i` to install required dependencies
to run - `npm start`
To create routes - `npm i react-router-dom` v6.

The news on the website:

1. will be fetched from
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

For navigation install `npm install react-router-dom@6`

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

## Brief

Create a website that gets news from the GNews api:

https://gnews.io/?ref=apilist.fun
Your website must:

1. Include a search area
2. Include a results area
3. Include tests
4. Be hosted on a publicly accessible URL, so we can see it working

You are free to choose:

1. How to style all aspects of the page.
2. What language and framework to use.

We are looking to understand your approach to solving this problem as much as the actual technical solution. Add comments to your code to help us understand your thinking.

Googling syntax is allowed, googling solutions is not.

## Submitting your solution

Please commit your solution within the time frame given to you, even if your solution is not complete. We will be interested in seeing how you approached the problem.

Extra credit
If you're in the mood for showboating, plese feel free to show us what else you can do. E.g. you could automate tests for your solution.
