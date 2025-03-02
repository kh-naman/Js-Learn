const buttonsDiv = document.getElementById("buttons")
const submitButton = document.getElementById("submit")
const body = document.querySelector("body")
submitButton.addEventListener("click",()=>{
    
    const hexValue = document.querySelector("input").value;
    if(isValidHexCode(hexValue))
    {
        const button = document.createElement('button');
        button.textContent = hexValue
        button.className="button"
        button.addEventListener("click",()=>{
            body.style.backgroundColor = button.textContent
        });
        buttonsDiv.appendChild(button)
    }

    
});


    function isValidHexCode(hex) {
        const hexRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
        return hexRegex.test(hex);
    }
