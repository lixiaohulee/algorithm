function binarySearch(arr, target) {
     if(arr){
         
        var start=0
        var end= arr.length-1
        while(start <= end){
            let cur=Math.floor((end + start)/2)
            if(arr[cur]===target) {
                return cur
            }else if(arr[cur]<target) {
                end=cur-1
            }else {
                start=cur+1
            }
        }
    }
     
    return -1
}






function binarySearch(arr, target)
 {
     if(arr){
         
     var start=0;
     var end=arr.length-1
     while(start!=end){
         let cur=start+Math.floor((end-start)/2)
         if(arr[cur]==target) {
            return cur;
        }
     else if(arr[cur]<target) {
        start=cur;
    }
     else if(arr[cur]>target){
         end=cur
     }
     }
         return -1
     }
     
     
           return -1
         }




var arr = [1,4,6,8]
var target = 8

console.log(binarySearch(arr,target))




var arr = [1,4,6,8]
var target = 8

console.log(binarySearch(arr,target))