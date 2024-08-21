function highlight(elem, callback) {
    //const bgColor = "lightGreen";
    elem.style.backgroundColor = "lightGreen";
    if (callback && typeof callback === 'function') {
        callback(elem)
    }

}

let note = document.querySelector('.note');

function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

highlight(note, addBorder);


