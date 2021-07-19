document.addEventListener("DOMContentLoaded", function () {
    let i = 0;
    let likeCount = 0;
    let li = document.createElement('li');
    let likes = document.getElementsByClassName('likes');
    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');

    // TIMER
    setTimeout(start, 1000);
    function start() {
        setInterval(timer, 1000);
    }
    let timer = () => {
        i++;
        counter.innerText = i;
    }

    // MINUS
    minus.addEventListener("click", function () {
        counter.innerText = i - 1;
    })

    // PLUS
    plus.addEventListener("click", function () {
        counter.innerText = i + 1;
    })

    // HEART
    heart.addEventListener("click", function () {
        likeCount += 1;
        // button.innerHTML = "Click me: " + count;
        // li.appendElement(`${i} had been liked ${} time/s`);
        likes.appendElement(li);
    })

    // PAUSE
    pause.addEventListener("click", function () {
        counter.innerText = i;
    })
})