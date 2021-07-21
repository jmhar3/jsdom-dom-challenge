document.addEventListener("DOMContentLoaded", function () {
    // TIMER
    const counter = document.getElementById('counter');

    function incrementCount() {
        let counterValue = parseInt(counter.innerText);
        counterValue++;
        counter.innerText = counterValue;
    }

    let timer = setInterval(incrementCount, 1000);

    // MINUS
    const minus = document.getElementById('minus');
    minus.addEventListener("click", decrementCount)
    function decrementCount() {
        let counterValue = parseInt(counter.innerText);
        counterValue--;
        counter.innerText = counterValue;
    }

    // PLUS
    const plus = document.getElementById('plus');
    plus.addEventListener("click", incrementCount)

    // HEART
    
  const likeButton = document.querySelector('#heart')
    const likeList = document.querySelector('.likes')
    const likes = {}


    likeButton.addEventListener('click', increaseLike)

    function increaseLike(event) {
        const key = counter.innerText
    
        if (likes[key]) likes[key]++
        else likes[key] = 1
    
        for (const key in likes) {
          console.log(key)
          let currentItem = document.querySelector(`#_${key}`)
          if (currentItem) {
            currentItem.innerText = `${key} has been liked ${likes[key]} time`
          } else {
            currentItem = document.createElement('li')
            currentItem.id = `_${key}`
    
            currentItem.innerText = `${key} has been liked ${likes[key]} time`
            likeList.append(currentItem)
          }
        }
      }

    // PAUSE
    const pause = document.getElementById('pause');
    pause.addEventListener("click", pauseCounter)
    function pauseCounter(event) {
        if (event.target.innerText === 'pause') {
            clearInterval(timer)
            event.target.innerText = 'resume'
        } else {
            timer = setInterval(incrementCount, 1000);
            event.target.innerText = 'pause'

        }
    }

    // COMMENTS
    const list = document.getElementById('list');
    let input = document.getElementById('comment-input');
    let form = document.getElementById('comment-form');
    const submit = document.getElementById('submit');
    form.addEventListener('submit', submitForm)

    function submitForm(e) {
        e.preventDefault();
        const div = document.createElement('div')
        div.innerText = input.value
        list.append(div)
        document.getElementById('comment-input').value = '';
    }
})

