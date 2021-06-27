console.log("hello there");

window.addEventListener('mouseup', mouseUpped);

function mouseUpped(){
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);

    if(selectedText.length>0){
        let msg = {
            text: selectedText
        }
        chrome.runtime.sendMessage(msg);
    }
}