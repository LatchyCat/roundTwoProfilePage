

function myAlert() {
    alert('hello world')
}

let suggestions = ['The', 'button', 'has', 'been', 'clicked', 'several', 'times', 'now']
let counter = 0;

function signIn(btn) {
    if (btn.innerText.toLowerCase() === 'sign-in') {
        btn.innerText = 'sign-out';
    } else {
        btn.innerText = 'sign-in';
    }

}

// function randomGenAlert() {
//     for (let i = 0; i < suggestions.length; i++) {

//         document.getElementById('homeLink').addEventListener('click', randomGenAlert);

//     }

// }
