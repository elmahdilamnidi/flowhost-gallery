/* 
   gallery.js  -  The Flowhost
   Fichier wa7ed li kay3mr l'page kamla: rooms, hero (slideshow), reviews,
   w l'7sab dyal l'prix + l'message dyal WhatsApp.
   Li khassk tbdl ghir f partie 1 ("EDIT HERE"). Bqiya mn l'code ma tmssha.
    */


/* 1) EDIT HERE : les données */

const WHATSAPP = "212609990062";   // raqm dyalek m3a l'indicatif, bla "+": l'messages dyal clients kaywslo lih
const CUR = "MAD";                 // devise li kaybano m3a l'prix ("€" wla "MAD ")

// Kol section = bloc f l'page. Kol item fih:
//   price: raqm, wla null => kayban "Ask us"
//   unit : l'wa7da li kaybano m3a l'prix ("/ night", "/ meal", "/ person"), kat3ti 3la section kamla w t9der tbddlha f item
//   img  : tswira wa7da  img:"images/rooms/x.webp"   wla bzaf (kaytswipaw)  img:["a.webp","b.webp"]
//   beds : (ghir l'dorm) 3dad l'beds li kaynin f l'room. Card wa7da, w l'client kaykhtar chhal men bed (1 .. beds). Prix = prix dyal bed wa7d.
const SECTIONS = [
 // perNight:true => l'prix kaytdrb f 3dad l-layali. Bqiya (food/acts/trips) kaytdrb f 3dad guests (wla l'quantity li khtar l'client).
 {id:"rooms", eyebrow:"Where you sleep", title:"Choose your room", perNight:true, unit:"/ night", pick:true, items:[
  {name:"BOHO", tag:"Private room", desc:"A cozy retreat with a comfortable queen bed, natural décor and a relaxing atmosphere. Ideal for couples, friends or solo travelers. Enjoy the shared workspace, rooftop terrace and lounge, close to Tamraght’s surf, beaches and local culture.", price:340, img:["images/rooms/boho.webp","images/rooms/boho1.webp","images/rooms/boho2.webp"]},
  {name:"SUNNY", tag:"Private room", desc:"A cozy private double room with a king size bed, inside a welcoming surf house in the heart of Tamraght. Comfort and authenticity for travelers who want to feel at home while exploring Morocco’s surf and culture.", price:350, img:["images/rooms/sunny.webp","images/rooms/sunny1.webp","images/rooms/sunny4.webp","images/rooms/sunny3.webp"]},
  {name:"L9OUBA SUITE", tag:"Private apartment", desc:"A private apartment inside a welcoming surf house in the heart of Tamraght. A mix of comfort and authenticity for travelers who want to feel at home while exploring Morocco’s surf and culture.", price:500, img:["images/rooms/l9ouba1.webp","images/rooms/l9ouba2.webp","images/rooms/l9ouba3.webp","images/rooms/l9ouba4.webp","images/rooms/l9ouba5.webp","images/rooms/l9ouba6.webp","images/rooms/l9ouba7.webp"]},
  {name:"MOUJA", tag:"Private room", desc:"A private room with a king double bed, natural décor and a calm atmosphere, perfect for friends or couples. Enjoy the shared workspace, full kitchen, rooftop terrace and lounge, the ideal balance of rest and community after a day at the beach.", price:350, img:["images/rooms/mouja.webp","images/rooms/mouja1.webp","images/rooms/mouja2.webp","images/rooms/mouja4.webp"]},
  {name:"ENSUITE", tag:"Private room", desc:"A unique private room on the open gallery floor of our surf and skate-inspired art space, with a private shower in the room and your private bathroom next door. Shared workspace, yoga space, kitchen, two living areas, a bar terrace and a rooftop overlooking Devil’s Rock and the Atlantic.", price:450, img:["images/rooms/ensuite.webp","images/rooms/ensuite1.webp","images/rooms/ensuite2.webp"]},
  {name:"BABDAR", tag:"Private room", desc:"A peaceful private double room with a queen size bed, ideal for the whole family. Inside a welcoming surf house in the heart of Tamraght, for travelers who want to feel at home while exploring Morocco’s surf and culture.", price:340, img:["images/rooms/babdar.webp","images/rooms/babdar2.webp","images/rooms/babdar3.webp"]},
  {name:"FLOKA", tag:"Dormitory · 4 beds", desc:"A cozy shared dorm with 4 wooden boat-inspired bunk beds, adding a playful, authentic touch to your stay at The FlowHost. Book one bed or more.", price:160, beds:4, unit:"/ bed / night", img:["images/rooms/floka.webp"]},
  ]},
 {id:"food", eyebrow:"Eat at the house", title:"Moroccan Traditional Food", unit:"/ meal", pick:true, items:[
  {name:"Moroccan breakfast", desc:"A Moroccan breakfast served at the house to start your day.", price:50, img:["images/rooms/food1.webp"]},
  {name:"Moroccan lunch", desc:"A home-style Moroccan lunch, served at the house.", price:80,img:["images/rooms/food2.webp"]},
  {name:"Moroccan dinner", desc:"A Moroccan dinner at the house after a day on the board or in the water.", price:80,img:["images/rooms/food3.webp"]}
]},
 {id:"acts", eyebrow:"Ride & move", title:"Activities", unit:"/ person", pick:true, items:[
  
  {name:"Surf lesson",tag:"Equipment · Transport · Coach", desc:"Learn to surf or improve your level on the Tamraght coast with a local surf coach. Surfboard, wetsuit and transport to the best spot of the day are included.", price:400, img:["images/activities/surf.webp"]},
  {name:"Skateboarding lesson",tag:"Transport · Coach", desc:"Skate sessions adapted to your level with a local skate coach, from your first push to new tricks. Transport to the spot is included.", price:350,img:["images/activities/skate.webp"]},
  {name:"Paradise Valley",tag:"Paradise Valley", desc:"Discover Paradise Valley, a green oasis tucked between the rocky mountains of the Anti-Atlas. With a local guide, you'll walk along the river, find natural pools, and swim or simply relax in the shade of palm trees. Transport from the house and the local guide are included.", price:450,img:["images/activities/paradise1.webp","images/activities/paradise2.webp"]},
  {name:"Tamri dunes", tag:"Tamri dunes",desc:"Head north along the Atlantic coast to the Tamri dunes, where golden sand meets the ocean. With a local guide, you'll walk the dunes, enjoy the views over the water, and see a quieter side of the Moroccan coast. Transport from the house and the local guide are included.", price:450,img:["images/activities/tamri.webp"]}
]},
 /*{id:"trips", eyebrow:"Optional add-ons", title:"Want more Morocco?", unit:"/ person", pick:true, items:[
  {name:"Surf day", desc:"Moroccan surf culture with the crew. Coaching, equipment and transport.", price:null},
  {name:"Paradise Valley", desc:"Anti-Atlas landscapes: relax, swim and see another side of Morocco.", price:null},
  {name:"Tamri / Timlalin dunes", desc:"Head north along the Atlantic coast to dunes overlooking the ocean.", price:null}]},*/
 // band:true => section "included" (bla prix w bla bouton Add), kat banh f bloc dark. Tqder t7ot img 7ta lhom.
 {id:"spaces", eyebrow:"Shared at the house", title:"Included for every guest", band:true, items:[
  {name:"Rooftop terrace & bar", desc:"Ocean views, shared with the other guests."},
  {name:"Shared kitchen", desc:"Cook your own meals."},
  {name:"Shared work space", desc:"A shared space to work, with wifi."},
  {name:"Shared bathrooms", desc:"Shared bathrooms with hot showers."},
  {name:"Free parking", desc:"Free parking at the house."},
  {name:"Beach access", desc:"Easy access to the beach."}]}
];

