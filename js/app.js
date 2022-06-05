
function syncro() {
    let previewValue = document.getElementById("preview")
    let editorValue = document.getElementById("editor").value;
    let markedValue = marked(editorValue);
    previewValue.innerHTML = markedValue;
}
