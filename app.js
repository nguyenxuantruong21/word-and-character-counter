let textbox = document.getElementById('textbox')
textbox.addEventListener('input', function () {
    var text = this.value;
    let char = text.length;
    var words = text.split(' ')
    let cnt = 0
    for (let word of words) {
        ++cnt;
    }
    document.getElementById('char').innerHTML = char
    document.getElementById('word').innerHTML = cnt
})