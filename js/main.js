document.addEventListener('DOMContentLoaded', () => {
  // Intro Animation
  const intro = document.getElementById('intro');
  const introText = document.getElementById('intro-text');

  if (intro && introText) {
    console.log('Intro elements found, starting animation');
    if (typeof gsap !== 'undefined') {
      try {
        console.log('GSAP detected, initiating animation sequence');
        gsap.fromTo(introText, 
          { x: '-100%', opacity: 0 },
          { 
            x: '0%', 
            opacity: 1, 
            duration: 0.3, 
            ease: 'power3.out', 
            onComplete: () => {
              console.log('Intro slide-in complete');
              gsap.to(introText, { 
                x: '100%', 
                opacity: 0, 
                duration: 0.3, 
                ease: 'power3.in', 
                onComplete: () => {
                  console.log('Intro slide-out complete');
                  gsap.to(intro, { 
                    opacity: 0, 
                    duration: 0.4, 
                    onComplete: () => {
                      console.log('Intro fade-out complete, removing');
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
        console.error('GSAP animation error, forcing intro removal:', e);
        intro.style.display = 'none';
        intro.remove();
      }
    } else {
      console.error('GSAP not loaded, using fallback');
      introText.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      introText.style.transform = 'translateX(0)';
      introText.style.opacity = '1';
      setTimeout(() => {
        introText.style.transform = 'translateX(100%)';
        introText.style.opacity = '0';
        setTimeout(() => {
          intro.style.opacity = '0';
          intro.style.display = 'none';
          intro.remove();
          console.log('Fallback intro removed');
        }, 400);
      }, 300);
    }

    // Fallback to ensure intro is removed after 1 second
    setTimeout(() => {
      if (intro && intro.parentNode) {
        console.log('Timeout fallback triggered: removing intro');
        intro.style.display = 'none';
        intro.remove();
      }
    }, 1000);
  } else {
    console.warn('Intro elements not found:', { intro: !!intro, introText: !!introText });
  }

  // Three.js Wave Grid Effect
  const canvas = document.getElementById('mouse-effect');
  if (canvas && typeof THREE !== 'undefined') {
    console.log('Three.js and canvas found, initializing');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    canvas.style.backgroundColor = 'transparent'; // Ensure no white background
    canvas.style.display = 'block'; // Prevent inline-block spacing
    canvas.style.zIndex = 1; // Ensure canvas is visible
    document.body.appendChild(canvas); // Ensure canvas is in DOM
    camera.position.z = 5;

    const gridSize = 15;
    const particlesCount = gridSize * gridSize;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const index = i * gridSize + j;
        posArray[index * 3] = (i - gridSize / 2) * 0.5;
        posArray[index * 3 + 1] = (j - gridSize / 2) * 0.5;
        posArray[index * 3 + 2] = 0;
        scaleArray[index] = 1.0;
      }
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(scaleArray, 1));
    const material = new THREE.PointsMaterial({ 
      color: 0xa855f7, 
      size: 0.1, 
      transparent: true, 
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Click Effect Particles
    const clickParticlesGeometry = new THREE.BufferGeometry();
    const clickParticlesCount = 50;
    const clickPosArray = new Float32Array(clickParticlesCount * 3);
    const clickScaleArray = new Float32Array(clickParticlesCount);
    const clickOpacityArray = new Float32Array(clickParticlesCount);
    clickParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(clickPosArray, 3));
    clickParticlesGeometry.setAttribute('size', new THREE.BufferAttribute(clickScaleArray, 1));
    clickParticlesGeometry.setAttribute('opacity', new THREE.BufferAttribute(clickOpacityArray, 1));
    const clickMaterial = new THREE.PointsMaterial({ 
      color: 0xa855f7, 
      size: 0.2, 
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: false
    });
    const clickParticlesMesh = new THREE.Points(clickParticlesGeometry, clickMaterial);
    scene.add(clickParticlesMesh);
    let clickParticles = [];

    let mouseX = 0, mouseY = 0;
    let time = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = ((e.clientX / window.innerWidth) * 10) - 5;
      mouseY = -((e.clientY / window.innerHeight) * 10) + 5;
    });

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      mouseX = ((touch.clientX / window.innerWidth) * 10) - 5;
      mouseY = -((touch.clientY / window.innerHeight) * 10) + 5;
    }, { passive: true });

    document.addEventListener('click', (e) => {
      const x = ((e.clientX / window.innerWidth) * 10) - 5;
      const y = -((e.clientY / window.innerHeight) * 10) + 5;
      clickParticles = [];
      for (let i = 0; i < clickParticlesCount; i++) {
        clickParticles.push({
          x: x,
          y: y,
          z: 0,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.5,
          life: 1.0,
          maxLife: Math.random() * 1.5 + 0.5
        });
      }
    });

    function animateWave() {
      requestAnimationFrame(animateWave);
      const positions = particlesGeometry.attributes.position.array;
      const sizes = particlesGeometry.attributes.size.array;
      time += 0.03;

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const index = i * gridSize + j;
          const x = (i - gridSize / 2) * 0.5 + mouseX;
          const y = (j - gridSize / 2) * 0.5 + mouseY;
          const wave = Math.sin(time + x + y) * 0.3;
          positions[index * 3] = x;
          positions[index * 3 + 1] = y;
          positions[index * 3 + 2] = wave;
          sizes[index] = 1 + Math.abs(wave) * 2;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.size.needsUpdate = true;

      // Update and render click particles
      const clickPositions = clickParticlesGeometry.attributes.position.array;
      const clickSizes = clickParticlesGeometry.attributes.size.array;
      const clickOpacities = clickParticlesGeometry.attributes.opacity.array;

      for (let i = 0; i < clickParticlesCount; i++) {
        if (clickParticles[i]) {
          clickParticles[i].life -= 0.02;
          if (clickParticles[i].life <= 0) {
            clickParticles[i] = null;
            clickPositions[i * 3] = 0;
            clickPositions[i * 3 + 1] = 0;
            clickPositions[i * 3 + 2] = 0;
            clickSizes[i] = 0;
            clickOpacities[i] = 0;
          } else {
            clickParticles[i].x += clickParticles[i].vx;
            clickParticles[i].y += clickParticles[i].vy;
            clickParticles[i].z += clickParticles[i].vz;
            const scale = (clickParticles[i].life / clickParticles[i].maxLife) * 2;
            clickPositions[i * 3] = clickParticles[i].x;
            clickPositions[i * 3 + 1] = clickParticles[i].y;
            clickPositions[i * 3 + 2] = clickParticles[i].z;
            clickSizes[i] = scale;
            clickOpacities[i] = clickParticles[i].life;
          }
        }
      }
      clickParticlesGeometry.attributes.position.needsUpdate = true;
      clickParticlesGeometry.attributes.size.needsUpdate = true;
      clickParticlesGeometry.attributes.opacity.needsUpdate = true;
      clickMaterial.opacity = 0.8;

      renderer.render(scene, camera);
    }
    animateWave();

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

    gsap.from('.project-card, .thought-preview', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-section, .thoughts-section', start: 'top 80%' }
    });

    const items = document.querySelectorAll('.timeline-item, .project-card, .post-card, .book-card, .gallery-item, .thought-preview');
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
