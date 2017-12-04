gardenApp.factory("activeTask", function () {
    var activeTask;
    var add=function (task){
        activeTask=task;
    }
    var get = function () {
        return activeTask;
    }


    return {
        get: get,
        add:add
    }
})