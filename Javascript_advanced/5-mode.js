// changing the DOM with closure

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.fontTransform = transform;
        document.body.style.backgrounColor = background;
        document.body.style.fontColor = color;
    };
}

function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);
}