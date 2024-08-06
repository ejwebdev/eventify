//Takes the variable and import here
import {
	aboutHTML,
	servicesHTML,
	chooseHTML,
	collectionHTML,
	pricingHTML,
} from "./all-content.js";

//Using DOM or Document Object Method
//Display the container of all content to the page using JavaScript
document.querySelector(".js-about-grid").innerHTML = aboutHTML;
document.querySelector(".js-services-grid").innerHTML = servicesHTML;
document.querySelector(".js-choose-grid").innerHTML = chooseHTML;
document.querySelector(".js-collection-grid").innerHTML = collectionHTML;
document.querySelector(".js-pricing-grid").innerHTML = pricingHTML;

//----------------------------------------
//From JQuery library
//Smooth scrolling for navbar nav-menu a
$(".nav-menu li a").on("click", function (event) {
	event.preventDefault();
	var target = this.hash;
	var $target = $(target);

	if ($target.length) {
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top,
				},
				700,
				"swing",
				function () {
					window.location.hash = target;
				}
			);
	}
});

//Smooth scrolling for home buttons
$(".home-buttons a").on("click", function (event) {
	event.preventDefault();
	var target = this.hash;
	var $target = $(target);

	$("html, body")
		.stop()
		.animate(
			{
				scrollTop: $target.offset().top,
			},
			700,
			"swing",
			function () {
				window.location.hash = target;
			}
		);
});

//Toggle Darkmode Feature
const toggle = document.getElementById("toggleDark");
const html = document.querySelector("html");

toggle.addEventListener("click", () => {
	//Toggle dark mode class
	html.classList.toggle("dark-mode");

	//Transition the icon
	toggle.classList.add("hidden");

	//Swap image source after transition
	setTimeout(() => {
		//Toggle the icon src attribute
		if (html.classList.contains("dark-mode")) {
			toggle.src = "icons/light-mode.svg";
		} else {
			toggle.src = "icons/dark-mode.svg";
		}
		toggle.classList.remove("hidden");
	}, 100);
});

//Header Nav Hamburger Menu Icon
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//When hamburger clicked it will activate
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

//When hamburger clicked it will remove activate
document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);

//Add background color to header when scrolled
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
	if (window.scrollY > 0) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

//Elements animations when scrolled
const observer = new IntersectionObserver((entries) => {
	// For each entry (element) being observed
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");

// Observe each hidden element with the IntersectionObserver
hiddenElements.forEach((el) => observer.observe(el));