// Tsawer dyal l'hero (slideshow). Smiyat khassom ykounou b nafs l'7rouf dyal l'fichiers (GitHub Pages case-sensitive).
// Ila khawya => kayban logo placeholder.
const SLIDES = ["images/hero/workspace.webp", "images/hero/rooftop.webp", "images/hero/surf.webp","images/hero/hero3.webp", "images/hero/hero5.webp"];

// Reviews 
const REVIEW_URL = "https://g.page/r/Cb5Umk90vp7QEBM/review";   // lien "kteb review" f Google (bouton "Review on Google")
const TRIPADVISOR_REVIEW_URL = "https://www.tripadvisor.com/UserReviewEdit-g1452345-d34155814-The_FlowHost-Tamraght_Agadir_Souss_Massa.html";   // lien "Write a review" dyal Tripadvisor. Khawi => bouton Tripadvisor ma kaybanch
const GOOGLE_URL = "https://share.google/855z1RY0fMZCoo1r3";               // page dyal l'business f Google (optional): ila 7ottih, card "5.0 Google" tweli clickable
const TRIPADVISOR_URL = "https://www.tripadvisor.com/Hotel_Review-g1452345-d34155814-Reviews-The_FlowHost-Tamraght_Agadir_Souss_Massa.html#REVIEWS";          // page dyalek f Tripadvisor (optional): nafs l'haja l card dyal Tripadvisor
// L'ar9am li katban fo9 l'reviews. Ma kaytbddlouch wa7dhom: bddlhom nta mn 7in l 7in.
const RATINGS = [
  {source:"Google", score:"5.0", count:98, url:GOOGLE_URL},
  {source:"Tripadvisor", score:"5.0", count:11, url:TRIPADVISOR_URL}
];
// Reviews 7a9i9iyin ghir. source: "Google" wla "Tripadvisor". when w title w note optional.
// note: kat banh sghira lte7t l'texte (ex: "Translated from German").
const REVIEWS = [
  {"name": "Imad E.", "stars": 5, "text": "what an amazing stay!! 😍 The vibe of this hostel was incredible from the moment I arrived. Everyone was so friendly and welcoming, and I met so many amazing people that I’ll definitely remember. It really felt like a little community rather than just a place to sleep. And the rooftop… WOW! Such an amazing spot to chill, meet people, and enjoy the atmosphere", "when": "September 2026", "source": "Google"},
  {"name": "Jana H.", "stars": 5, "text": "We stayed in an apartment at FlowHost for two nights. From the very beginning, we felt extremely comfortable and very well looked after. The host was always available for any questions or concerns. Everything was clean and beautifully designed. We highly recommend it! 😌", "when": "September 2026", "source": "Google", "note": "Translated from German"},
  {"name": "Jenny S.", "stars": 5, "text": "I came to the hostel to get a tattoo...and I was thrilled! The hostel is such a wonderful place, so lovingly and creatively designed. I immediately felt at home. Everything was clean and tidy, including, of course, the tattoo area. Pi Nousse was super friendly and very considerate. While he concentrated on tattooing me, I could relax and look out the skylight. It was such a great experience getting my tattoo in this beautiful place! Thank you, thank you, thank you! I love my new tattoo and I will definitely recommend the hostel!", "when": "September 2026", "source": "Google", "note": "Translated from German"},
  {"name": "Josep M.", "stars": 5, "text": "We were treated very well, the people in Tamraght are very welcoming, and you’re close to pretty much every nice place to visit. Amazing staff & you can make friends easily", "source": "Google"},
  {"name": "Aaron C.", "stars": 5, "text": "My stay was phenomenal. Firstly the place looks incredible; it’s really clear that the owner, Bahja, is an architect and a very good one! Such a homely and cool feel.\n\nMy brother and I stayed 9 nights and felt at home with every single one. Chilling on the rooftop was so addicting! Bahja will help you with anything you need; taxis, advice on places to visit, places to eat, anything you can think of! My brother and I are very grateful to The Flow Host family.\n\nWe will definitely be back soon :)", "source": "Google"},
  {"name": "abijahk2026", "stars": 5, "title": "Perfect stay", "text": "The flow host, is such a safe space, the people are so nice and the hospitality is beyond. The hostel is always clean, has a nice big rooftop and the cook makes the best traditional food. Really it is the best stay in tamraght.!!", "when": "September 2026", "source": "Tripadvisor"},
  {"name": "chaekokee", "stars": 5, "title": "Awesome hostel", "text": "Thanks to FlowHost for having me! The location is amazing, with a beautiful ocean view. The host is incredibly friendly and welcoming. The room was very clean, comfortable, and well maintained. I highly recommend this place to anyone looking for a chill surf and skate vibe.", "when": "August 2026", "source": "Tripadvisor"},
  {"name": "vinixg2026", "stars": 5, "title": "Loved my stay at The FlowHost 🫶🏼", "text": "Absolutely loved my stay at FlowHost!\nFrom the moment I arrived, I felt welcomed and at home. The atmosphere is amazing, the place is clean and comfortable, and the people there make the whole experience even better.\nTamraght itself is beautiful, and Flow Hostel is the perfect place to stay if you want to meet great people, relax, and enjoy the real Moroccan surf-town vibe. I honestly didn’t want to leave!\nIf you’re coming to Tamraght, don’t hesitate stay at FlowHost. You won’t regret it 🙌🏼", "when": "October 2026", "source": "Tripadvisor"}
];


