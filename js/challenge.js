document.addEventListener("DOMContentLoaded", function () {
    // TIMER
    let i = 0;
    const counter = document.getElementById('counter');

    setTimeout(start, 1000);
    function start() {
        setInterval(timer, 1000);
    }
    let timer = () => {
        i++;
        counter.innerText = i;
    }

    // MINUS
    const minus = document.getElementById('minus');

    minus.addEventListener("click", function () {
        counter.innerText = i - 1;
    })

    // PLUS
    const plus = document.getElementById('plus');

    // HEART
    const heart = document.getElementById('heart');
    let likeCount = 0;
    const likes = document.getElementsByClassName('likes');

    heart.addEventListener("click", function () {
        let li = document.createElement('li');
        likeCount += 1;
        currentI = Number(i)
        li.appendChild(document.createTextNode(`${currentI} had been liked ${likeCount} time/s`));
        likes.appendChild(li);
    })

    // PAUSE
    const pause = document.getElementById('pause');

    // COMMENTS
    const list = document.getElementById('list');
    let commentInput = document.getElementById('comment-input').value;
    let commentForm = document.getElementById('comment-form');
    const submit = document.getElementById('submit');

    // document.getElementById('submit').addEventListener('click', function (ev) {
    //     submit(ev);
    // });

    submit.addEventListener("click", function() {
        let commentText, wrapDiv;
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('newComment').value;
        document.getElementById('newComment').value = '';
        textBox.innerHTML = commentText;
        commentContainer.appendChild(wrapDiv);
        // e.preventDefault();
        // let comment = document.createElement('p');
        // comment.appendChild(document.createTextNode(commentInput));
        // list.appendChild(comment);
        // document.getElementById('comment-input').value = "";
    })

    // function addComment(ev) {

    // }
})

