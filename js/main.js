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

  // Three.js Text Effect
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

    let textMesh = null;
    let fontLoaded = false;

    // Dynamically load FontLoader
    const fontLoaderScript = document.createElement('script');
    fontLoaderScript.src = 'https://unpkg.com/three@0.134.0/examples/jsm/loaders/FontLoader.js';
    fontLoaderScript.onload = () => {
      console.log('FontLoader loaded');
      const fontLoader = new THREE.FontLoader();
      fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
        console.log('Font loaded successfully');
        const text = '@cadenice';
        const textGeometry = new THREE.TextGeometry(text, {
          font: font,
          size: 0.5,
          height: 0.1,
          curveSegments: 12,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.8 });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.center();
        scene.add(textMesh);
        fontLoaded = true;
        console.log('Text mesh added to scene');
      }, undefined, (error) => {
        console.error('Font loading failed, using fallback geometry:', error);
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.8 });
        textMesh = new THREE.Mesh(geometry, material);
        scene.add(textMesh);
        console.log('Fallback sphere added to scene');
      });
    };
    fontLoaderScript.onerror = () => console.error('Failed to load FontLoader');
    document.head.appendChild(fontLoaderScript);

    let targetX = 0, targetY = 0;
    let defaultX = 0, defaultY = 0;
    const speed = 0.02;
    let time = 0;

    document.addEventListener('mousemove', (e) => {
      targetX = (e.clientX / window.innerWidth) * 10 - 5;
      targetY = -(e.clientY / window.innerHeight) * 10 + 2.5;
    });

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      targetX = (touch.clientX / window.innerWidth) * 10 - 5;
      targetY = -(touch.clientY / window.innerHeight) * 10 + 2.5;
    }, { passive: true });

    function animateText() {
      requestAnimationFrame(animateText);
      if (textMesh) {
        if (Math.abs(targetX - textMesh.position.x) > 0.1 || Math.abs(targetY - textMesh.position.y) > 0.1) {
          textMesh.position.x += (targetX - textMesh.position.x) * speed;
          textMesh.position.y += (targetY - textMesh.position.y) * speed;
        } else {
          time += 0.02;
          defaultX = Math.sin(time) * 2;
          defaultY = Math.cos(time) * 2;
          textMesh.position.x += (defaultX - textMesh.position.x) * speed * 0.5;
          textMesh.position.y += (defaultY - textMesh.position.y) * speed * 0.5;
        }
      }
      renderer.render(scene, camera);
    }
    animateText();

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
