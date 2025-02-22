const submitButton = document.getElementById("submit-button");
const reviewInput = document.getElementById("review-input");
const rightContainer = document.getElementById("right-container");
submitButton.addEventListener("click",()=>{
    if(reviewInput.value === "")
    {
        return;
    }
    const textArea = document.createElement('textarea');
    textArea.disabled = true;
    textArea.className = "reviews";
    textArea.disabled;
    textArea.value = reviewInput.value;
    reviewInput.value = "";
    rightContainer.prepend(textArea)
});
