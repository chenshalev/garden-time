// Shared Recipe Constructor
gardenApp.factory("Task", function () {
    function Task(plainObject) {
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.activity = plainObject.activity;
        this.plant = plainObject.plant;
        this.location = plainObject.location;
        this.fromdate = new Date(plainObject.fromdate);
        this.todate = new Date(plainObject.todate);
        this.Employee = plainObject.Employee;
        this.imageurl = plainObject.imageurl;
        this.remarks = plainObject.remarks;
        this.calendar = plainObject.calendar;
    };


    return Task;
});


gardenApp.factory("tasks", function (Task) {
    var taskArr = [];

    var add = function (task) {
        taskArr.push(task);
    }

    var update = function (index, task) {
        taskArr[index] = task;
    }

    var remove = function (index) {
        taskArr.splice(index, 1);
    }

    var load = function (taskPlainObjectArr) {
        for (var i = 0; i < taskPlainObjectArr.length; i++) {
            taskArr.push(new Task(taskPlainObjectArr[i]))
        }
    }

    var getAll = function () {
        return taskArr;
    }

    var get = function (index) {
        return taskArr[index];
    }

    var removeAll = function () {
        taskArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})