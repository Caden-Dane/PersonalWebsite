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

  // Three.js Binary Spiral Effect
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

    // Create textures for 0 and 1
    const canvas2d = document.createElement('canvas');
    canvas2d.width = 128;
    canvas2d.height = 128;
    const context = canvas2d.getContext('2d');
    context.fillStyle = '#a855f7';
    context.font = 'bold 100px monospace';
    const textures = {
      '0': new THREE.CanvasTexture(canvas2d),
      '1': new THREE.CanvasTexture(canvas2d)
    };
    context.fillText('0', 20, 90);
    textures['0'].needsUpdate = true;
    context.clearRect(0, 0, 128, 128);
    context.fillText('1', 20, 90);
    textures['1'].needsUpdate = true;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    const charArray = new Float32Array(particlesCount); // To store 0 or 1
    let time = 0;

    for (let i = 0; i < particlesCount; i++) {
      const angle = (i / particlesCount) * Math.PI * 10;
      const radius = i / particlesCount * 3;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = (Math.random() - 0.5) * 2;
      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
      scaleArray[i] = 1.0;
      charArray[i] = Math.floor(Math.random() * 2); // Randomly 0 or 1
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(scaleArray, 1));
    particlesGeometry.setAttribute('char', new THREE.BufferAttribute(charArray, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        texture0: { value: textures['0'] },
        texture1: { value: textures['1'] }
      },
      vertexShader: `
        attribute float size;
        attribute float char;
        varying float vChar;
        void main() {
          vChar = char;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * 100.0 * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D texture0;
        uniform sampler2D texture1;
        varying float vChar;
        void main() {
          vec4 color;
          if (vChar < 0.5) {
            color = texture2D(texture0, gl_PointCoord);
          } else {
            color = texture2D(texture1, gl_PointCoord);
          }
          if (color.a < 0.5) discard;
          gl_FragColor = color;
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = ((e.clientX / window.innerWidth) * 10) - 5;
      mouseY = -((e.clientY / window.innerHeight) * 10) + 5;
    });

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      mouseX = ((touch.clientX / window.innerWidth) * 10) - 5;
      mouseY = -((touch.clientY / window.innerHeight) * 10) + 5;
    }, { passive: true });

    function animateBinarySpiral() {
      requestAnimationFrame(animateBinarySpiral);
      const positions = particlesGeometry.attributes.position.array;
      const sizes = particlesGeometry.attributes.size.array;
      time += 0.02;

      for (let i = 0; i < particlesCount; i++) {
        const angle = (i / particlesCount) * Math.PI * 10 + time;
        const radius = (i / particlesCount * 3) + (Math.sin(time + i * 0.1) * 0.5);
        positions[i * 3] = radius * Math.cos(angle) + mouseX;
        positions[i * 3 + 1] = radius * Math.sin(angle) + mouseY;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
        sizes[i] = 1 + Math.sin(time + i * 0.1) * 0.3;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.size.needsUpdate = true;
      particlesMesh.rotation.z += 0.005;
      renderer.render(scene, camera);
    }
    animateBinarySpiral();

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
