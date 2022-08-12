const statementImage = document.getElementById("image-statement");
const mainContainer = document.getElementById("main-container");
const endContainer = document.getElementById("end-container");
const answerArea = document.getElementById("answerArea");

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

let answersArray = [
  "LotR",
  "Dr. Who",
  "Star Wars",
  "Harry Potter",
  "Star Trek",
  "TNMT",
];

//function that creates the answer buttons
const createTiles = () => {
  let tiles = "";
  for (let i = 0; i < 6; i++) {
    tiles += `<div class="tile">
          <button id="${answersArray[i]}" class="answer-button">${answersArray[i]}</button>
    </div>`;
  }
  return tiles;
};

const renderPageThree = () => {
  document.getElementById("question").textContent =
    "Which franchises are featured in the quote?";
  statementImage.src = `${imgArray[slidePosition]}`;
  mainContainer.style.display = "block";
  endContainer.style.display = "none";

  answerArea.innerHTML = `
  <div class="pg3-answer-buttons-container">
    ${createTiles()}
    </div>
    <button id="submitBtn">Submit</button>
    `;

  const submitBtn = document.getElementById("submitBtn");
  const answerButtons = document.querySelectorAll(".answer-button");

  for (let button of answerButtons) {
    button.addEventListener("click", function () {
      /*
         Check if button has already been clicked if it has it makes it 'inactive' 
         Then removes the active class to recert it's style. Finally it filters through the customers response array
         and removes it.  
         */
      if (button.active) {
        button.active = false;
        button.classList.remove("active");
        let filteredArray = customerDetails[`Response_${slidePosition}`].filter(
          (el) => {
            return el !== button.id;
          }
        );

        customerDetails[`Response_${slidePosition}`] = filteredArray;
      } else {
        /* If button is inactive it actives button by adding the class, it then proceeds to check if the object already has a
            an array created if so, the response is pushed into said array, otherwise a new array is created on the object and then
            the response is pushed into the array. 
            */
        button.active = true;
        button.classList.add("active");

        if (customerDetails[`Response_${slidePosition}`]) {
          customerDetails[`Response_${slidePosition}`].push(button.id);
        } else {
          customerDetails[`Response_${slidePosition}`] = [];
          customerDetails[`Response_${slidePosition}`].push(button.id);
        }
      }
    });
  }

  submitBtn.addEventListener("click", () => {
    for (let button of answerButtons) {
      button.active = false;
      button.classList.remove("active");
    }

    if (slidePosition < 3) {
      slidePosition++;
      statementImage.src = `${imgArray[slidePosition]}`;
    } else {
      mainContainer.style.display = "none";
      endContainer.style.display = "block";
      endContainer.innerHTML = `
                <img class="finish" src="../img/img_control_tool_finish.svg"/>
                <h2>Survey complete</h2>
                <h3>Thank you for taking this survey</h3>
                `;
    }
  });
};

export default renderPageThree;
