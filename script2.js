const pics = document.querySelectorAll('.imig');

const activateMagneto = (event) => {
    let boundBox = event.target.getBoundingClientRect();
    const magnetoStrenght = 50;
    const newX = (event.clientX - boundBox.left) / event.target.offsetWidth - 0.5;
    const newY = (event.clientY - boundBox.top) / event.target.offsetHeight - 0.5;

    gsap.to(event.target, {
        duration: 1,
        x: newX * magnetoStrenght,
        y: newY * magnetoStrenght,
        ease: Power4.easeOut
    });
};

const resetMagneto = (event) => {
    gsap.to(event.target, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
};

pics.forEach(pic => {
    pic.addEventListener('mousemove', activateMagneto);
    pic.addEventListener('mouseleave', resetMagneto);
});