/* 2) HERO : slideshow dyal tsawer */

const slides = document.getElementById("slides"), hero = slides.parentElement;   // slides = l'bloc li fih tsawer, hero = l'section kamla
let cur = 0;                                                                      // numéro dyal tswira li dayra daba (0 = lowla)

// Scroll b3d bla animation (bach ma ykounch "lag")
function jump(i) {
  slides.style.scrollBehavior = "auto";
  slides.scrollLeft = i * slides.clientWidth;
  slides.style.scrollBehavior = "";                                               // nrj3o l smooth (mn CSS)
}
// Mnin ytbddl 7jm l'screen (laptop <-> phone): nrj3o l tswira li dayra, sinon kayb9a scroll f nuss tswira (hadchi kan howa l'glitch)
function onResize() { jump(cur); }
addEventListener("resize", onResize);

// Bniw l'slideshow daba: ma ntsennawch tsawer kamlin bach tban l'hero.
buildHero(SLIDES);

function buildHero(srcs) {
  // Tsawer (wla 3 placeholders b logo ila ma kayn 7ta tswira)
  const nodes = srcs.length
    ? srcs.map((s, i) => {
        const im = document.createElement("img");
        im.src = s; im.alt = "The Flowhost"; im.decoding = "async";
        im.loading = i === 0 ? "eager" : "lazy";
        im.fetchPriority = i === 0 ? "high" : "low";
        return im;
      })
    : [0, 1, 2].map(i => { const d = document.createElement("div"); d.className = "sl"; d.style.background = ["#967965","#7a604f","#6b5444"][i]; d.innerHTML = "<i></i>"; return d; });
  nodes.forEach(x => slides.appendChild(x));
  const n = nodes.length;
  if (n < 2) return;

  slides.appendChild(nodes[0].cloneNode(true));   // nsskha dyal lowla f l'akhir => mnin nwslo lha kan9fzo l lowla bla animation twila

  // Dots
  const dots = document.createElement("div"); dots.className = "dots";
  for (let i = 0; i < n; i++) {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Photo " + (i + 1));                             // l'lecteurs d'écran
    b.onclick = () => slides.scrollTo({ left: i * slides.clientWidth });          // klik 3la dot => dkhl l tswira
    dots.appendChild(b);
  }
  hero.appendChild(dots);

  // Kol mra y3awd scroll: n7ddo tswira li dayra + dot "on" + toul l'hero. B3d ma yw9f scroll, ila wsl l nsskha => n9fzo l lowla
  let endT;
  const mark = () => {
    cur = Math.round(slides.scrollLeft / slides.clientWidth) % n;
    [...dots.children].forEach((d, k) => d.classList.toggle("on", k === cur));
    clearTimeout(endT);
    endT = setTimeout(() => { if (Math.round(slides.scrollLeft / slides.clientWidth) >= n) jump(0); }, 140);
  };
  slides.addEventListener("scroll", mark); mark();

  // Autoplay: dima l'qudam (mnin ywsl l nsskha kayt9fz l lowla w ma kayban walo)
  const next = () => slides.scrollBy({ left: slides.clientWidth });
  let t = setInterval(next, 4500);
  slides.onmouseenter = () => clearInterval(t);                                   // l'souris foqha => 7bs autoplay
  slides.onmouseleave = () => t = setInterval(next, 4500);
  slides.ontouchstart = () => clearInterval(t);                                   // l'client lmess => 7bs autoplay
}


