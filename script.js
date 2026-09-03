document.addEventListener('DOMContentLoaded', function () {

  /* mobile nav toggle */
  var toggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* "Enroll Now" button scrolls to contact since it has no href */
  document.querySelectorAll('[data-open-enroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* image gallery: build dots to match the number of cards, sync on scroll, wire arrows */
  var track = document.getElementById('galleryTrack');
  var dotsWrap = document.getElementById('galleryDots');
  var prevBtn = document.getElementById('galleryPrev');
  var nextBtn = document.getElementById('galleryNext');

  if (track && dotsWrap) {
    var cards = Array.prototype.slice.call(track.children);
    var dots = [];

    cards.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });

    var current = 0;

    function setActive(i) {
      current = Math.max(0, Math.min(i, cards.length - 1));
      dots.forEach(function (d) { d.classList.remove('active'); });
      dots[current].classList.add('active');
    }

    function goTo(i) {
      var idx = (i + cards.length) % cards.length;
      setActive(idx);
      var card = cards[idx];
      track.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); restartAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); restartAutoplay(); });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () { restartAutoplay(); });
    });

    /* keep dots in sync if the user scrolls/swipes the track directly */
    var scrollTimer;
    track.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var closest = 0;
        var closestDist = Infinity;
        cards.forEach(function (card, i) {
          var dist = Math.abs(card.offsetLeft - track.scrollLeft);
          if (dist < closestDist) { closestDist = dist; closest = i; }
        });
        setActive(closest);
      }, 100);
    });

    /* auto-advance like a real carousel; pause while hovered, touched, or dragged */
    var autoplayTimer;
    var AUTOPLAY_DELAY = 4000;

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(function () { goTo(current + 1); }, AUTOPLAY_DELAY);
    }
    function stopAutoplay() {
      clearInterval(autoplayTimer);
    }
    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
    track.addEventListener('touchstart', stopAutoplay, { passive: true });
    track.addEventListener('touchend', startAutoplay);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startAutoplay();
    }
  }

});
