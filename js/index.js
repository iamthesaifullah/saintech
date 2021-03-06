// FOR THE NAV MENU
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");


const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", ()=>{
	if (navLeft < 0) {
		menu.classList.add("show");
		document.body.classList.add("show");
		navBar.classList.add("show");
	}
});
navClose.addEventListener("click", ()=>{
	if (navLeft < 0) {
		menu.classList.remove("show");
		document.body.classList.remove("show");
		navBar.classList.remove("show");
	}
});

// Fix nav
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset;
	if(scrollHeight > navHeight){
		navBar.classList.add("fix-nav");
	}
	else{
		navBar.classList.remove("fix-nav");
	}
		
});

// scroll 

const links = [...document.querySelectorAll(".scroll-link")];

links.map(link => {
	link.addEventListener("click", e =>{
		e.preventDefault();

		const id = e.target.getAttribute("href").slice(1);
		const el = document.getElementById(id);
		let position = el.offsetTop - navHeight;

		window.scrollTo({
			top: position,
			left : 0,
		});

		navBar.classList.remove("show");
		menu.classList.remove("show");
		document.body.classList.remove("show");
	});

});


// FOR HERO
new TypeIt("#type1",{
	speed: 120,
	loop: true,
	waitUntilVisible: true,
})
	.type("Web Designer", {delay:400})
	.pause(500)
	.delete(9)
	.type(" Developer", {delay:400})
	.pause(500)
	.delete(9)
	.type(" graphics design", {delay:400})
	.pause(500)
	.delete(9)
	.go();
// FOR LOGO S A I N
new TypeIt("#type2",{
	speed: 120,
	loop: true,
	waitUntilVisible: true,
})
	.type("S A I N ", {delay:800})
	.pause(500)
	.delete(9)
	.go();

// for the about
new TypeIt("#type3",{
	speed: 120,
	loop: true,
	waitUntilVisible: true,
})
	.type("Web Designer", {delay:400})
	.pause(500)
	.delete(9)
	.type(" Developer", {delay:400})
	.pause(500)
	.delete(9)
	.type("graphics Designer", {delay:400})
	.pause(500)
	.delete(9)
	.go();
// gsap
gsap.from(".logo",{ opacity: 0, duration: 1, delay: 0.8, y: -10 });
gsap.from(".hamburger",{ opacity: 0, duration: 1, delay: 1, y: 20 });
gsap.from(".banner",{ opacity: 0, duration: 1, delay: 1.5, y: -200 });
gsap.from(".hero h3",{ opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1",{ opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4",{ opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a",{ opacity: 0, duration: 1, delay: 3.5, y: -50 });
gsap.from(".nav-item",{ opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2});
gsap.from(".icons span",{ opacity: 0, duration: 1, delay: 4, y: 30, stagger: 0.2});



// GslideJs

const glide  = document.querySelector(".glide");

if (glide)
	new Glide(glide, {
		type: "carousel",
		startAt: 0,
		perView: 3,
		gap: 30,
		hoverpause: true,
		autoplay: 2000,
		animationduration: 800,
		animationTimingFunc: "ease-in-out",
		breakpoints: {
			996:{
				perView:2
			},
			768: {
				perView: 1
			}
		},
	}).mount();
AOS.init();