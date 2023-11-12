(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "EarTips",
      text: "Firm, Smooth and comfortable ear tips, coming in different color variations.",
      image: "images/earbud_eartips.jpg"
    },
    {
      title: "Ears Support",
      text: "Sofisticated, high quality material, giving you confort along hours of use.",
      image: "images/earbud_rubber.jpg"
    },
    {
      title: "Noise Canceling",
      text: "Hear only what you intend to hear, no traffic horns, no constructions noise, just your favorite music.",
      image: "images/earbud_noise.jpg"
    },
    {
      title: "Logo Controls",
      text: "Accept calls, mute audio, simple commands that will make your life easier.",
      image: "images/earbud_logo.jpg"
    },
    {
      title: "Battery Connector",
      text: "A discrete but efficient connector, fast charging, and long battery duration",
      image: "images/earbud_battery.jpg"
    },
  ];

  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
      gsap.set(hotspot, { scale: 1 }); 
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      const hstittle = document.createElement('h2');
      hstittle.textContent = infoBox.title;

      const hstext = document.createElement('p');
      hstext.textContent = infoBox.text;

      const immage = document.createElement('img');
      immage.src = infoBox.image;

      hstext.classList.add("text-hotsp");
      hstittle.classList.add("p-hotsp");

      selected.appendChild(immage);
      selected.appendChild(hstittle);
      selected.appendChild(hstext);
    });
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { autoAlpha: 1, duration: 1 });

    gsap.fromTo(selected.querySelector('.text-hotsp'), {
      y: 35,
      opacity: 0,
    },
      {
        delay: 0.5,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })

    gsap.fromTo(selected.querySelector('.p-hotsp'), {
      y: 35,
      opacity: 0,
    },
      {
        delay: 0.5,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.in',
      });

    gsap.fromTo(selected.querySelector('img'), {
      y: 35,
      opacity: 0,
    },
      {
        delay: 0.5,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.in',
      });


      
    gsap.to(selected, { scale: 1.2, duration: 0.3 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { autoAlpha: 0, duration: 1 });
    gsap.to(selected, { scale: 1, duration: 0.3 }); // Reset scale when hiding info
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
