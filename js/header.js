var navbar = document.getElementsByTagName('nav')[0];
var body = document.getElementsByTagName('body')[0];
var navButton = document.getElementById('nav-list-button');
var bannerButton = document.getElementById('banner-button');
var bannerInput = document.getElementById('banner-email');

window.addEventListener('scroll', function(e) {
    if (this.scrollY > 0 || this.innerWidth < 1050) {
        navbar.classList.add('floating');
    } else {
        navbar.classList.remove('floating');
    }
});

if (window.innerWidth < 1050) {
    navbar.classList.add('floating');
}

navButton.addEventListener('click', function() {
    body.classList.toggle('nav-open');
});

bannerButton.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open('POST', '/unknown', true);
    request.send(bannerInput.value);
    bannerInput.value = '';
    bannerButton.value = 'Sent';
    setTimeout(function() { 
        bannerButton.value = 'Sign up';
    }, 2000);
});
