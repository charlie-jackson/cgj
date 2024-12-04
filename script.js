const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener("click", function() {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener("click", function() {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// const submit = document.getElementById('submit');
// const correctOption = document.getElementById('knitting');

// submit.addEventListener("click", function() {
//     if (correctOption.checked) {
//         alert('Well done, this is a lie!');
//     } else {
//         alert('Sorry, this is actually true! Please try again...');
//     }
// });













