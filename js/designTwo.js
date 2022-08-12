const stars = document.getElementsByClassName('star')
const statementImage = document.getElementById("image-statement")

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


for (let star of stars){
    star.addEventListener('mouseover', () => {
        for (let i = 0; i < stars.length; i++){
            if (i+1 <= star.id){
                stars[i].classList.add("fa-solid")
                stars[i].classList.remove("fa-regular")
            } else{
                stars[i].classList.remove("fa-solid")
                stars[i].classList.add("fa-regular")
            }
            
        }
    })
}

for (let star of stars){
    star.addEventListener('click', () => {
        if(slidePosition < 5){
            slidePosition++
            statementImage.src=`${imgArray[slidePosition]}`
            customerDetails[`Response_${slidePosition}`] = star.id
            console.log(customerDetails)
        } else{
            document.getElementById('container').innerHTML = `
            <img class="finish" src="../img/img_control_tool_finish.svg"/>
            <h2>Section complete</h2>
            <h3>Press the arrow to continue to the next questions</h3>
            `
        }
        for(let star of stars){
            star.classList.remove("fa-solid")
            star.classList.add("fa-regular")
        }
    })
}
