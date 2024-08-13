const speed = 3; // Updated speed value
const r = gsap.timeline({ defaults: { ease: "power2.inOut", duration: speed } });
const o = gsap.timeline({ defaults: { ease: "power2.inOut", duration: speed } });
const h = gsap.timeline({ defaults: { ease: "power2.inOut", duration: speed } });

const $ticket = document.querySelector(".ticket");

$ticket.addEventListener('mouseenter', () => {
    gsap.to([r, o, h], { timeScale: 0.2, ease: "power2.out", duration: 1.5 }); // Slower transition to stop
});

$ticket.addEventListener('mouseleave', () => {
    gsap.to([r, o, h], { timeScale: 1, ease: "power2.in", duration: 1.5 }); // Smoother transition to start
});

// Spin once, then stop
r.to("#app", {
    "--r": "180deg",
    "--p": "0%",
    duration: speed / 2,
    ease: "power2.in"
});
r.to("#app", {
    "--r": "360deg",
    "--p": "100%",
    duration: speed / 2,
    ease: "power2.out",
    onComplete: () => {
        r.pause(); // Stop after completing the first spin
    }
});

o.to("#app", {
    "--o": 1,
    duration: speed / 2,
    ease: "power2.in"
});
o.to("#app", {
    "--o": 0,
    duration: speed / 2,
    ease: "power2.out",
    onComplete: () => {
        o.pause(); // Stop after the first opacity cycle
    }
});

h.to("#app", {
    "--h": "100%",
    duration: speed / 2,
    ease: "power2.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed / 2,
    ease: "power2.out"
});
h.to("#app", {
    "--h": "0%",
    duration: speed / 2,
    ease: "power2.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed / 2,
    ease: "power2.out",
    onComplete: () => {
        h.pause(); // Stop after completing the height animation
    }
});