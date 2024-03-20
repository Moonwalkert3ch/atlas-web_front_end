function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    request.onload = function() {
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
            callback(extract);
        } 
    };

    request.send();
}

queryWikipedia(createElement);