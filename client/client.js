console.log("Tester");
const guestbookForm = document.getElementById("the-form");

//Formatting the date using array methods
function dateISOtoLocal(date) {
  let newDate = "";
  newDate = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.substring(0, 4)}`;

  return newDate;
}

//Event handler for submit button
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(guestbookForm);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  fetch("https://week-4-guestbook-assignment.onrender.com/add-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });

  createFedback();
  guestbookForm.reset();
}

//Get the feedback data from the read-data endpoint
async function getFeedback() {
  const response = await fetch(
    "https://week-4-guestbook-assignment.onrender.com/read-data"
  );
  // console.log(response);
  const feedback = await response.json();
  // console.log(upgrades);

  return feedback;
}

let colourChange = false;

//Add the user feedback to the feedback container on the page
async function createFedback() {
  const feedbackContainer = document.getElementById("feedback-container");
  const feedbackData = await getFeedback();

  //Displays last peice of data input first
  feedbackData.reverse().forEach((feedback) => {
    const userContainer = document.createElement("div");
    const newDiv = document.createElement("div");
    const thumbContainer = document.createElement("div");
    const thumbButton = document.createElement("button");

    console.log(dateISOtoLocal(feedback.date));
    userContainer.className = "user-container";

    //Alternates colours
    if (colourChange == false) {
      userContainer.style.backgroundColor = "#59b36e4c";
      colourChange = true;
    } else {
      userContainer.style.backgroundColor = "#ff6eb938";
      colourChange = false;
    }

    newDiv.className = "user-feedback";
    thumbContainer.className = "thumb-container";
    thumbButton.className = "thumb-button";
    userContainer.innerHTML = `<div class="user-icon"><i class="fa-solid fa-user"></i></div>`;
    newDiv.innerHTML = `
        
        <div class="username">${feedback.username}</div>
      <div class="date">${dateISOtoLocal(feedback.date)}</div>
      <div class="guest-message">  ${feedback.message} </div>
      `;
    thumbButton.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    //Button only works on the second click. Can only read inline styles

    //Started experimenting with get computed styles

    thumbButton.addEventListener("click", () => {
      if (thumbButton.style.color == "black") {
        thumbButton.style.color = "#4CAF50";
        thumbButton.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
      } else {
        thumbButton.style.color = "black";
        thumbButton.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
      }
    });

    userContainer.appendChild(newDiv);
    thumbContainer.appendChild(thumbButton);
    userContainer.appendChild(thumbContainer);
    feedbackContainer.appendChild(userContainer);
  });
}

//Upon Start-Up
function startUp() {
  createFedback();
}

//Scroll to top for feedback container
const mybutton = document.getElementById("myBtn");
const feedbackContainer = document.getElementById("feedback-container");
feedbackContainer.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (feedbackContainer.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  feedbackContainer.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//Function Calls
startUp();

//Event Listners
guestbookForm.addEventListener("submit", handleSubmit);
mybutton.addEventListener("click", topFunction);
