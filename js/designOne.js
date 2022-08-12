const container = document.getElementById("container")
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
    "../img/img_statement_5.png",
    "../img/img_statement_6.png"
]


for (let button of answerButtons){
    button.addEventListener('click', function(){
        if(slidePosition < 5){
            slidePosition++
            statementImage.src=`${imgArray[slidePosition]}`
            customerDetails[`Response_${slidePosition}`] = button.childNodes[1].id
        } else{
            container.innerHTML = `
                <img class="finish" src="../img/img_control_tool_finish.svg"/>
                <h2>Section complete</h2>
                <h3>Press the arrow to continue to the next questions</h3>
                `
        }
    })
}