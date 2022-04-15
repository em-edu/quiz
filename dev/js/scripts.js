import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Ethan"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline

const mainTL = gsap.timeline();

mainTL
//part2a
.from(".graph", {duration:2, alpha:0})
//part1a
.from(".red", {duration:1, x:0, ease:"bounce.out"},"p1")
.from(".blue", {duration:1, x:350, ease:"bounce.out"},"p1")
//part1b
.to(".red", {duration:2, y:0, ease:"power3.out"},"p1b+=1")
.to(".blue", {duration:2, y:300, ease:"power3.out"},"p1b+=1")
//part3
.to(".red", {duration:1, rotation:360, ease:"back.out"},"p3-=1")
.to(".blue", {duration:1, rotation:360, ease:"back.out"},"p3-=1")
//part2b
.from(".green", {duration:mainTL.duration(), scaleX:0, transformOrigin:"0 0", ease:"none"},0)

;


//separate tween
// gsap.from(".green", {duration:mainTL.duration(), scaleX:0, transformOrigin:"0 0", ease:"none"});