/* 3) REVIEWS : slider (Google + Tripadvisor)  */

(function () {
  const el = document.getElementById("reviews");
  el.classList.add("sec", "rv");                                               // nafs l'3ard w l'padding dyal sections khrin

  // escape: bach ay texte dyal review (b < wla &) ma ykhrb l'HTML
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

  // Les boutons "Review on ...": ghir li 3ndhom lien kaybano (Google dima, Tripadvisor ila 7ttiti lien)
  const write = [["Google", REVIEW_URL, "#4285F4"], ["Tripadvisor", TRIPADVISOR_REVIEW_URL, "#00AA6C"]]
    .filter(x => x[1])
    .map(([n,u,c]) => `<a class="btn rv-btn" href="${esc(u)}" target="_blank" rel="noopener"><i class="rv-dot" style="background:${c}"></i>Review on ${n}</a>`)
    .join("");

  // Ila ma kaynin 7ta review: kan3rdo ghir "Stayed with us?" + les boutons (wla n5bbio l'section ila ma kayn 7ta lien)
  if (!REVIEWS.length) {
    if (!write) { el.style.display = "none"; return; }
    el.innerHTML = `<p class="eyebrow">What guests say</p><div class="rv-head"><div><h2>Stayed with us?</h2><p class="rv-sub">Tell other travelers about your stay.</p></div><div class="rv-links">${write}</div></div>`;
    return;
  }

  // Cards dyal tqyim (5.0 ★ Google · 98 reviews ...). Clickable ghir ila kayn lien.
  const rate = RATINGS.filter(r => r.count > 0).map(r => {
    const inner = `<b>${esc(r.score)} <i>★</i></b><span>${esc(r.source)} · ${r.count} reviews</span>`;
    return r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${inner}</a>` : `<div>${inner}</div>`;
  }).join("");

  // Card wa7da dyal review: nojoum, titre (Tripadvisor), texte, note, smiya + tarikh + source
  const card = r => `<div class="rv-card"><div class="st" aria-label="${r.stars} stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>${r.title ? `<h3 class="rv-title">${esc(r.title)}</h3>` : ""}<p class="clamp">${esc(r.text)}</p>${r.note ? `<p class="rv-note">${esc(r.note)}</p>` : ""}<div class="rv-by"><span><b>${esc(r.name)}</b>${r.when ? " · " + esc(r.when) : ""}</span><span class="rv-g">${esc(r.source || "Google")}</span></div></div>`;

  // Slider: saf wa7d dyal cards (scroll horizontal). tabindex=0 => y9der ytsrf b clavier (fle9ch)
  const slider = `<div class="rv-slider"><div class="rv-track" tabindex="0" role="region" aria-label="Guest reviews">${REVIEWS.map(card).join("")}</div></div>`;

  el.innerHTML = `<p class="eyebrow">What guests say</p><div class="rv-head"><h2>Guest reviews</h2><div class="rv-links">${write}</div></div>${rate ? `<div class="rv-rate">${rate}</div>` : ""}${slider}`;

  // "Read more": ghir l'reviews twal (li t9ta3o f 6 stor) kaytzad lihom bouton ybsto l'texte
  el.querySelectorAll(".rv-card").forEach(c => {
    const p = c.querySelector("p.clamp");
    if (p && p.scrollHeight > p.clientHeight + 2) {
      const b = document.createElement("button"); b.type = "button"; b.className = "rv-more"; b.textContent = "Read more";
      b.onclick = () => { p.classList.toggle("clamp"); b.textContent = p.classList.contains("clamp") ? "Read more" : "Show less"; };
      p.after(b);
    }
  });

  // Jrr b l'souris (laptop). F telephone/trackpad l'scroll horizontal kaykhdem bohdo, donc hna ghir l'souris.
  const tr = el.querySelector(".rv-track");
  let down = false, sx = 0, sl = 0;
  tr.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = tr.scrollLeft; tr.classList.add("drag"); });
  addEventListener("pointermove", e => { if (down) tr.scrollLeft = sl - (e.clientX - sx); });
  addEventListener("pointerup", () => { down = false; tr.classList.remove("drag"); });   // kan7ayd .drag => snap y3awd ykhdem
})();


