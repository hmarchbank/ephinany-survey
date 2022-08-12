import renderPageTwo from "./surveyTwo.js";

const statementImage = document.getElementById("image-statement");
const answerButtons = document.querySelectorAll(".cat-button");

let slidePosition = 0;

const customerDetails = {
  name: "Harry",
};

const imgArray = [
  "../img/img_statement_1.png",
  "../img/img_statement_2.png",
  "../img/img_statement_3.png",
  "../img/img_statement_4.png",
];

const handleClick = (button) => {
  if (slidePosition < 3) {
    slidePosition++;
    statementImage.src = `${imgArray[slidePosition]}`;
    customerDetails[`Response_${slidePosition}`] = button.childNodes[1].id;
  } else {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("end-container").innerHTML = `
          <img class="finish" src="../img/img_control_tool_finish.svg"/>
          <h2>Section complete</h2>
          <button class="continue-button" id="continueBtn">Next Page</button>
          `;
    document.getElementById("continueBtn").addEventListener("click", () => {
      renderPageTwo();
    });
  }
};

for (let button of answerButtons) {
  // iterate through buttons and add event listeners
  button.addEventListener(
    "click",
    () => handleClick(button)
    // checks that this isn't the last photo, if it is it directs user to nextpage. If it isn't it
    // moves to next slide and stores the user's response in an object
  );
}
