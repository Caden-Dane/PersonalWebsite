document.addEventListener('DOMContentLoaded', () => {
  // Intro Animation
  const intro = document.getElementById('intro');
  const introText = document.getElementById('intro-text');

  if (intro && introText) {
    console.log('Intro elements found, starting animation');
    if (typeof gsap !== 'undefined') {
      try {
        gsap.fromTo(introText, 
          { x: '-100%', opacity: 0 },
          { 
            x: '0%', 
            opacity: 1, 
            duration: 1.5, 
            ease: 'power3.out', 
            onComplete: () => {
              console.log('Intro slide-in complete');
              gsap.to(introText, { 
                x: '100%', 
                opacity: 0, 
                duration: 1.5, 
                ease: 'power3.in', 
                delay: 0.5,
                onComplete: () => {
                  console.log('Intro slide-out complete');
                  gsap.to(intro, { 
                    opacity: 0, 
                    duration: 0.5, 
                    onComplete: () => {
                      console.log('Intro faded out, removing');
                      intro.style.display = 'none';
                      intro.remove();
                    }
                  });
                }
              });
            }
          }
        );
      } catch (e) {
        console.error('GSAP animation error:', e);
        intro.style.display = 'none';
        intro.remove();
      }
    } else {
      console.error('GSAP not loaded, using fallback');
      introText.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease-out';
      introText.style.transform = 'translateX(0)';
      introText.style.opacity = '1';
      setTimeout(() => {
        introText.style.transform = 'translateX(100%)';
        introText.style.opacity = '0';
        setTimeout(() => {
          intro.style.display = 'none';
          intro.remove();
          console.log('Fallback intro removed');
        }, 1500);
      }, 1500);
    }

    setTimeout(() => {
      if (intro && intro.parentNode) {
        console.log('Fallback triggered: removing intro');
        intro.style.display = 'none';
        intro.remove();
      }
    }, 4000);
  } else {
    console.warn('Intro elements not found:', { intro: !!intro, introText: !!introText });
  }

  // Three.js Particle Effect
  const canvas = document.getElementById('mouse-effect');
  if (canvas && typeof THREE !== 'undefined') {
    console.log('Three.js and canvas found, initializing');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    canvas.style.zIndex = 1; // Ensure canvas is visible
    document.body.appendChild(canvas); // Ensure canvas is in DOM
    camera.position.z = 5;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      velocities[i] = (Math.random() - 0.5)