/*  4) BOOKING : choix dyal client + prix + WhatsApp  */

const picked = new Map();                                   // li khtar l'client: clé "section:index" => quantity (null = nfs 3dad guests, wla 1 bed f l'dorm)
const app = document.getElementById("app");                 // blasa fin kan3mro cards dyal rooms/food/acts...
const $ = id => document.getElementById(id);               // raccourci
const fmt = n => CUR + n;                                   // 700 => "€700"

// Tsawer dyal card: 0 => placeholder (logo) | 1 => tswira | bzaf => swipe + noqat (dots)
// loading=lazy => ma kat7mlch 7ta ykon qrib mn l'screen
const photos = (it, ph) => {
  const p = [].concat(it.img || []);
  if (!p.length) return ph ? '<div class="ph"><i></i></div>' : "";
  const imgs = p.map(x => `<img src="${x}" alt="${it.name}${it.tag ? " - " + it.tag : ""}" loading="lazy" decoding="async">`).join("");
  if (p.length === 1) return `<div class="ph">${imgs}</div>`;
  return `<div class="phw"><div class="ph multi">${imgs}</div>` +
    `<div class="ph-dots">${p.map((_, i) => `<i${i ? "" : ' class="on"'}></i>`).join("")}</div></div>`;   // noqat: l'client yfhm blli kayn aktr mn tswira
};

