:root{
  --navy:#1A2A4D;
  --navy-deep:#101A33;
  --gold:#FFC94D;
  --gold-deep:#F5B800;
  --heading:#111318;
  --body:#4B5563;
  --muted:#6B7280;
  --soft:#F3F4F6;
  --card:#FFFFFF;
  --line:#E5E7EB;
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  font-family:var(--font);
  color:var(--heading);
  background:#fff;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
h1,h2,h3{margin:0;}
p{margin:0;}
.section{padding:80px 24px;position:relative;}
@media (min-width:1000px){ .section{padding:100px 40px;} }
.section > *{max-width:1180px;margin-left:auto;margin-right:auto;}

/* shared page glow */
.page-glow{
  position:fixed;inset:0;z-index:-1;pointer-events:none;
  background:radial-gradient(600px circle at 15% 0%, rgba(255,201,77,0.12), transparent 60%);
}

/* ---------- buttons ---------- */
.gold-btn{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--gold-deep);color:#1f2937;
  padding:13px 26px;border-radius:999px;font-size:14.5px;font-weight:700;
  border:none;cursor:pointer;font-family:inherit;
  box-shadow:0 10px 22px -10px rgba(245,184,0,0.6);
  transition:background .2s,transform .2s;
}
.gold-btn:hover{background:#e0a800;transform:translateY(-2px);}
.outline-btn{
  display:inline-flex;align-items:center;gap:6px;
  border:1.5px solid var(--navy);color:var(--navy);
  padding:12px 24px;border-radius:999px;font-size:14.5px;font-weight:600;
  transition:background .2s,color .2s;
}
.outline-btn:hover{background:var(--navy);color:#fff;}
.outline-btn b, .call-arrow{font-weight:700;}

/* ---------- header ---------- */
.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);}
.nav-shell{max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:14px 24px;}
.brand{display:flex;align-items:center;gap:9px;}
.brand img{width:34px;height:34px;border-radius:50%;}
.brand-main{font-size:17px;font-weight:800;color:var(--navy);}
.brand-sub{font-size:12.5px;color:var(--muted);font-weight:500;margin-left:2px;}
.nav-links{display:flex;align-items:center;gap:30px;font-size:14.5px;font-weight:500;color:#1f2937;}
.nav-links a{transition:color .2s;}
.nav-links a:not(.nav-btn):hover{color:var(--navy);}
.nav-btn{padding:9px 20px;font-size:13.5px;}
.mobile-toggle{display:none;background:none;border:1.5px solid var(--navy);border-radius:8px;font-size:18px;padding:6px 10px;cursor:pointer;color:var(--navy);}

/* ---------- decorative blobs ---------- */
.blob{position:absolute;pointer-events:none;border-radius:60% 40% 55% 45% / 50% 55% 45% 50%;}
.blob-left{left:-70px;bottom:-60px;width:320px;height:280px;background:var(--gold);opacity:.5;z-index:0;}
.decor-blob{position:absolute;pointer-events:none;border-radius:38% 62% 55% 45% / 45% 48% 52% 55%;}
.blob-program{right:-40px;top:-10px;width:220px;height:220px;background:radial-gradient(circle at 35% 35%, rgba(255,201,77,0.9), rgba(255,201,77,0.15) 70%);}
.why-blob{position:absolute;right:-60px;bottom:-40px;width:260px;height:220px;background:var(--gold);opacity:.5;border-radius:60% 40% 50% 50% / 50% 55% 45% 50%;pointer-events:none;}
.contact-glow{position:absolute;right:-60px;top:20%;width:300px;height:300px;background:radial-gradient(circle, rgba(26,42,77,0.35), rgba(255,201,77,0.3) 55%, transparent 75%);filter:blur(30px);pointer-events:none;z-index:-1;}

/* ---------- hero ---------- */
.hero{
  display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;
  overflow:hidden;background:linear-gradient(180deg,#FFFBEF 0%,#fff 60%);
  padding-top:60px;padding-bottom:60px;
}
.hero > .hero-copy, .hero > .hero-collage{position:relative;z-index:1;}
.hero-copy h1{font-size:clamp(30px,4.2vw,44px);line-height:1.2;font-weight:800;margin-bottom:18px;}
.hero-copy h1 span{color:var(--gold-deep);}
.hero-copy p{max-width:460px;color:var(--body);font-size:15px;line-height:1.65;margin-bottom:28px;}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px;}

.hero-collage{display:flex;gap:14px;height:460px;}
.river-column{flex:1;overflow:hidden;border-radius:16px;position:relative;}
.river-column::before,.river-column::after{
  content:"";position:absolute;left:0;right:0;height:40px;z-index:2;pointer-events:none;
}
.river-column::before{top:0;background:linear-gradient(#fff,transparent);}
.river-column::after{bottom:0;background:linear-gradient(transparent,#fff);}
.river-track{display:flex;flex-direction:column;gap:14px;}
.river-left .river-track{animation:scrollUp 26s linear infinite;}
.river-right .river-track{animation:scrollDown 30s linear infinite;}
.river-column:hover .river-track{animation-play-state:paused;}
@keyframes scrollUp{from{transform:translateY(0);}to{transform:translateY(-50%);}}
@keyframes scrollDown{from{transform:translateY(-50%);}to{transform:translateY(0);}}
@media (prefers-reduced-motion: reduce){
  .river-left .river-track, .river-right .river-track{animation:none;}
}

.photo-card{border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);border:1px solid #fff;flex:none;}
.photo-card img{width:100%;height:100%;object-fit:cover;display:block;}
.photo-card.river-a{aspect-ratio:4/3;}
.photo-card.river-b{aspect-ratio:3/4;}
.photo-card.river-c{aspect-ratio:1/1;}

/* ---------- about + founder ---------- */
.about-programs{padding-top:70px;}
.about-row{max-width:900px;margin:0 auto 50px;text-align:left;}
.about-row h2{font-size:30px;font-weight:800;color:var(--gold-deep);margin-bottom:14px;}
.about-row p{font-size:15px;line-height:1.7;color:var(--body);}

.founder-card{
  display:grid;grid-template-columns:0.85fr 1.15fr;gap:44px;align-items:center;
  background:var(--soft);border-radius:24px;padding:36px;margin-bottom:80px;
}
.founder-image-wrap{position:relative;}
.founder-image-wrap img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:18px;}
.founder-badge{
  position:absolute;left:16px;bottom:-16px;background:#fff;border-radius:14px;
  padding:10px 16px;box-shadow:0 10px 24px -12px rgba(0,0,0,0.25);
  display:flex;flex-direction:column;
}
.founder-badge span{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--gold-deep);font-weight:700;}
.founder-badge strong{font-size:14.5px;color:var(--heading);}
.eyebrow{font-size:12.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--gold-deep);margin-bottom:10px;display:block;}
.founder-copy h2{font-size:clamp(24px,3vw,30px);font-weight:800;line-height:1.25;margin-bottom:14px;}
.founder-copy h2 span{color:var(--navy);}
.founder-copy p{font-size:14.5px;line-height:1.7;color:var(--body);margin-bottom:20px;}
.founder-points{display:flex;flex-direction:column;gap:8px;}
.founder-points span{font-size:13.5px;font-weight:600;color:var(--heading);}

/* ---------- programs ---------- */
.programs-wrap{position:relative;overflow:hidden;padding-top:10px;}
.center-heading{text-align:center;margin-bottom:44px;position:relative;z-index:1;}
.center-heading h2{font-size:clamp(26px,3.4vw,34px);font-weight:800;margin-bottom:8px;}
.center-heading p{color:var(--body);font-size:15px;}
.program-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.program-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:28px;}
.program-card h3{font-size:21px;font-weight:800;margin-bottom:12px;}
.program-card p{font-size:14px;line-height:1.6;color:var(--body);margin-bottom:20px;}
.card-actions{display:flex;}

/* ---------- why ---------- */
.why{display:grid;grid-template-columns:1.1fr 0.9fr;gap:48px;align-items:center;overflow:hidden;}
.why-copy h2{font-size:clamp(26px,3.4vw,34px);font-weight:800;line-height:1.25;margin-bottom:18px;}
.why-copy h2 span{color:var(--gold-deep);}
.why-copy > p{font-size:15px;line-height:1.65;color:var(--body);margin-bottom:30px;}
.feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;position:relative;z-index:1;}
.feature-icon{
  width:40px;height:40px;border-radius:50%;background:var(--gold);
  display:flex;align-items:center;justify-content:center;
  font-size:18px;color:var(--navy);margin-bottom:12px;
}
.feature h3{font-size:15.5px;font-weight:700;margin-bottom:4px;}
.feature p{font-size:13.5px;color:var(--body);line-height:1.55;}
.why-image-wrap{position:relative;z-index:1;border-radius:20px;overflow:hidden;aspect-ratio:1/1.05;box-shadow:0 2px 14px rgba(0,0,0,0.08);}
.why-image-wrap img{width:100%;height:100%;object-fit:cover;}

