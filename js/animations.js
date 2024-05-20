
gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav-wrapper a", {
  duration: 1,
  scrollTrigger: {
    trigger: ".nav-wrapper a",
    start: "top center",
    toggleActions: "play restart restart reverse",
  },
  y: -800,
  stagger: 0.3,
});


gsap.from(".abt-wrapper img", {
  duration: 2,
  x:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".abt-wrapper img",
    start: "center 100%",
    end:"center -10%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".abt-wrapper h1", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 2,
  scrollTrigger: {
    trigger: ".abt-wrapper h1",
    start: "top 90%",
    end:"center 50%",
    scrub: false, 
    markers: false,
    toggleActions: "reverse play reverse reverse",
  },
});

gsap.from(".abt-wrapper p", {
  duration: 1,
  x:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".abt-wrapper p",
    start: "center 100%",
    end:"center 10%",
    scrub: false, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".products .owl-carousel .item", {
  duration: 100,
  y:-100,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".products .owl-carousel .item",
    start: "top 90%",
    end:"center 10%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".gold-legacy", {
  duration: 1,
  x:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".gold-legacy",
    start: "center 100%",
    end:"center 30%",
    scrub: false, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".epitome", {
  duration: 1,
  x:300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".epitome",
    start: "center 100%",
    end:"center 10%",
    scrub: false, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".horizontal_slider", {
  duration: 100,
  y:-100,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".horizontal_slider",
    start: "top 90%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".investment", {
  duration: 1,
  x:300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".investment",
    start: "center 100%",
    end:"center 10%",
    scrub: false, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".letter", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".letter",
    start: "top 50%",
    end:"bottom 20%",
    scrub: false, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

// scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)

// close