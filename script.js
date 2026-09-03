const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// Mobile navigation
const mobileToggle = $('.mobile-toggle');
const navLinks = $('.nav-links');
mobileToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileToggle.textContent = open ? '×' : '☰';
});
$$('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('mobile-open');
  mobileToggle?.setAttribute('aria-expanded', 'false');
  if (mobileToggle) mobileToggle.textContent = '☰';
}));

// Subtle navbar state on scroll
function setRiverCycles() {
  $$('.river-track').forEach(track => {
    const items = [...track.children].slice(0, 3);
    if (items.length < 3) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cycle = items.reduce((sum, item) => sum + item.getBoundingClientRect().height, 0) + (gap * 3);
    track.style.setProperty('--river-cycle', `${cycle}px`);
  });
}

const navShell = $('.nav-shell');
const updateNav = () => navShell?.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Enrollment modal is intentionally created only when needed.
function openEnrollment() {
  let modal = $('#enrollModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'enrollModal';
    modal.className = 'modal open';
    modal.innerHTML = `
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="enrollTitle">
        <button class="modal-close" type="button" data-close-modal aria-label="Close">×</button>
        <div class="eyebrow">Admissions</div>
        <h2 id="enrollTitle">Start your enquiry</h2>
        <p>Tell us a little about your child and the program you’re interested in.</p>
        <form id="enrollForm">
          <label>Parent / Guardian name<input required name="name" autocomplete="name" /></label>
          <label>Phone<input required name="phone" type="tel" autocomplete="tel" /></label>
          <label>Program<select name="program"><option>Handwriting</option><option>Abacus</option><option>Tuition</option></select></label>
          <label>Message<textarea name="message" rows="3" placeholder="Anything you'd like us to know?"></textarea></label>
          <button class="gold-btn" type="submit">Prepare Enquiry Email <b>›</b></button>
          <div class="form-status" id="formStatus"></div>
        </form>
      </div>`;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    $('[data-close-modal]', modal).addEventListener('click', closeEnrollment);
    $('.modal-close', modal).addEventListener('click', closeEnrollment);
    $('#enrollForm', modal).addEventListener('submit', handleEnquiry);
  } else {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  $('.modal-card input', modal)?.focus();
}
function closeEnrollment() {
  const modal = $('#enrollModal');
  if (!modal) return;
  modal.remove();
  document.body.style.overflow = '';
}
function handleEnquiry(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = data.get('name');
  const phone = data.get('phone');
  const program = data.get('program');
  const message = data.get('message') || 'No additional message.';
  const subject = encodeURIComponent(`BrightPen Academy enquiry — ${program}`);
  const body = encodeURIComponent(`Parent / Guardian: ${name}\nPhone: ${phone}\nProgram: ${program}\n\nMessage:\n${message}`);
  const status = $('#formStatus');
  status.textContent = 'Opening your email app with the enquiry ready to send…';
  window.location.href = `mailto:brightpenacademy@gmail.com?subject=${subject}&body=${body}`;
}
$$('[data-open-enroll]').forEach(btn => btn.addEventListener('click', openEnrollment));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeEnrollment(); });

// All enrolment CTAs that intentionally route to contact first.
$$('a[href="#contact"]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('mobile-open');
    if (mobileToggle) { mobileToggle.setAttribute('aria-expanded', 'false'); mobileToggle.textContent = '☰'; }
  });
});

// Gallery carousel. Kept visually faithful to the supplied reference placeholders.
const track = $('#galleryTrack');
const cards = $$('.gallery-card');
const dots = $('#galleryDots');
let index = 0;
const visible = () => window.innerWidth <= 650 ? 1 : window.innerWidth <= 950 ? 2 : 3;
const maxIndex = () => Math.max(0, cards.length - visible());
function renderDots() {
  if (!dots) return;
  const count = maxIndex() + 1;
  dots.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('button');
    d.className = `dot${i === index ? ' active' : ''}`;
    d.type = 'button';
    d.setAttribute('aria-label', `Go to gallery slide ${i + 1}`);
    d.addEventListener('click', () => { index = i; renderGallery(); });
    dots.appendChild(d);
  }
}
function renderGallery() {
  if (!track || !cards[0]) return;
  const gap = 24;
  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  $$('.dot', dots).forEach((d, i) => d.classList.toggle('active', i === index));
}
$('#galleryNext')?.addEventListener('click', () => { index = index >= maxIndex() ? 0 : index + 1; renderGallery(); });
$('#galleryPrev')?.addEventListener('click', () => { index = index <= 0 ? maxIndex() : index - 1; renderGallery(); });
window.addEventListener('resize', () => { index = Math.min(index, maxIndex()); renderDots(); renderGallery(); setRiverCycles(); });
renderDots();
renderGallery();
setRiverCycles();
