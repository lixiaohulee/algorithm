


const appendDiv = function() {
    for(let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
        div.style.display = 'none';
    }
}

//把不变的和可变的分开 
const appendDiv1 = (callback) => {
    for(let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
        callback(div);
    }
}

appendDiv1((divEl) => divEl.style.display = 'none');