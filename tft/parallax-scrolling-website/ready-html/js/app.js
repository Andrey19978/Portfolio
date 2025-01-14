window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

const output = document.querySelector('.output')

function FuncPromise(){
    output.innerHTML = '/Users/gost/Desktop/Portfolio/Portfolio/tft/parallax-scrolling-website/ready-html/img/layer-front.png'
};