// Les infos li ktb l'client f formulaire "When are you coming?"
const val = () => ({
  name: $("gname").value.trim(),
  cin: $("cin").value,
  cout: $("cout").value,
  guests: Math.max(1, Math.min(30, +$("guests").value || 1))     // bin 1 w 30
});
// 3dad l-layali bin check-in w check-out (0 ila ma kaynch dates s7a7)
const nightsOf = v => { if (!v.cin || !v.cout) return 0; const n = Math.round((new Date(v.cout) - new Date(v.cin)) / 864e5); return n > 0 ? n : 0; };

// L'partie l'ta7tania dyal card (texte, prix, bouton Add, quantity). Mfrda 3la tswira
// bach mnin client ydghet "Add" tsawer ma t3awdch tbni (swipe position kayb9a)
function bdHTML(s, it, i) {
  const v = val(), k = s.id + ":" + i, on = picked.has(k), u = it.unit || s.unit;
  const pr = it.price == null
    ? `<span class="price">Ask us</span>`
    : `<span class="price">${fmt(it.price)} <small>${u}</small></span>`;
  // Quantity (− +): items li mashi rooms w li t7ddo, w l'dorm (it.beds) = 3dad l'beds (min 1, max it.beds)
  const qty = on && (!s.perNight || it.beds)
    ? `<div class="qty"><span>${it.beds ? "Beds" : "Quantity"}</span><button data-k="${k}" data-q="-1" aria-label="Less">&minus;</button><b>${picked.get(k) ?? (it.beds ? 1 : v.guests)}</b><button data-k="${k}" data-q="1" aria-label="More">+</button></div>`
    : "";
  return `<div class="bd">${it.tag ? `<span class="tag">${it.tag}</span>` : ""}<h3>${it.name}</h3><p>${it.desc}</p>${qty}<div class="row">${pr}<button class="add" data-k="${k}" aria-pressed="${on}">${on ? "Remove" : "Add"}</button></div></div>`;
}

