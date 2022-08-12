import renderPageThree from "./surveyThree.js";

const mainContainer = document.getElementById("main-container");
const endContainer = document.getElementById("end-container");
const answerArea = document.getElementById("answerArea");
const statementImage = document.getElementById("image-statement");

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

const renderPageTwo = () => {
//gets resets image and resests main html adds in question for second page.
  statementImage.src = `${imgArray[slidePosition]}`;
  mainContainer.style.display = "block";
  endContainer.style.display = "none";
  answerArea.innerHTML = `
        <div class="answer-star-container">
            <div class="star-container">
                <i id=1 class=" star fa-regular fa-star fa-2x"></i>
                <i id=2 class=" star fa-regular fa-star fa-2x"></i>
                <i id=3 class=" star fa-regular fa-star fa-2x"></i>
                <i id=4 class=" star fa-regular fa-star fa-2x"></i>
                <i id=5 class=" star fa-regular fa-star fa-2x"></i>
            </div>
            <div class="star-headings">
                <p>does not fit at all</p>
                <p>fits very well</p>
            </div>
        </div>
        `;

  const stars = document.getElementsByClassName("star");

  for (let star of stars) {
    star.addEventListener("mouseover", () => {
      //when star is hoverd over all stars with smaller ratings become solid all other stars stay/revert to regular
      for (let i = 0; i < stars.length; i++) {
        if (i + 1 <= star.id) {
          stars[i].classList.add("fa-solid");
          stars[i].classList.remove("fa-regular");
        } else {
          stars[i].classList.remove("fa-solid");
          stars[i].classList.add("fa-regular");
        }
      }
    });
  }

  for (let star of stars) {
    star.addEventListener("click", () => {
      //similar code used to move slides and determine end
      if (slidePosition < 3) {
        slidePosition++;
        statementImage.src = `${imgArray[slidePosition]}`;
        customerDetails[`Response_${slidePosition}`] = star.id;
      } else {
        endContainer.style.display = "block";
        mainContainer.style.display = "none";

        document.getElementById("continueBtn").removeEventListener("click", () => (handleClick(button)));
        console.log(document.getElementById("continueBtn"))
        document.getElementById("continueBtn").addEventListener("click", () => {renderPageThree()});
      }
      for (let star of stars) {
        //when a new slides appears stars revert to original style
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
      }
    });
  }
};

export default renderPageTwo;
