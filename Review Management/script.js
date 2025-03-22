const submitButton = document.getElementById("submit-button");
const reviewInput = document.getElementById("review-input");
const rightContainer = document.getElementById("right-container");
const allStars = document.querySelectorAll('.star')
let selectedIndex = -1; 
submitButton.addEventListener("click",()=>{
    if(reviewInput.value === "")
    {
        return;
    }
    if(selectedIndex === -1)
    {
        return;
    }
    const reviewArea = document.createElement('div');
    reviewArea.className = "reviewArea";
    const textArea = document.createElement('textarea');
    textArea.disabled = true;
    textArea.className = "reviews";
    textArea.disabled;
    textArea.value = reviewInput.value;
    reviewInput.value = "";
    reviewArea.appendChild(textArea)
    const starDiv = document.createElement('div')

    for(let i=0;i<5;i++)
    {
        const star = document.createElement('span')
        star.innerHTML = "&#9733;"
        if(i<=selectedIndex)
        {
            star.style.color = "gold"
        }
        else{
            star.style.color = "grey"
        }
        
       starDiv.appendChild(star);
    }
    reviewArea.appendChild(starDiv)
    rightContainer.prepend(reviewArea);
    selectedIndex = -1
    removeHighlightFromStars()
});

allStars.forEach((star,index)=>{
    star.addEventListener("mouseover",()=>{
        highlightStars(index);
    })
    star.addEventListener("mouseout",()=>{
        removeHighlightFromStars();
    })
    star.addEventListener("click",()=>{
        setHighlightStars(index);
    })
})

function highlightStars(index)
{
    allStars.forEach((star,i)=>{
        if(i<=index)
        {
            star.style.color = "gold";
        }
    })
}

function removeHighlightFromStars()
{
    allStars.forEach((star,i)=>{
        if(i>selectedIndex)
        {
            star.style.color = "grey";
        }
    })
}
function setHighlightStars(index)
{
    allStars.forEach((star,i)=>{
        if(i<=index)
        {
            star.style.color = "gold";
        }
        
    })
    selectedIndex = index;
}
