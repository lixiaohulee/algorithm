/**实现一个并行异步任务队列
要求：
- 可以通过参数控制最大并行个数
- 每个任务的结果数据要在所有任务执行成功后返回，并且和任务队列保持一致
- 返回Promise，所有任务执行完毕时 resolve 结果，任何一个任务失败返回reject 
*/


const func = async (taskList: any[], max: number): Promise<any[]> => {
  const res: any[] = [];

  for (let i = 0; i < taskList.length; i++) {
    const subTaskList = taskList.slice(0, max);
    const subTaskRes = await Promise.all(subTaskList);
    res.push(subTaskRes);
    
    i += max;
  }

  return res;
}







