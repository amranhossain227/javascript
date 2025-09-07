let todolist=[{
        text:"learn javascript",
        date:"2023-10-10"
    }
];




function addtodo(){
    
    


    let text=document.getElementById("myinput").value;
    let date=document.getElementById("date").value;
    todolist.push({
        text:text,
        date:date
    });
   display();
    
}

function deletetodo(index){
    todolist.splice(index,1);
    display();
}

function display(){
    let container=document.getElementById("todo-container");
    let phtml="";
    for (let i=0;i<todolist.length;i++){
        let text=todolist[i].text;
        let date=todolist[i].date;
        phtml+=`<div>
        <span id="p">${text}</span>
        <span id="p">${date}</span>
        <button id="btn" onclick="deletetodo(${i})">Delete</button>
        </div>`;
    }
    container.innerHTML=phtml;

}