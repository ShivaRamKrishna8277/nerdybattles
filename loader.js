function loadFileIntoDiv(fileUrl, divId) {
    fetch(fileUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the file:', error);
        });
}