const statementImage = document.getElementById("image-statement")
const answerButtons = document.querySelectorAll(".cat-button")

let slidePosition = 0

const customerDetails = {
    name: "Harry"
}

const imgArray = [
    "../img/img_statement_1.png",
    "../img/img_statement_2.png",
    "../img/img_statement_3.png",
    "../img/img_statement_4.png",
]


for (let button of answerButtons){
    // iterate through buttons and add event listeners
    button.addEventListener('click', function(){
        // checks that this isn't the last photo, if it is it directs user to nextpage. If it isn't it 
        // moves to next slide and stores the user's response in an object 
        if(slidePosition < 3){
            slidePosition++
            statementImage.src=`${imgArray[slidePosition]}`
            customerDetails[`Response_${slidePosition}`] = button.childNodes[1].id
        } else{
            container.innerHTML = `
                <img class="finish" src="../img/img_control_tool_finish.svg"/>
                <h2>Section complete</h2>
                <h3>Press the arrow to continue to the next questions</h3>
                <button id="continue">Next Page</button>
                `
        }
    })
}