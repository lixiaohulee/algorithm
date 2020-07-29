if(root===null) return 0;

let level = [[root, 0]];
let maxWidth = 1;

while(level.length > 0){
    let nextLevel = [];
    for(let i=0; i<level.length; i++){
        let [node, index] = level[i];
        if(node.left!==null) nextLevel.push([node.left, index*2]);
        if(node.right!==null) nextLevel.push([node.right, index*2+1]);
    }

    if(nextLevel.length>1) 
        maxWidth = Math.max(maxWidth, nextLevel[nextLevel.length-1][1] - nextLevel[0][1] + 1);
    level = nextLevel;
}

return maxWidth;