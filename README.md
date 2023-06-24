# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. I decided to take up a personal challenge and build the projects on Frontend Mentor challenges as a way to improve my skills in Vanilla Javascript (which I am more well-versed with) and build up on my understanding of ReactJS. For this challenge, I will be using ReactJS

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github](https://github.com/samoina/results-summary-component-reactjs)
- Live Site URL: [Netlify](/)

## My process

Took a mobile-first approach for this challenge. I first created the static files and then added the dynamism with the figures from the JSON file included in the starter package. I decided to hide the results section so that when a user clicks the button, it fetches the scores from the JSON file, and shows them on the summary section as well as displays the results section.

### Built with

- Semantic HTML5 markup
- BEM naming convention
- Flexbox
- Mobile-first workflow
- ReactJS

### What I learned

#### Difference between index.css and App.css

This is my first ReactJS project and I was wondering where to add my CSS styles (especially since I scaffolded my project using Vite)- what is the difference between index.css and App.css?

Found this explanation: In ReactJS, the App is the topmost component from where we get all the children components. By default, Vite sets up the index.css file which is linked to the index.html file. It is this file that determines global styles - ie styles for the entire application.

App.css on the other hand, is typically associated with App.jsx which is the entry point for the React App. For this reason, this file contains styling that is specific to the component hierarchy.

With this explanation, I figured that it would be best to have my reset styles and utility classes (if any) in the index.css file. For styles that are specific to App.js and its children components, these would go to App.css. I also noted that one can create additional css files for a more modular approach in styling (haven't done this before)

#### Where to put the className

After figuring out to put component styles in App.css, I was at crossroads at where to put the className attribute : in the parent component and then pass it to the relevant child component as a prop or otherwise?

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
