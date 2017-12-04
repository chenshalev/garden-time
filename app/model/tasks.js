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
        this.imageUrl = plainObject.imageurl;
        this.remarks = plainObject.remarks;
        this.calendar = plainObject.calendar;
        this.datedone = new Date(plainObject.datedone);
    };


    return Task;
});


gardenApp.factory("tasks", function (Task, activeUser) {
    var taskArr = [];
    var taskEmp = [];


    var wasEverLoaded = false;
    var wasEverLoadedEmp = false;

    var user = activeUser.get();

    var add = function (task) {
        taskArr.push(task);
    }
    var addEmp = function (task) {
        taskEmp.push(task);
    }
    var update = function (index, task) {
        taskArr[index] = task;    
        //alert(index)  ;              
        //alert("update"+JSON.stringify(taskArr))  ;              
    }
    var addDateDone=function(task) {
        var index=taskArr.indexOf(task);
        //alert("index"+index);
        //alert("task"+JSON.stringify(task));
        //alert("taskArr"+JSON.stringify(taskArr));
        taskArr[index].datedone = new Date();
    }
    var updateEmp = function (index, task) {
        taskEmp[index] = task;
    }
    function getIndexByTaskEmp(task) {
        return taskEmp.indexOf(task);
    }
    function getIndexByTask(task) {
        return taskArr.indexOf(task);
    }
    var remove = function (index) {
        taskArr.splice(index, 1);
    }

    var removeEmp = function (index) {
        taskEmp.splice(index, 1);
    }

    var load = function (taskPlainObjectArr) {
        for (var i = 0; i < taskPlainObjectArr.length; i++) {
            taskArr.push(new Task(taskPlainObjectArr[i]))
        }
        wasEverLoaded = true;
    }
    var getAll = function () {
        //alert(JSON.stringify(taskArr))  ;       
        return taskArr;
    }
    var getAllEmp = function () {
        return taskEmp;
    }
    var updateAllEmp = function (tempArr) {
        taskEmp= tempArr;
    }
    var updateAll = function (tempArr) {
        taskArr= tempArr;
    }
   var get = function (index) {
        return taskArr[index];
    }

    var removeAll = function () {
        taskArr = [];
    }
    function getTaskById(index) {
        return taskArr[index];
    }
    function getTaskEmpById(index) {
        return taskEmp[index];
    }
    function getwasEverLoaded() {
        return wasEverLoaded;
    }
    function getwasEverLoadedEmp() {
        return wasEverLoadedEmp;
    }
    var loadEmp = function (taskPlainObjectArr) {
        for (var i = 0; i < taskPlainObjectArr.length; i++) {
             taskEmp.push(new Task(taskPlainObjectArr[i]));
        }
        wasEverLoadedEmp = true;
    }

    return {
        add: add,
        addEmp:addEmp,
        update: update,
        addDateDone:addDateDone,
        updateEmp: updateEmp,
        updateAllEmp:updateAllEmp,    
        updateAll:updateAll,    
        remove: remove,
        removeEmp: removeEmp,
        load: load,
        loadEmp:loadEmp,
        getAll: getAll,
        getAllEmp: getAllEmp,
        get: get,
        removeAll: removeAll,
        getTaskById: getTaskById,
        getTaskEmpById: getTaskEmpById,
        getwasEverLoaded: getwasEverLoaded,
        getwasEverLoadedEmp: getwasEverLoadedEmp,
        getIndexByTask:getIndexByTask,
        getIndexByTaskEmp:getIndexByTaskEmp
    }
})