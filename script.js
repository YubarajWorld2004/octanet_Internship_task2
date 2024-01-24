function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }
                var li = document.createElement("li");

              var span = document.createElement("span");
    span.appendChild(document.createTextNode(taskInput.value));
            var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };
             li.appendChild(span);
         li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
}
