# **Week4 Assignment Reflection: Digital Guestbook 📑**

## Notion Workspace

- https://delirious-sushi-9c3.notion.site/Techeds-Week-4-GuestBook-Assignment-2d5f5d55bda941d0b69d75e89fa8ef85 - All of my planning for this assignment is in this Notion Workspace

## Client Link

- https://week-4-guestbook-assignment-aayinkx.onrender.com/

## Server Link

- https://week-4-guestbook-assignment.onrender.com/

## Help Links

- https://github.com/Tech-Educators/software-dev-014/tree/main/demos/week4/week4-assignment-guestbook - Walking Skeleton Repo 🩻
- https://guestbookproject.onrender.com/ - Example Guestbook
- https://www.freecodecamp.org/news/how-to-format-a-date-with-javascript-date-formatting-in-js/ - Formatting a Date in JS - **FOR DATE OBJECT**
- https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769 - Array Methods
- https://www.gravitywell.co.uk/insights/css-tip-fixed-positioning-inside-a-relative-container/ - Scroll to top fixed positioning within a div
- https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle - Trying to get my like buttons to work on the first click not the second
- https://stackoverflow.com/questions/15935318/smooth-scroll-to-top - Smooth Scroll

## Reflection

- To be honest this has been my least favourite project so far, I don't know if it was the number of elements that we had to do or whether i just didn't enjoy the backend side of things as much or maybe I wasn't as invested as the cookie clicker😅. It was definately still nice to learn and practice something new.
- Once i had broken down the task into parts, it became a lot easier to start putting it all together:
  - I set up my client, sevrer and my database (using seed file) first then i did the connections one by one.
  - Server --> Database then Client --> Server to make the one way connection
  - Database --> Server, Server --> Client to make the other way connection
- I managed to acheive all of the user requirement and started on some of the stretch goals. For the likes button I didn't want to create a second table so the like function is just for the current user on the page at the moment
- I reused a lot of styling from my cookie clicker assignment to make it easier for myself
- I didn't understand the functionality behind one of the stretch goals however to delete messages because i would think that only an admin should be able to delete entries not everyone

## What bugs did I encounter? 🪲

- How to format the date. When displayed on the page, it displays the date in ISO 8601 format not the traditional date format
  - 2023-05-30T00:00:00.000Z
  - Solved this by formatting the date with string manipulation methods. Specifically .substring() and .slice() (_Link attached at the top_)
- When trying to style my page adaptively, I experimented with the scale property however, it cause way to many problems and other elements stopped working
- I realised that my thumb buttons for each container only work on the second click. However I’m not sure why. I started researching possible solutions but didn’t get very far. (_Link attached at the top_)
- Deployed it last and the styling is so much smaller on-screen to what I was working with locally 🤣. The media queries still worked and everything else seemed fine so I’m going to leave it as is. (_Images in Notion Workspace_)
- Went back to it and found that I had my browser set to 175% 🤦‍♀️. The entire thing looks a bit small because my default sizing was going by an enlarged screen size. I think I’m going to leave it but it’s nice to know Render didn’t mess up my styling
