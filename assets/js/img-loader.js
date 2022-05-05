gsap.utils.toArray(".show-prj").forEach((el) => {
  
    const image = el.querySelector('show-prj__sticky-img'),
          setX = gsap.quickSetter(image, "x", "px"),
          setY = gsap.quickSetter(image, "y", "px"),
          align = e => {
            const top = el.getBoundingClientRect().top;
            setX(e.clientX );
            setY(e.clientY - top);
          },
          startFollow = () => document.addEventListener("mousemove", align),
          stopFollow = () => document.removeEventListener("mousemove", align),
          fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
    
    el.addEventListener('mouseenter', (e) => {
      fade.play();
      startFollow();
      align(e);
    });
    
    el.addEventListener('mouseleave', () => fade.reverse());
   
  });