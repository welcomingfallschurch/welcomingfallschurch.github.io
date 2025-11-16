var navbar = document.getElementById('top-navbar');
var body = document.getElementsByTagName('body')[0];
var navButton = document.getElementById('nav-list-button');
var bannerButton = document.getElementById('banner-button');
var bannerInput = document.getElementById('banner-email');

var headerPageLarge = document.getElementById('navbar-large');
var headerPageSmall = document.getElementById('navbar-small');


// navbar gradient
window.addEventListener('scroll', function (e) {
    if (this.scrollY > 0 || this.innerWidth < 1050) {
        navbar.classList.add('floating');
    } else {
        navbar.classList.remove('floating');
    }
});


window.addEventListener("resize", () => {
    if (window.innerWidth < 1050) {

        navbar.classList.add('floating');

        headerPageLarge.classList.add('hidden');
        headerPageSmall.classList.remove('hidden');

    } else {

        if (this.scrollY <= 0) {
            navbar.classList.remove('floating');
        }

        headerPageLarge.classList.remove('hidden');
        headerPageSmall.classList.add('hidden');
        
    }
})

navButton.addEventListener('click', function () {
    body.classList.toggle('nav-open');
});

bannerButton.addEventListener('click', function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://script.google.com/macros/s/AKfycbw2e2oMcsqfooG0QYbp38-vS4bYJvKii2hLQ9sKKO2tO9s6vWP5/exec?email=' + encodeURIComponent(bannerInput.value));
    request.send();
    bannerInput.value = '';
    bannerButton.value = 'Sent';
    setTimeout(function () {
        bannerButton.value = 'Sign up';
    }, 2000);
});



window.dispatchEvent(new Event('resize')); // to add floating if necessary, change header contents
// there is probably a better way to do this