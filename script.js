//Task 1 inputs
let task1Title = prompt("Enter task 1 title:");
let task1Description = prompt("Enter task 1 description:");
let task1Status = "";

while(true) {
    task1Status = prompt(
        "Enter task 1 status (todo, doing, done):"
    ).toLowerCase();
    if (
        task1Status === "todo"||
        task1Status === "doing"||
        task1Status === "done"
    ) {
        break;
    } else {
        alert("Invalid status. Please enter 'todo', 'doing', 'done'.");
    }
}

//Task 2 inputs
let task2Title = prompt("Enter task 2 title:");
let task2Description = prompt("Enter task 2 description");
let task2Status =""

while (true) {
    task2Status = prompt (
        "Enter task 2 status (todo, doing, done):"
    ).toLowerCase ();
    if (
        task2Status === "todo"||
        task2Status === "doing"||
        task2Status === "done"
    ) {
        break;
    } else {
        alert("Invalid status. Please enter 'todo', 'doing', 'done',");
    }
}

//Track whether anhy tasks are completed
let hasCompletedTasks = false;

//Check and display completed tasks
if (task2Status === "done") {
    console.log("Title: "+task1Title+",Status:" +task1Status);
    hasCompletedTasks = true;
}

if (task2Status === "done"){
    console.log("Title: "+ task2Title + ",Status:" + task2Status)
    hasCompletedTasks = true;
}

//Motivational message if no tasks are done
if (!hasCompletedTasks) {
    console.log ("No tasks completed, let's get to work!");
    }

