const statementImage = document.getElementById("image-statement")
const answerButtons = document.querySelectorAll(".cat-button")
const submitBtn = document.getElementById('submitBtn')

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
    button.addEventListener('click', function(){
        console.log(slidePosition)
        let btnImage = button.childNodes[1]

        /*
         Check if button has already been clicked if it has it makes it 'inactive' 
         Then removes the active class to recert it's style. Finally it filters through the customers response array
         and removes it.  
         */
        if(button.active){
            button.active=false
            button.classList.remove("active")
            let filteredArray = customerDetails[`Response_${slidePosition}`].filter( (el) => {
                return el !== btnImage.id
            })

            customerDetails[`Response_${slidePosition}`] = filteredArray
            console.log(customerDetails)

        } else {
            /* If button is inactive it actives button by adding the class, it then proceeds to check if the object already has a
            an array created if so, the response is pushed into said array, otherwise a new array is created on the object and then
            the response is pushed into the array. 
            */
            button.active=true
            button.classList.add("active")
            console.log(customerDetails[`Response_${slidePosition}`])
            if (customerDetails[`Response_${slidePosition}`]){
                customerDetails[`Response_${slidePosition}`].push(btnImage.id)
            } else {
                customerDetails[`Response_${slidePosition}`] = []
                customerDetails[`Response_${slidePosition}`].push(btnImage.id)
            }
        }

    })
}

submitBtn.addEventListener('click', () => {
    console.log(customerDetails)
    for (button of answerButtons){
        button.active=false
        button.classList.remove('active')
    }
        if(slidePosition < 3){
            slidePosition++
            statementImage.src=`${imgArray[slidePosition]}`
        } else{
            container.innerHTML = `
                <img class="finish" src="../img/img_control_tool_finish.svg"/>
                <h2>Section complete</h2>
                <h3>Press the arrow to continue to the next questions</h3>
                `
        }
    })