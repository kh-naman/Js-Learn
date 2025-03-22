const submitButton = document.getElementById("toggleButton")
const bulb=document.getElementById("bulb");
const status = document.getElementById("status");
submitButton.addEventListener("click",()=>{

    if(submitButton.textContent === "Turn On")
    {
        bulb.style.backgroundColor="#f1c40f";
        submitButton.textContent = "Turn Off"
        status.textContent = "Status: On"
        return;
    }
    bulb.style.backgroundColor="#95a5a6";
    submitButton.textContent = "Turn On"
    status.textContent = "Status: Off"
})