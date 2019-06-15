navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function(e) {
    if (this.scrollY > 0 && this.innerWidth > 925) {
        navbar.classList.add('floating');
    } else {
        navbar.classList.remove('floating');
    }
});
