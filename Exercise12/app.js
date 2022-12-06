const tl = gsap.timeline({defaults: {duration: 1}})

tl.fromTo('.caption', {x: -100, opacity: 0}, {x: 0, opacity: 1})
tl.fromTo('.carousel-inner', {x: 100, opacity: 0}, {x: 0, opacity: 1},'<')
tl.fromTo('.carousel-inner', {y: -20}, {y: 0, yoyo: true, repeat: -1},'<')