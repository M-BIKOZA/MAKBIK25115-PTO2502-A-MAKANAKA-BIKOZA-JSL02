//for loop to manage multiple tasks
for (let i=0;i <2;++)
     {
    //declaring variables to store input
    let task = prompt ("Enter task"+ (i+1)+"tittle:");
    let description= prompt (Entre task"+ (i+1) +" description:");
        let taskStatus=""
        
        if (
            taskStatus==="todo"||
            taskStatus==="doing"||
            taskStatus==="done"
        ) {
            if (taskStatus==="done") {
                console.log("Tittle:" + task +", status:" + taskStatus);
            }
            else{
                console.log("No task completed, let's get to work!");
            }
        }

} while (taskedStatus !=="todo"
    &&taskStatus!=="doing"
    &&taskStatus!=="done");
