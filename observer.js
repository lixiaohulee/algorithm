function DownloadTask(id) {
    this.id = id
    this.loaded = false
    this.url = null
}

DownloadTask.prototype.finish = function(url) {
    this.url = url
    this.loaded = true
    console.log('task' + this.id + 'load data from' + url)
}



function DownloadTaskList() {
    this.downloadTaskList = []
}

DownloadTaskList.prototype.getCount = function() {
    return this.downloadTaskList.length
}

DownloadTaskList.prototype.get = function(index) {
    return this.downloadTaskList[index]
}

DownloadTaskList.prototype.add = function(task) {
    this.downloadTaskList.push(task)
}




function DataHub() {
    this.downloadTasks = new DownloadTaskList()
}

DataHub.prototype.addDownloadTask = function(downloadTask) {
    this.downloadTasks.add(downloadTask)
}

DataHub.prototype.removeDownloadTask = function(downloadTask) {
    this.downloadTasks.remove(downloadTask)
}

DataHub.prototype.notify = function(url) {
    const count = this.downloadTasks.getCount()
    for(var i = 0; i < count; i++) {
        this.downloadTasks.get(i).finish(url)
    }
}

DownloadTaskList.prototype.remove = function(task) {
    const count = this.getCount()
    
    let i = 0
    while(i < count) {
        if (this.downloadTaskList[i] === task) {
            this.downloadTaskList.splice(i, 1)
            break;
        }
        i++
    }
}





var dataHub = new DataHub()

var task1 = new DownloadTask(1)
var task2 = new DownloadTask(2)

dataHub.addDownloadTask(task1)
dataHub.addDownloadTask(task2)

dataHub.notify('this is a download url')