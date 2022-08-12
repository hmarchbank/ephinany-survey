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

const renderPageThree = () => {
  statementImage.src = `${imgArray[slidePosition]}`;
  mainContainer.style.display = "block";
  endContainer.style.display = "none";
  answerArea.innerHTML = `
    <div class="answer-star-container">
        <div class="answer-buttons-container">
        <div class="cat-container">
            <button class="cat-button">
            <image id="hiss" src="./img/img_cat_supersad.png" />
            </button>
            <h4 class="cat-text">Hiss</h4>
        </div>
        <div class="cat-container">
            <button class="cat-button">
            <image id="meow" src="./img/img_cat_neutral.png" />
            </button>
            <h4 class="cat-text">Meow</h4>
        </div>
        <div class="cat-container">
            <button class="cat-button">
            <image id="prrr" src="./img/img_cat_happy.png" />
            </button>
            <h4 class="cat-text">Prrr</h4>
        </div>
        </div>
        <button id="submitBtn">Submit</button>
    </div>
    `
    const submitBtn = document.getElementById("submitBtn");
    const answerButtons = document.querySelectorAll(".cat-button");


  for (let button of answerButtons) {
    button.addEventListener("click", function () {
      console.log(slidePosition);
      let btnImage = button.childNodes[1];
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
            return el !== btnImage.id;
          }
        );

        customerDetails[`Response_${slidePosition}`] = filteredArray;
        console.log(customerDetails);
      } else {
        /* If button is inactive it actives button by adding the class, it then proceeds to check if the object already has a
            an array created if so, the response is pushed into said array, otherwise a new array is created on the object and then
            the response is pushed into the array. 
            */
        button.active = true;
        button.classList.add("active");
        console.log(customerDetails[`Response_${slidePosition}`]);
        if (customerDetails[`Response_${slidePosition}`]) {
          customerDetails[`Response_${slidePosition}`].push(btnImage.id);
        } else {
          customerDetails[`Response_${slidePosition}`] = [];
          customerDetails[`Response_${slidePosition}`].push(btnImage.id);
        }
      }
    });
  }

  submitBtn.addEventListener("click", () => {
    console.log(customerDetails);
    for (let button of answerButtons) {
      button.active = false;
      button.classList.remove("active");
    }
    if (slidePosition < 3) {
      slidePosition++;
      statementImage.src = `${imgArray[slidePosition]}`;
    } else {
      mainContainer.style.display = "none"
      endContainer.style.display = 'block'
      endContainer.innerHTML = `
                <img class="finish" src="../img/img_control_tool_finish.svg"/>
                <h2>Survey complete</h2>
                <h3>Thank you for taking this survey</h3>
                `;
    }
  });
};

export default renderPageThree;
