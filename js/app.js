
const show = document.querySelector("#show")
let calcHistory = []
const displayHistory = document.querySelector("#calcHistory")

//Function to show keyed in value to display
function appendToDisplay(input){
    show.value += input
}

//Function to remove numbers from display
function clearScreen(){
    show.value = " "
}

//Function to perform arithmetic calculations & add to array History
function calculate(){
    try{
        (function addHistry(){
            let result = eval(show.value) //js function to perform arithmetic operations
            calcHistory.push(`${show.value} = ${result}`) //Push to Array
            show.value = result     
        })()
                
        displayHist()  
    }
    catch(error){
        show.value = "Error !"
    }   
}

function displayHist(){
    if(calcHistory.length === 0)
    {
        displayHistory.innerHTML = `
                 <p class="danger"> You have no stored calculations </p>
            `
    }
    else {
         displayHistory.innerHTML = " "
        for(const element of calcHistory){
            displayHistory.innerHTML += `
                 <p> >> ${element} </p>
            `
        }
    }  
}
displayHist()



