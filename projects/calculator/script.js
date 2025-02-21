const display = document.getElementById('display')

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){
    button.addEventListener("click",()=>{
        if(button.textContent === 'C')
        {
            clearDisplay();
        }
        else if(button.textContent === '=')
        {
            try{
                display.value = eval(display.value);
            }
            catch
            {
                display.value = "Error"
            }
        }
        else
        {
            display.value +=button.textContent;
        }
    })
})

function clearDisplay()
{
    display.value ="";
}