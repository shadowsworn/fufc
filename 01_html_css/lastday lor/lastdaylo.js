function liHandler(eventObject){
    eventObject.target.remove();
}

function clickHandler(eventObject) {

    var task = inputElem.value;
    if (task==""){
        return;
    }

    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click',liHandler)
    ulElem.appendChild(liElem);
    inputElem.value = "";
}



var ulElem = document.querySelector('#mytodo');
var inputElem = document.querySelector('#item');
var addBtnElem = document.querySelector('#addBtn');
addBtnElem.addEventListener('click', clickHandler);
