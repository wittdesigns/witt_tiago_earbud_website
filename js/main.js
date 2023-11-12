(() => {

    gsap.fromTo('#battery_info', {
        y: 35,
        opacity: 0,
      },
      {
      delay: 1, 
      duration: 3, 
      y: 4,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start', 
        amount: 1.5, 
      },
    })



})();
