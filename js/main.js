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
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
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

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    function animateParticles() {
      requestAnimationFrame(animateParticles);
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] += (mouseX * 5 - positions[i]) * 0.02;
        positions[i + 1] += (mouseY * 5 - positions[i + 1]) * 0.02;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesMesh.rotation.y += 0.002;
      renderer.render(scene, camera);
    }
    animateParticles();

    // Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  } else {
    console.warn('Three.js or canvas not found:', { canvas: !!canvas, three: typeof THREE });
  }

  // Scroll Animations
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    console.log('Initializing scroll animations');
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

    const items = document.querySelectorAll('.timeline-item, .project-card, .post-card, .book-card, .gallery-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    items.forEach(item => observer.observe(item));
  } else {
    console.warn('GSAP or ScrollTrigger not loaded, skipping scroll animations');
  }
});
