document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


function adjustLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        document.querySelector('.intname').style.fontSize = '3em';
        document.querySelector('.introduction').style.fontSize = '1.2em';
    } else {
        document.querySelector('.intname').style.fontSize = '4em';
        document.querySelector('.introduction').style.fontSize = '1.5em';
    }


}
window.addEventListener('resize', adjustLayout);

adjustLayout();


document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const isLiked = JSON.parse(this.getAttribute('data-liked'));
        const likeCountElement = this.nextElementSibling;
        let likeCount = parseInt(likeCountElement.textContent, 10);

        if (isLiked) {
            this.style.color = '#fff';
            this.setAttribute('data-liked', 'false');
            likeCount--;
        } else {
            this.style.color = 'red';
            this.setAttribute('data-liked', 'true');
            likeCount++;
        }

        likeCountElement.textContent = likeCount;
    });
});





