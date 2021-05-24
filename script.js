var toggle = 0;
function playStop(element) {
    if (toggle == 0) {
        toggle += 1;
        console.log(toggle);
        element.play();
    } else {
        toggle = 0;
        console.log(toggle);
        element.pause();
    }
}

function start(element) {
    element.play();
}

function stop(element) {
    element.pause();
}