(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<header>
<img src="/learnveld.jpg" alt="Learnveld Tutors logo">
<h1>Learnveld Tutors</h1>

<nav>
<a href="#services">Services</a>
<a href="#subjects">Subjects</a>
<a href="#contact">Contact</a>
</nav>
</header>
<section class="hero">
<h2>Pass your exams with the help of expert tutors</h2>
<p>
.IGCSE .O-Level .A-level .Matric re-write . Personalised Learning Support

</p>
<a href="https://wa.me/27605233928" target="_blank">
Book a free session
</a>
</section>


<section id="services">
<h2>Our Services</h2>
<div>
<h3>One- on- one Service</h3>
<p>Personalised lessons tailored to suit each student's needs</h3>
</div>



<div>
<h3>Online Learning</h3>
<p>Learn from anywhere with flexible scheduling</p>
</div>

<div>
<h3>Exam Coaching</h3>
<p>Focused strategies to improve perfomance and results fast</p>
</div>
</section>

<section id="why-us">

<h2>Why choose us</h2>

<div>
<h3>Excellent Tutors</h3>
<p>Learn from dedicated, knowledgable and experienced tutors.</p> 
</div>

<div>
<h3>Proven Results</h3>
<p>We focus on helping students improve their perfomances</p>
</div>

<div>
<h3>Flexible Learning Options</h3>
<p>Choose learning options that your schedule and needs.</p>
</div>
</section>

<section id="subjects">
<h2>Subjects</h2>

<div>
<h3>Sciences</h3>
<p>Mathematics, Physics, Biology, Chemistry, Combined science, Computer science</p>
</div>
<div>
<h3>Commercials</h3>
<p>Economics, Accounting, Bussiness studies, Commerce</p>
</div>

<div>
<h3>Arts</h3>
<p>History, English language, English literature, Biblical studies, Geography, Sociology</p>
</div>
</section>

<section id="testimonials">
<h2>What our students say</h2>
<p>I improved from 50% to 80% thanks to Learnveld tutors</p>
</section>

<section id="contact">
  <h2>Contact Us</h2>

  <input
    type="text"
    id="name"
    placeholder="Your Name"
  />

  <textarea
    id="message"
    placeholder="Your Message"
  ></textarea>

  <button id="sendMessageBtn" type="button">
    Send Message
  </button>
</section>

<footer>
  <p>© 2026 Learnveld Tutors</p>
</footer>
`;var e=document.querySelector(`#name`),t=document.querySelector(`#message`),n=document.querySelector(`#sendMessageBtn`);console.log(`send button`),n?.addEventListener(`click`,()=>{console.log(`button clicked`);let n=e?.value,r=t?.value;if(!n||!r){alert(`Please fill in blank spaces`);return}let i=`https://wa.me/27605233928?text=`+encodeURIComponent(`Hi I'm ${n}. ${r}`);window.open(i,`_blank`)});