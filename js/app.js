
function syncro() {
    let previewValue = document.getElementById("preview")
    let editorValue = document.getElementById("editor").value;
    let markedValue = marked(editorValue);
    previewValue.innerHTML = markedValue;
}
function init () {
    let defaultText = `# Header
## Sub Header 
[Inline link](https://www.google.com)
\`back-ticks around\`
\`\`\`Code block () {
console.log("Last day of school");}\`\`\`
1. List Item
> Blockquote
**SupahBoldText**
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\`
    `;
    let editorVal = document.getElementById("editor");
    editorVal.value = defaultText;
    let previewVal = document.getElementById("preview");
    previewVal.innerHTML = marked(defaultText);
}

// a header (H1 size), a sub header (H2 size), a link, inline 
// code, a code block, a list item, a blockquote, an image, 
// and bolded text