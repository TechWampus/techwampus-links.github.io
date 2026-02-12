const bg = document.getElementById('bg');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');
const title = document.querySelector('.title');
const tagline = document.querySelector('.tagline');
const linkWrappers = document.querySelectorAll('.link-wrapper');
const footerText = document.querySelector('.footer-text');



let mouseX = 50;
let mouseY = 50;
let bgX = 50;
let bgY = 50;

window.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth) * 100;
  mouseY = (e.clientY / window.innerHeight) * 100;
});

function animate() {
  // Smooth background follow
  bgX += (mouseX - bgX) * 0.08;
  bgY += (mouseY - bgY) * 0.08;
  bg.style.setProperty('--bgX', `${bgX}%`);
  bg.style.setProperty('--bgY', `${bgY}%`);

  // Subtle parallax
  const offsetX = (bgX - 50) * 0.5;
  const offsetY = (bgY - 50) * 0.5;
if (window.innerWidth > 768) {
  footerText.style.transform =
    `translate(${offsetX * 0.15}px, ${offsetY * 0.15}px)`;
} else {
  footerText.style.transform = 'translate(0, 0)';
}

  container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  logo.style.transform = `translate(${offsetX*0.6}px, ${offsetY*0.6}px)`;
  title.style.transform = `translate(${offsetX*0.3}px, ${offsetY*0.3}px)`;
  tagline.style.transform = `translate(${offsetX*0.2}px, ${offsetY*0.2}px)`;
  linkWrappers.forEach(wrapper => {
    wrapper.style.transform = `translate(${offsetX*0.1}px, ${offsetY*0.1}px)`;
  });


  requestAnimationFrame(animate);
}

animate();
