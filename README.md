# Short Stories Front End
This is the front end for my Short Stories web app where users can signup, login, then view public stories or post some of their own.

**Link to project:** https://legendary-banoffee-1f9c82.netlify.app/publicStories

## How It's Made:

**Tech used:** TypeScript, React, Materialize, JWT decode

I used TypeScript with React because I was curious in its benefits and it was quite beneficial. The strict typing gave me confidence and made it easier to find where things went wrong. The different "pages" of the app are made using React Router and the styling is done with Materialize. JWT decode is used to authenticate users when they login.

## Features to add
- Pagination
- Profile pictures
- A better story editor

## Lessons Learned:

I learned how to handle authentication using JWT on the frontend. I made it a hassle by not putting the authenticated state on the top level. Instead I checked authentication on the views that required them. Next time I know to have authentication on the top level and pass down the authenticated state as props to the different views. I also learned that strict typing is much better for development as it is  easier to see where things went wrong and the codebase would stay "correct" as more code is added 
