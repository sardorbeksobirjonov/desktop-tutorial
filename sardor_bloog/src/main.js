window.onload = () => {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    setTimeout(() => {
        div1.classList.add('fade-in-active');
        div2.classList.add('fade-in-active');
    }, 500);
};