// Shared Recipe Constructor
gardenApp.factory("Task", function() {
    function Task(plainObject) {
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.activity = plainObject.activity;
        this.plant = plainObject.plant;
        this.location = plainObject.location;
        this.fromdate = new Date(plainObject.fromdate);
        this.todate = new Date(plainObject.todate);
        this.Employee = plainObject.Employee;
        this.imageUrl = plainObject.imageurl;
        this.remarks = plainObject.remarks;
        this.calendar = plainObject.calendar;
        this.datedone = new Date(plainObject.datedone);
        this.material = plainObject.material;
    };


    return Task;
});


gardenApp.factory("tasks", function(Task, activeUser) {
    var taskArr = [];


    var wasEverLoaded = false;

    var user = activeUser.get();

    var add = function(task) {
        taskArr.push(task);
    }
    var update = function(index, task) {
        taskArr[index] = task;
    }

    function getIndexByTask(task) {
        return taskArr.indexOf(task);
    }
    var remove = function(index) {
        taskArr.splice(index, 1);
    }

    var load = function(taskPlainObjectArr) {
        for (var i = 0; i < taskPlainObjectArr.length; i++) {
            taskArr.push(new Task(taskPlainObjectArr[i]))
        }
        wasEverLoaded = true;
    }
    var getAll = function() {
        return taskArr;
    }
    var updateAll = function(tempArr) {
        taskArr = tempArr;
    }
    var get = function(index) {
        return taskArr[index];
    }

    var removeAll = function() {
        taskArr = [];
    }

    function getTaskById(index) {
        return taskArr[index];
    }

    function getwasEverLoaded() {
        return wasEverLoaded;
    }
    return {
        add: add,
        update: update,
        updateAll: updateAll,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getTaskById: getTaskById,
        getwasEverLoaded: getwasEverLoaded,
        getIndexByTask: getIndexByTask,
    }
})