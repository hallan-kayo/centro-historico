const target = document.querySelectorAll('[data-anime]')
const animateClass = 'animate'
function animeScroll() {
	const windowTop = window.pageYOffset + (window.innerHeight * 3.5 / 4);
	target.forEach(function (element) {
		if ((windowTop) > element.offsetTop) {
			element.classList.add(animateClass)
			
		} else {
			element.classList.remove(animateClass)
		}
	})
}
animeScroll()
window.addEventListener('scroll', function () {
	animeScroll()
})