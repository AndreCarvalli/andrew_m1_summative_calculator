
const show = document.querySelector("#show")
let calcHistory = []
const displayHistory = document.querySelector("#calcHistory")

//Function to show keyed in value to display
function appendToDisplay(input){
    show.value += input
}

//Function to remove numbers from display
function clearScreen(){
    show.value = ""
}

//Function to perform arithmetic calculations
function calculate(){
    try{
        let result = eval(show.value) //js function to perform arithmetic operations
        calcHistory.push(`${show.value} = ${result}`) //Push to Array
        show.value = result         

        //Display history
        displayHistory.innerHTML = ""
        for(const element of calcHistory){
            displayHistory.innerHTML += `
                 <p> >> ${element} </p>
            `
        }
    }
    catch(error){
        show.value = "Error !"
    }   
}

// function displayHistory(){
    

//     calcHistory.forEach(item => {
//     //append p to section and display item
   
// })  
// }



