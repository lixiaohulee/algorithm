function quickSort(arr,left=0, right=arr.length-1) {
    var i=left
    var j=right
    var tmp = arr[i]
    if(left>right){
        return
    }
    
    while(i<j){
        while (i<j && arr[j]>tmp) {
          j--
        }     
        arr[i] = arr[j]
        while (i<j && arr[i]<tmp) {
          i++
        }
        arr[j] = arr[i]      
    }
    arr[i] = tmp
    quickSort(arr,left,i-1)
    quickSort(arr,i+1,right)
}
var arr = [5,4,3,2,1]
quickSort(arr)
console.log(arr)