/* ---------- gallery ---------- */
.gallery{overflow:hidden;}
.gallery-heading{margin-bottom:36px;}
.gallery-heading h2{font-size:clamp(26px,3.4vw,34px);font-weight:800;margin-bottom:8px;}
.gallery-heading p{color:var(--body);font-size:15px;}
.gallery-viewport{overflow:hidden;}
.gallery-track{display:flex;gap:20px;overflow-x:auto;scroll-behavior:smooth;padding-bottom:6px;scrollbar-width:none;}
.gallery-track::-webkit-scrollbar{display:none;}
.gallery-card{
  flex:none;width:220px;aspect-ratio:1/1;border-radius:16px;background:#fff;
  border:1px solid var(--line);display:flex;align-items:center;justify-content:center;
}
.placeholder{font-size:34px;color:#C7CBD3;}
.gallery-controls{display:flex;align-items:center;justify-content:space-between;margin-top:26px;}
.dots{display:flex;gap:8px;}
.dots .dot{height:8px;width:8px;border-radius:999px;background:var(--line);border:none;cursor:pointer;padding:0;transition:width .2s,background .2s;}
.dots .dot.active{width:24px;background:var(--navy);}
.arrows{display:flex;gap:10px;}
.arrows button{
  width:38px;height:38px;border-radius:50%;background:#fff;border:1px solid var(--line);
  display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;color:var(--heading);
}
.arrows button:hover{background:var(--soft);}

/* ---------- contact ---------- */
.contact{display:grid;grid-template-columns:1.1fr 0.9fr;gap:48px;overflow:hidden;}
.contact-copy h2{font-size:clamp(26px,3.4vw,34px);font-weight:800;margin-bottom:12px;}
.contact-copy > p{max-width:480px;color:var(--body);font-size:15px;line-height:1.6;margin-bottom:36px;}
.contact-list{display:flex;flex-direction:column;gap:24px;margin-bottom:30px;}
.contact-item{position:relative;padding-left:0;}
.contact-icon{width:36px;height:36px;border-radius:50%;background:var(--navy);color:var(--gold);display:flex;align-items:center;justify-content:center;font-size:16px;margin-bottom:8px;}
.contact-item h3{font-size:14px;font-weight:700;margin-bottom:2px;}
.contact-item a, .contact-item p{font-size:14px;color:var(--body);}
.contact-item a:hover{color:var(--gold-deep);}
.contact-actions{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;}
.contact-note{font-size:12.5px;color:var(--muted);}
.contact-visual{position:relative;z-index:1;}
.map-frame{display:block;border-radius:18px;overflow:hidden;border:1px solid var(--line);aspect-ratio:1/0.85;}
.map-frame img{width:100%;height:100%;object-fit:cover;}
.map-caption{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:13.5px;color:var(--body);}
.map-caption a{font-weight:700;color:var(--navy);}
.map-caption a:hover{color:var(--gold-deep);}

/* ---------- footer ---------- */
.footer{padding-top:0;padding-bottom:30px;}
.footer::before{
  content:"";display:block;height:6px;margin:0 -24px 40px;
  background:linear-gradient(90deg,var(--navy) 0%,var(--navy) 55%,var(--gold) 100%);
}
@media (min-width:1000px){ .footer::before{margin:0 -40px 40px;} }
.footer-box{border:1px solid var(--line);border-radius:20px;padding:36px 40px;display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;}
.footer-logo{width:44px;height:44px;border-radius:50%;margin-bottom:16px;}
.footer-contact{font-size:13.5px;color:var(--body);margin-bottom:14px;line-height:1.5;}
.footer-contact strong{display:block;font-size:14px;color:var(--heading);margin-bottom:2px;}
.socials{display:flex;gap:12px;margin-top:6px;}
.socials a{
  width:32px;height:32px;border-radius:50%;background:var(--soft);display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:700;color:var(--heading);transition:background .2s,color .2s;
}
.socials a:hover{background:var(--gold);color:var(--navy);}
.footer-links{display:flex;gap:60px;}
.footer-links a{display:block;font-size:14px;color:#1f2937;margin-bottom:12px;font-weight:500;}
.footer-links a:hover{color:var(--gold-deep);}
.footer-bottom{
  max-width:1180px;margin:22px auto 0;padding:22px 24px 0;
  display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;
  font-size:13px;color:var(--muted);border-top:1px solid var(--line);
}
@media (min-width:1000px){ .footer-bottom{padding:22px 40px 0;} }
.footer-bottom div{display:flex;gap:20px;}
.footer-bottom a:hover{color:var(--navy);}

/* ---------- responsive ---------- */
@media (max-width:960px){
  .hero, .why, .contact, .founder-card{grid-template-columns:1fr;}
  .why-image-wrap{order:-1;}
  .program-grid{grid-template-columns:1fr 1fr;}
  .footer-box{flex-direction:column;}
}
@media (max-width:680px){
  .nav-links{
    position:fixed;top:64px;left:0;right:0;background:#fff;
    flex-direction:column;align-items:flex-start;gap:16px;padding:20px 24px;
    border-bottom:1px solid var(--line);
    transform:translateY(-130%);transition:transform .3s ease;
  }
  .nav-links.open{transform:translateY(0);}
  .mobile-toggle{display:flex;align-items:center;justify-content:center;}
  .hero-collage{height:340px;}
  .program-grid{grid-template-columns:1fr;}
  .feature-grid{grid-template-columns:1fr;}
  .founder-card{padding:24px;}
}
