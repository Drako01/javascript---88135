const toastButton = document.getElementById('toast');

if(toastButton){
toastButton.addEventListener('click', () => {
    Toastify({
        text: "Me hicieron Click",
        duration: 3000,
        // gravity: 'top',
        // position: "right",
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
    }).showToast();
})}