// Hint: mnin card b bzaf d tsawer tban f l'screen, tswira kat7rk chwiya (nudge) w t3awd, bach l'client yfhm blli y9dr yswipi.
// Mra wa7da l kol card. Ma kaykhdemch ila l'client 3ndo "reduce motion".
const nudged = new Set();
const io = ("IntersectionObserver" in window) && !matchMedia("(prefers-reduced-motion: reduce)").matches
  ? new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const key = en.target.firstElementChild.getAttribute("src");
      io.unobserve(en.target);
      if (nudged.has(key)) return;
      nudged.add(key); en.target.classList.add("nudge");
    }), { threshold: .7 })
  : null;

// Kol mra l'client yswipi tswira: n7ddo l'dot li "on". (scroll ma kaybubblich => capture)
app.addEventListener("scroll", e => {
  const ph = e.target; if (!ph.classList || !ph.classList.contains("multi")) return;
  const i = Math.round(ph.scrollLeft / ph.clientWidth);
  [...ph.closest(".phw").querySelectorAll(".ph-dots i")].forEach((d, k) => d.classList.toggle("on", k === i));
}, true);

// Laptop (bla fle9ch): jrr tswira b l'souris. F telephone swipe b sba3, w trackpad kaykhdem bohdo.
let pd = null;
app.addEventListener("pointerdown", e => {
  if (e.pointerType !== "mouse") return;
  const ph = e.target.closest(".ph.multi"); if (!ph) return;
  pd = { ph, x: e.clientX, l: ph.scrollLeft }; ph.classList.add("drag");
});
addEventListener("pointermove", e => { if (pd) pd.ph.scrollLeft = pd.l - (e.clientX - pd.x); });
addEventListener("pointerup", () => { if (pd) { pd.ph.classList.remove("drag"); pd = null; } });   // kan7ayd .drag => snap y3awd ykhdem

// Kan3mro kol sections mn SECTIONS (kat3awd ghir mnin t9bl guests wla f lbdya)
function render() {
  app.innerHTML = SECTIONS.map(s => {
    const head = `<p class="eyebrow">${s.eyebrow}</p><h2>${s.title}</h2>`;
    if (s.band) {   // section "included": bla prix w bla Add
      return `<section class="band"><div class="sec">${head}<div class="grid">` +
        s.items.map(it => `<div class="inc">${photos(it, false)}<h3>${it.name}</h3><p>${it.desc}</p></div>`).join("") +
        `</div></div></section>`;
    }
    return `<section class="sec">${head}<div class="grid">` + s.items.map((it, i) => {
      const k = s.id + ":" + i, on = picked.has(k);
      return `<div class="card ${on ? "on" : ""}">${photos(it, true)}${bdHTML(s, it, i)}</div>`;
    }).join("") + `</div></section>`;
  }).join("");
  if (io) app.querySelectorAll(".ph.multi").forEach(el => io.observe(el));   // kol card b bzaf tsawer: nudge mnin tban
  update();
}

// Chnou kaymchi l'client: kat3mr gher ila kamlat dates w khtar chi haja
function missing() {
  const v = val();
  return !picked.size ? "Pick at least one item" : !nightsOf(v) ? "Choose your check-in and check-out dates" : "";
}

