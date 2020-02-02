var navbar = document.getElementsByTagName('nav')[0];
var body = document.getElementsByTagName('body')[0];
var navButton = document.getElementById('nav-list-button');

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