var navbar = document.getElementsByTagName('nav')[0];
var body = document.getElementsByTagName('body')[0];
var navButton = document.getElementById('nav-list-button');
var bannerButton = document.getElementById('banner-button');
var bannerInput = document.getElementById('banner-email');
var FLOATING_HEADER_WIDTH = 1050;

window.addEventListener('scroll', function(e) {
    if (this.scrollY > 0) {
        navbar.classList.add('floating');
        navbar.classList.remove('scroll-top');
    } else {
        if (window.innerWidth > FLOATING_HEADER_WIDTH) {
            navbar.classList.remove('floating');
        }
        navbar.classList.add('scroll-top');
    }
});

if (window.innerWidth < FLOATING_HEADER_WIDTH) {
    navbar.classList.add('floating');
}

navButton.addEventListener('click', function() {
    body.classList.toggle('nav-open');
});

bannerButton.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://script.google.com/macros/s/AKfycbw2e2oMcsqfooG0QYbp38-vS4bYJvKii2hLQ9sKKO2tO9s6vWP5/exec?email=' + encodeURIComponent(bannerInput.value));
    request.send();
    bannerInput.value = '';
    bannerButton.value = 'Sent';
    setTimeout(function() { 
        bannerButton.value = 'Sign up';
    }, 2000);
});
