/**
* 题目1: 设计一个异步队列，并发数量为n
* 这一道题目可以说是超高频次，题目描述如下：
* 实现一个 taskpool类，其至少具有 add 方法和最大并发数 max，该 add 方法接收函数(返回值为 promise)，当当前执行的任务数小于设定值 max 时，立即执行，大于 max，则等待任务空闲时执行该任务，模版代码如下:
*/
// class TaskSchedule {
//   private max: number = 0;
//   private queue: Array<Function> = [];
//   private curRunningTaskCount: number = 0;
//   public add(task: Function): void {
//     this.queue.push(task);
//     this.run();
//   }
//   private run(): void {
//     if (this.queue.length && this.curRunningTaskCount <= this.max) {
//       const task = this.queue.shift() as Function;
//       this.curRunningTaskCount++;
//       Promise.resolve(task()).finally(() => {
//         this.curRunningTaskCount--;
//         this.run();
//       })
//     }
//   }
// }
// type Task = () => Promise<unknown>;
// function schedule(max: number): Function {
//   let currentRunningTaskCount = 0;
//   let latestTaskIndex = 0;
//   let thisScheduleResolve;
//   let thisScheduleReject;
//   const taskResArr: any[] = [];
//   const taskErrorArr: any[] = [];
//   const run = (taskArr: Task[], taskIndex: number) => {
//     if (taskArr.length && taskArr[taskIndex] && currentRunningTaskCount < max) {
//       const task = taskArr.shift() as Task;
//       currentRunningTaskCount++;
//       latestTaskIndex++;
//       task().then(res => {
//         taskResArr[taskIndex] = res;
//       }).catch((err) => {
//         taskErrorArr[taskIndex] = err;
//       }).finally(() => {
//         currentRunningTaskCount--;
//         if (taskArr.length === 0) {
//           thisScheduleResolve(taskResArr);
//         }
//         if (taskErrorArr.length === taskArr.length) {
//           thisScheduleReject(taskErrorArr);
//         }
//         run(taskArr, latestTaskIndex);
//       });
//     }
//   }
//   return function(taskArr: Task[]): Promise<unknown[]> {
//     return new Promise((resolve, reject) => {
//       thisScheduleResolve = resolve;
//       thisScheduleReject = reject;
//       try {
//         run(taskArr, latestTaskIndex);
//       } catch (err) {
//         thisScheduleReject(err);
//       }
//     })
//   }
// }
var AsyncQueue = /** @class */ (function () {
    function AsyncQueue() {
        this.eventMap = new Map();
    }
    AsyncQueue.prototype.tap = function (name, fn) {
        if (this.eventMap.has(name)) {
            var arr = this.eventMap.get(name);
            arr.push(fn);
            this.eventMap.set(name, arr);
        }
        else {
            this.eventMap.set(name, [fn]);
        }
        return this;
    };
    AsyncQueue.prototype.exec = function (name, cb) {
        this.run(name, cb);
    };
    AsyncQueue.prototype.run = function (name, cb) {
        var _this = this;
        var taskArr = this.eventMap.get(name);
        if (taskArr && taskArr.length) {
            var task = taskArr.shift();
            this.eventMap.set(name, taskArr);
            task(function () {
                _this.run(name, cb);
                if (taskArr.length === 0) {
                    cb();
                }
            });
        }
    };
    return AsyncQueue;
}());
function fn1(cb) {
    console.log('fn1');
    cb();
}
function fn2(cb) {
    console.log('fn2');
    cb();
}
function fn3(cb) {
    setTimeout(function () {
        console.log('fn3');
        cb();
    }, 2000);
}
function fn4(cb) {
    setTimeout(function () {
        console.log('fn4');
        cb();
    }, 3000);
}
// 创建事件队列
var asyncQueue = new AsyncQueue();
// 注册事件队列
asyncQueue.tap('init', fn1);
asyncQueue.tap('init', fn2);
asyncQueue.tap('init', fn3);
asyncQueue.tap('init', fn4);
// 执行事件队列
asyncQueue.exec('init', function () {
    console.log('执行结束');
});
