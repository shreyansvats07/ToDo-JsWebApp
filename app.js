const item  = document.querySelector('#item');
const todo = document.querySelector('#todobox')
item.addEventListener (
        "keyup",function(event){
        if(event.key == "Enter"){
            additem(this.value);
            this.value = "";
        }
    }
)
const additem = (item)=>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle('done');
        }
    )
    listItem.querySelector("i").addEventListener(
        'click',function(){
            listItem.remove();
        }
    )
    todo.appendChild(listItem)
}