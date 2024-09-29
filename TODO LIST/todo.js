const textinput = document.getElementById("taskInput"); // inputtext
const listContainer = document.getElementById("taskList");// list of items

function addTask(){ // adding tasks
    if(textinput.value === ''){ // if input is null
        alert("You need to enter a list to add");
    }
    else{
        let li = document.createElement("li"); // creating a list
        li.innerHTML = textinput.value;// taking the input value as list item
        listContainer.appendChild(li); // and appending into the list
        let span = document.createElement("span"); // for deleting 
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    textinput.value = ""; // clearing the inputtext box data
    savedata(); 
}

listContainer.addEventListener("click", function(event) { // on click checked
    const e = event;
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata(); 
    } else if (e.target.tagName === "SPAN") {// delete func
        e.target.parentElement.remove();
        savedata();
    }
    
},false);

//console.log("Task added"); // Inside the addTaskBtn click event
//console.log("Item clicked:", e.target);

function savedata(){ // refreshing
    localStorage.setItem("data", listContainer.innerHTML);
}

function showlist(){ // closing tab and opening
    listContainer.innerHTML = localStorage.getItem("data");
}

showlist()
