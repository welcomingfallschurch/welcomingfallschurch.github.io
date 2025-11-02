var navbar = document.getElementById('top-navbar');
var body = document.getElementsByTagName('body')[0];
var navButton = document.getElementById('nav-list-button');
var bannerButton = document.getElementById('banner-button');
var bannerInput = document.getElementById('banner-email');


// navbar gradient
window.addEventListener('scroll', function(e) {
    if (this.scrollY > 0 || this.innerWidth < 1050) {
        navbar.classList.add('floating');
    } else {
        navbar.classList.remove('floating');
    }
});
window.addEventListener("resize", ()=>{
    if (window.innerWidth < 1050) {
        navbar.classList.add('floating');
    }else if(this.scrollY <= 0){
        navbar.classList.remove('floating');
    }
})

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

// generate navbar dropdown
document.addEventListener('DOMContentLoaded', ()=>{
    const pages = [
        ["Initiatives", "#", [
            ["Adult & Family Literacy Center", "/initiatives/literacy-center"],
            ["Welcoming Refugees", "/initiatives/welcoming-refugees"],
            ["Welcoming Week", "/welcoming-week"],
            ["Welcoming FC/CASA Grocery Deliveries", "/initiatives/grocery-deliveries"]
        ]],
        // ["Get Involved", "/get-involved", [ // might be re-used/redone
        //     ["Awareness", "/get-involved/awareness"],
        //     ["Action", "/get-involved/action"],
        //     ["Advocate", "/get-involved/advocate"],
        // ]],
        ["Partners", "/partners"],
        ["About", "/about/welcoming-falls-church", [
            ["Welcoming Falls Church", "/about/welcoming-falls-church"],
            ["Welcoming America", "/about/welcoming-america"],
        ]],
        ["Get Involved", "/donate"] // TODO change this hyperlink, modify /get-involved
    ]

    const navUL = document.getElementById('navbar-ul')

    for(let i = 0; i < pages.length; i ++){
        const page = pages[i]

        const a = document.createElement('a')
        a.textContent = page[0]
        a.href = page[1]

        const li = document.createElement('li')
        li.appendChild(a)

        if(page.length > 2){

            const newUL = document.createElement('ul')
            for(var ii = 0; ii < page[2].length; ii ++){
                const subpage = page[2][ii]

                const a2 = document.createElement('a')
                a2.textContent = subpage[0]
                a2.href = subpage[1]

                const li2 = document.createElement('li')
                li2.appendChild(a2)

                newUL.appendChild(li2)

            }
            li.appendChild(newUL)
        }
        navUL.appendChild(li)
    }
})