const ulList = document.getElementById('list')
const addItemButton = document.getElementById('item-add-btn')
const input = document.getElementById('input')
const deleteAllButton = document.getElementById("delete-all-todos")

addItemButton.addEventListener('click',()=>{
    const value = input.value;
    console.log(value);
    if(value == "")
    {
        return;
    }
    const liItem =document.createElement('li');
    liItem.textContent = value;
    const liCancel = document.createElement('button')
    liCancel.textContent='X'
    liItem.appendChild(liCancel)
    ulList.appendChild(liItem)
    input.value=''

    liCancel.addEventListener('click',()=>{
        liItem.remove()
    })
})

deleteAllButton.addEventListener('click',()=>{
    ulList.querySelectorAll('li').forEach((li)=>{
        li.remove();
    })
})

