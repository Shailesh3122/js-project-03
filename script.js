const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1= gsap.timeline();

    t1.from("#nav", {
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

    .to(".boundinglem", {
        y:0,
        stagger:.2,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })

    .from("#herofooter", {
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
};

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px, ${dets.clientY}px)`;
        console.log(dets);
    })
};

circleMouseFollower();
// firstPageAnim();

document.querySelectorAll(".elem1").forEach(function(elem1){
    elem1.addEventListener("mousemove", function(details){
        gsap.to(elem1.querySelector("img"),{
            opacity:1,
            ease:power1,
        });
    });
});
