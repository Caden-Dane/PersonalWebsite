document.addEventListener('DOMContentLoaded', () => {
  // Intro Animation
  const intro = document.getElementById('intro');
  const introText = document.getElementById('intro-text');
  if (intro && introText) {
    gsap.fromTo(introText, 
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power3.out', onComplete: () => {
        gsap.to(introText, { x: '100%', opacity: 0, duration: 1.5, ease: 'power3.in', delay: 0.5 });
        gsap.to(intro, { opacity: 0, duration: 0.5, delay: 2, onComplete: () => intro.remove() });
      }}
    );
  }

  // Three.js Mouse Effect (Inspired by giustotech.web.app)
  const canvas = document.getElementById('mouse-effect');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  const posArray = new Float32Array(particlesCount * 3);
  const velocities = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 10;
    posArray[i + 1] = (Math.random() - 0.5) * 10;
    posArray[i + 2] = (Math.random() - 0.5) * 10;
    velocities[i] = (Math.random() - 0.5) * 0.02;
    velocities[i + 1] = (Math.random() - 0.5) * 0.02;
    velocities[i + 2] = (Math.random() - 0.5) * 0.02;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const material = new THREE.PointsMaterial({ 
    color: 0xa855f7, 
    size: 0.03, 
    transparent: true, 
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animateParticles() {
    requestAnimationFrame(animateParticles);
    const positions = particlesGeometry.attributes.position.array;
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] += velocities[i] + (mouseX * 5 - positions[i]) * 0.02;
      positions[i + 1] += velocities[i + 1] + (mouseY * 5 - positions[i + 1]) * 0.02;
      positions[i + 2] += velocities[i + 2];
      if (Math.abs(positions[i]) > 5) velocities[i] *= -0.5;
      if (Math.abs(positions[i + 1]) > 5) velocities[i + 1] *= -0.5;
      if (Math.abs(positions[i + 2]) > 5) velocities[i + 2] *= -0.5;
    }
    particlesGeometry.attributes.position.needsUpdate = true;
    particlesMesh.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animateParticles();

  // Scroll Animations
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-text', {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.hero-section', start: 'top 80%' }
  });

  gsap.from('.hero-image', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.hero-section', start: 'top 80%' }
  });

  // Card and Item Animations
  const items = document.querySelectorAll('.timeline-item, .project-card, .post-card, .book-card, .gallery-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.2 });
  items.forEach(item => observer.observe(item));

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});