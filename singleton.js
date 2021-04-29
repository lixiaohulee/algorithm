






function getSingle(func) {
    let res = null;
    return function() {
        return res || func.apply(this, arguments);
    }
}

function createDiv(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    div.style.display = 'none';
    document.body.appendChild(div);
}


const createModal = getSingle(createDiv);
document.querySelector('button').addEventListener('click', function(e) {
    const modal = createModal('lixiaohu');

    modal.style.display = 'block';
}, false)