// L'7sab dyal total + l'message dyal WhatsApp. Kat3awd mnin chi haja tbddl
function update() {
  const v = val(), nn = nightsOf(v), n = nn || 1;
  $("nl").textContent = nn ? nn + " night" + (nn > 1 ? "s" : "") : "Pick your dates";
  let total = 0, open = 0, lines = [];                      // open = 3dad items li taman dyalhom mazal ma t7ddd
  SECTIONS.forEach(s => s.items.forEach((it, i) => {
    const k = s.id + ":" + i; if (!picked.has(k)) return;
    const nb = it.beds ? (picked.get(k) ?? 1) : 1;                           // 3dad l'beds (ghir l'dorm), l'ba9i = 1
    const q = s.perNight ? n * nb : (picked.get(k) ?? v.guests);             // rooms: layali (x beds f dorm) | bqiya: quantity wla guests
    let l = "- " + it.name + (it.tag ? " (" + it.tag + ")" : "") + (s.perNight ? (it.beds ? ", " + nb + " bed" + (nb > 1 ? "s" : "") : "") + ", " + n + " night" + (n > 1 ? "s" : "") : " x" + q);
    if (it.price == null) { open++; l += " (price to confirm)"; }
    else { total += it.price * q; l += " (" + fmt(it.price * q) + ")"; }
    lines.push(l);
  }));
  const miss = missing();
  $("sub").textContent = miss || (picked.size + " selected");                // texte sghir f l'bar l'ta7tania
  $("tot").textContent = picked.size ? (total ? fmt(total) : "") + (open ? (total ? " + " : "") + "to confirm" : "") : "—";
  const a = $("send"); a.setAttribute("aria-disabled", miss ? "true" : "false");   // bouton WhatsApp mchfr hta ykml
  const d = x => new Date(x).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  const msg = ["Hi The Flowhost!" + (v.name ? " I'm " + v.name + "." : ""),
    nn ? "Check-in: " + d(v.cin) + " | Check-out: " + d(v.cout) + " (" + nn + " night" + (nn > 1 ? "s" : "") + ")" : "Dates: not chosen yet",
    "Guests: " + v.guests, "", "I'd like to book:", ...lines,
    ...(total ? ["", "Estimated total: " + fmt(total) + (open ? " + items to confirm" : "")] : [])].join("\n");
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);   // lien WhatsApp m3a l'message jahz
}

// Klik 3la Add / Remove / + / − : kan3awdo ghir l'partie l'ta7tania dyal card (mashi tsawer)
app.addEventListener("click", e => {
  const b = e.target.closest("button[data-k]"); if (!b) return;
  const k = b.dataset.k;
  const [sid, ix] = k.split(":"), s = SECTIONS.find(x => x.id === sid), it = s.items[+ix], card = b.closest(".card");
  if (b.dataset.q) {                                                         // + wla −
    const cur = picked.get(k) ?? (it.beds ? 1 : val().guests);
    picked.set(k, Math.max(1, Math.min(it.beds || 99, cur + +b.dataset.q))); // dorm: max = 3dad l'beds
  } else {
    picked.has(k) ? picked.delete(k) : picked.set(k, null);                  // Add / Remove
  }
  card.classList.toggle("on", picked.has(k));
  card.querySelector(".bd").outerHTML = bdHTML(s, it, +ix);                  // tsawer ma kaymssohomch
  update();
});

// Bouton WhatsApp mchfr (ma kaydir walo) 7ta ykml l'client: kaytl3o l'blasa li nqsa
$("send").addEventListener("click", e => {
  const m = missing(); if (!m) return;
  e.preventDefault();
  (!picked.size ? app : $("stay")).scrollIntoView({ behavior: "smooth" });
});

// Dates: check-in ma y9drch ykon f lmadi. Check-out khassou ykon b3d check-in b nhar 3la l9ll.
$("cin").min = new Date().toISOString().slice(0, 10);
$("cin").addEventListener("change", () => {
  const c = $("cin").value;
  if (c) {
    const nx = new Date(new Date(c).getTime() + 864e5).toISOString().slice(0, 10);
    $("cout").min = nx;
    if ($("cout").value && $("cout").value < nx) $("cout").value = "";       // check-out qbl check-in => n7aydo
  }
  update();
});
$("cout").addEventListener("change", update);
$("gname").addEventListener("input", update);
$("guests").addEventListener("input", render);                               // guests kay3awd y7sb quantity dyal items => render

render();   // awl 3ard dyal l'page