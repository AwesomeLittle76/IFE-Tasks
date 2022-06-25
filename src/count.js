const button = document.getElementById('button');

button.addEventListener('click', (function () {
    let count = 0;

    return function () {
        count += 1;

        if (count === 5) {
            alert('您已点击五次按钮');
            count = 0;
        }
    };
})())


