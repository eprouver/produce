function edq(str) {
	return str.replace(/\\([\s\S])|(")/g,"\\$1$2"); // thanks @slevithan!
}

function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}
