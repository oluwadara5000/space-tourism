# Frontend Mentor - Space Tourism solution

This is a solution to the Space Tourism Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [https://github.com/oluwadara5000/space-tourism]
- Live Site URL: [https://space-entourage.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

```css

.panel {
  background-color: #ffffff;
  position: absolute;
  width: 0;
  top: 0;
  padding: 34px 27px 0 32px;
  right: 0;
  height: max-content;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  height: 100vh;
  transition: 0.2s ease-in-out;
}

```
```js
openMenu.addEventListener("click", function () {
  document.getElementById("nav-bar").style.display = "none";
  document.getElementById("panel").style.width = "275px";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("cancel").style.margin = "0";
  document.getElementById("nav-list").style.display = "block";
  document.getElementById("panel").style.padding = "40px 45px 0 32px";
});

closeMenu.addEventListener("click", function () {
  document.getElementById("panel").style.width = "0";
  document.getElementById("cancel").style.display = "none";
  document.getElementById("nav-list").style.display = "none";
  document.getElementById("panel").style.padding = "0";
  document.getElementById("nav-bar").style.display = "block";
  document.getElementById("header").style.width = "100%"
});

```