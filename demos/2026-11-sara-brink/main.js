/**
 * DEMO 1 — STAYLI MINIMALIST ARCHITECTURAL SCRIPT (TRILINGUAL ES / DE / EN & 100% SVG)
 */

let currentFilterDemo1 = "all";

const i18nDemo1 = {
  es: {
    nav_home: "Inicio",
    nav_props: "Propiedades (8)",
    nav_services: "Servicios",
    nav_legal: "Licencias España",
    nav_about: "Sobre Nosotros",
    nav_contact: "Contacto",
    nav_cta: "Empezar hoy",
    hero_eyebrow: "Pego · Dénia · Oliva · Marina Alta",
    hero_title: "Descubre tu hogar ideal en la Costa Blanca hoy",
    hero_subtitle: "Nuestras perlas junto al Mediterráneo: llegar, desconectar y sentirse bien. Alquiler vacacional, obra nueva y administración de propiedades en Pego y Marina Alta.",
    hero_cta: "Reservar o consultar hoy",
    hero_tag: "Obra Nueva en El Verger · Ref. SB0126 y 7 Villas/Apartamentos",
    ed_kicker: "Brink Inmo Consulting · Pego",
    ed_left_title: "Llegar. Desconectar. Sentirse bien en la Costa Blanca.",
    ed_label: "Encuentra el lugar ideal para tu próxima estancia o inversión inmobiliaria en Pego, Dénia, Oliva y toda la Marina Alta.",
    ed_m1: "Propiedades verificadas",
    ed_m2: "Idiomas (DE · HR · EN · ES)",
    ed_m3: "Desde / mes en invierno",
    ed_m4: "Partner: Stella Inmo",
    ed_btn_secondary: "Asesoramiento directo",
    ed_statement: "Descubre las propiedades más extraordinarias con Brink Inmo Consulting. Ya sea una escapada frente al mar en Oliva, unas vacaciones familiares en Dénia o la administración integral de tu vivienda en Pego, tenemos el espacio perfecto esperándote.",
    pillar1_tag: "Larga Estancia",
    pillar1_title: "Teletrabajo & Estancias de Invierno",
    pillar1_desc: "Espacios tranquilos con WiFi de alta velocidad, climatización frío/calor y tarifas especiales de invierno desde 650 €/mes en Dénia, Pego y Pedreguer.",
    pillar2_tag: "Vacaciones & Venta",
    pillar2_title: "Escapadas en Familia & Obra Nueva",
    pillar2_desc: "Villas privadas para hasta 12 personas con piscina, apartamentos a 0–200 m de la playa y obra nueva contemporánea en El Verger (Ref. SB0126).",
    pillar3_tag: "Gestión Propietarios",
    pillar3_title: "Administración Integral & Licencias en España",
    pillar3_desc: "Cuidamos de tu propiedad todo el año (mantenimiento, limpieza, interiorismo y entrega de llaves) y tramitamos certificados y licencias turísticas oficiales desde 50 €.",
    ed_btn: "Explorar propiedades",
    props_eyebrow: "Catálogo Real Verificado · Costa Blanca",
    props_title: "Nuestras Perlas en la Marina Alta",
    filter_all: "Todas (8)",
    filter_buy: "Comprar · Obra Nueva (1)",
    filter_villas: "Villas con Piscina (3)",
    filter_apts: "Apartamentos & Playa (4)",
    unit_bed: "Dorm.",
    unit_bath: "Baños",
    unit_guests: "Hasta {n} pers.",
    btn_details: "Ver detalles",
    srv_eyebrow: "Gestión Integral para Propietarios y Huéspedes",
    srv_title: "Nuestros Servicios en Pego y Costa Blanca",
    srv_intro: "En estrecha colaboración con <strong>Stella Inmo Consulting</strong> ofrecemos un servicio personal, fiable y comprometido.",
    legal_eyebrow: "Trámites Oficiales en España",
    legal_title: "Certificados y Licencias Turísticas",
    legal_desc: "Gestionamos por usted la solicitud de documentos y licencias obligatorias de forma rápida, fiable y conforme a la ley.",
    legal_cta: "Solicitar gestión",
    card_agency_tag: "Agencia Inmobiliaria en Pego",
    card_agency_desc: "Especialistas en alquiler vacacional, obra nueva y administración integral de propiedades en Pego, Dénia, Oliva, El Verger y Pedreguer.",
    card_founder_lbl: "Fundadora:",
    card_partner_lbl: "Partner Oficial:",
    card_region_lbl: "Región:",
    about_eyebrow: "Sobre Nosotros · Dirección Personal",
    about_langs_label: "Atención individualizada en 4 idiomas europeos:",
    contact_eyebrow: "Contacto Directo & Sin Compromiso",
    contact_title: "¿Desea vender, alquilar o confiar el cuidado de su propiedad?",
    contact_desc: "¿O busca su nuevo hogar en la Costa Blanca? Estaremos encantados de recibir su mensaje y asesorarle personalmente.",
    c_phone_lbl: "Teléfono & WhatsApp",
    c_email_lbl: "Correo Electrónico Oficial",
    c_loc_lbl: "Sede & Área de Actuación",
    form_title: "Envíanos un mensaje",
    form_subtitle: "Respuesta directa de Sara Brink (Brink Inmo Consulting).",
    lbl_name: "Nombre *",
    ph_name: "Su nombre completo",
    lbl_email: "Correo electrónico *",
    ph_email: "nombre@correo.com",
    lbl_phone: "Teléfono",
    lbl_subject: "Asunto *",
    subj_rent: "Alquiler Vacacional",
    subj_buy: "Compra Obra Nueva · El Patio de Vergel (SB0126)",
    subj_manage: "Administración de Propiedad",
    subj_legal: "Trámites y Licencias en España",
    lbl_msg: "Mensaje *",
    ph_msg: "Indíquenos fechas deseadas, propiedad de interés o consulta...",
    form_submit: "Enviar consulta a Sara Brink",
    footer_copy: "© 2026 BRINK INMO CONSULTING · Sara Brink · Pego, Costa Blanca. Colaboración: Stella Inmo Consulting."
  },
  de: {
    nav_home: "Home",
    nav_props: "Immobilien (8)",
    nav_services: "Services",
    nav_legal: "Behördengänge",
    nav_about: "Über mich",
    nav_contact: "Kontakt",
    nav_cta: "Jetzt starten",
    hero_eyebrow: "Pego · Dénia · Oliva · Marina Alta",
    hero_title: "Entdecken Sie unsere Perlen an der Costa Blanca",
    hero_subtitle: "Ankommen. Abschalten. Wohlfühlen. Professioneller Service in Ferienvermietung, Hausverwaltung und Neubau im malerischen Pego und der Marina Alta.",
    hero_cta: "Heute anfragen",
    hero_tag: "Neubau El Patio de Vergel · Ref. SB0126 & 7 Ferienimmobilien",
    ed_kicker: "Brink Inmo Consulting · Pego",
    ed_left_title: "Ankommen. Abschalten. Wohlfühlen an der Costa Blanca.",
    ed_label: "Finden Sie den idealen Ort für Ihren nächsten Aufenthalt oder Ihre Immobilieninvestition in Pego, Dénia, Oliva und der Marina Alta.",
    ed_m1: "Verifizierte Immobilien",
    ed_m2: "Sprachen (DE · HR · EN · ES)",
    ed_m3: "Ab / Monat im Winter",
    ed_m4: "Partner: Stella Inmo",
    ed_btn_secondary: "Direkte Beratung",
    ed_statement: "Entdecken Sie außergewöhnliche Unterkünfte mit Brink Inmo Consulting. Ob Auszeit direkt am Strand in Oliva, Familienurlaub mit Pool in Dénia oder Hausverwaltung in Pego – wir sind persönlich für Sie da.",
    pillar1_tag: "Langzeitaufenthalt",
    pillar1_title: "Home-Office & Überwinterung",
    pillar1_desc: "Ruhige Lagen mit schnellem WLAN, Heizung/Klimaanlage und attraktiven Wintermietpreisen ab 650 €/Monat in Dénia, Pego und Pedreguer.",
    pillar2_tag: "Urlaub & Kauf",
    pillar2_title: "Familienurlaub & Neubau",
    pillar2_desc: "Exklusive Villen für bis zu 12 Personen mit Pool, Strand-Appartements und moderne Neubauwohnungen in El Verger (Ref. SB0126).",
    pillar3_tag: "Eigentümer-Service",
    pillar3_title: "Hausverwaltung & Behördengänge in Spanien",
    pillar3_desc: "Ganzjährige Betreuung Ihrer Immobilie (Wartung, Reinigung, Einrichtung & Gästeservice) sowie offizielle Lizenzen und Zertifikate ab 50 €.",
    ed_btn: "Immobilien entdecken",
    props_eyebrow: "Verifiziertes Portfolio · Costa Blanca",
    props_title: "Unsere Perlen an der Costa Blanca",
    filter_all: "Alle (8)",
    filter_buy: "Kaufen · Neubau (1)",
    filter_villas: "Villen zum Vermieten (3)",
    filter_apts: "Appartements & Strand (4)",
    unit_bed: "Schlafz.",
    unit_bath: "Bäder",
    unit_guests: "Bis {n} Pers.",
    btn_details: "Exposé",
    srv_eyebrow: "Rundum-Betreuung für Eigentümer & Gäste",
    srv_title: "Unsere Services im Überblick",
    srv_intro: "Als junges, dynamisches Unternehmen in Pego arbeiten wir eng mit <strong>Stella Inmo Consulting</strong> zusammen, um höchste Qualität zu garantieren.",
    legal_eyebrow: "Verwaltung & Behördengänge in Spanien",
    legal_title: "Dokumente & Lizenzen in Spanien",
    legal_desc: "Wir übernehmen für Sie die Beantragung folgender Dokumente und Lizenzen – schnell, zuverlässig und rechtskonform:",
    legal_cta: "Jetzt Lizenz anfragen",
    card_agency_tag: "Immobilienagentur in Pego",
    card_agency_desc: "Professioneller Service in Ferienvermietung, Hausverwaltung und Neubau in Pego, Dénia, Oliva, El Verger und Pedreguer.",
    card_founder_lbl: "Gründerin:",
    card_partner_lbl: "Partner:",
    card_region_lbl: "Region:",
    about_eyebrow: "Über mich · Gründerin",
    about_langs_label: "Individuelle Betreuung in 4 europäischen Sprachen:",
    contact_eyebrow: "Persönlich & Unverbindlich",
    contact_title: "Kontaktieren Sie uns",
    contact_desc: "Sie möchten eine Immobilie verkaufen, vermieten oder professionell betreuen lassen? Oder suchen Sie Ihr neues Zuhause an der Costa Blanca? Wir freuen uns auf Ihre Nachricht.",
    c_phone_lbl: "Telefon & WhatsApp",
    c_email_lbl: "Offizielle E-Mail",
    c_loc_lbl: "Standort & Region",
    form_title: "Nachricht senden",
    form_subtitle: "Direkter Kontakt mit Sara Brink (Brink Inmo Consulting).",
    lbl_name: "Name *",
    ph_name: "Ihr vollständiger Name",
    lbl_email: "E-Mail *",
    ph_email: "name@email.de",
    lbl_phone: "Telefon",
    lbl_subject: "Betreff *",
    subj_rent: "Ferienvermietung / Mieten",
    subj_buy: "Neubau Kaufen · El Patio de Vergel (SB0126)",
    subj_manage: "Hausverwaltung & Service",
    subj_legal: "Behördengänge & Lizenzen in Spanien",
    lbl_msg: "Nachricht *",
    ph_msg: "Ihr Wunschzeitraum, Ihre Wunschimmobilie oder Ihre Frage...",
    form_submit: "Nachricht an Sara Brink senden",
    footer_copy: "© 2026 BRINK INMO CONSULTING · Sara Brink · Pego, Costa Blanca. Partner: Stella Inmo Consulting."
  },
  en: {
    nav_home: "Home",
    nav_props: "Properties (8)",
    nav_services: "Services",
    nav_legal: "Spanish Licenses",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_cta: "Get started",
    hero_eyebrow: "Pego · Dénia · Oliva · Marina Alta",
    hero_title: "Discover your ideal home on the Costa Blanca today",
    hero_subtitle: "Our pearls by the Mediterranean: arrive, unwind, and feel at home. Holiday rentals, new build homes, and property management in Pego and Marina Alta.",
    hero_cta: "Book or inquire today",
    hero_tag: "New Build in El Verger · Ref. SB0126 & 7 Holiday Villas/Apartments",
    ed_kicker: "Brink Inmo Consulting · Pego",
    ed_left_title: "Arrive. Unwind. Feel at home on the Costa Blanca.",
    ed_label: "Find the ideal spot for your next stay or real estate investment in Pego, Dénia, Oliva, and across Marina Alta.",
    ed_m1: "Verified properties",
    ed_m2: "Languages (DE · HR · EN · ES)",
    ed_m3: "From / month in winter",
    ed_m4: "Partner: Stella Inmo",
    ed_btn_secondary: "Direct consultation",
    ed_statement: "Discover extraordinary stays with Brink Inmo Consulting. Whether you are planning a beachfront getaway in Oliva, a family vacation in Dénia, or full property management in Pego, we have the right solution for you.",
    pillar1_tag: "Long Stay",
    pillar1_title: "Remote Work & Winter Stays",
    pillar1_desc: "Peaceful locations with fast WiFi, heating/air conditioning, and special winter monthly rates starting from 650 €/month in Dénia, Pego, and Pedreguer.",
    pillar2_tag: "Holidays & Sale",
    pillar2_title: "Family Getaways & New Build",
    pillar2_desc: "Private pool villas for up to 12 guests, apartments 0–200 m from the beach, and modern new-build homes in El Verger (Ref. SB0126).",
    pillar3_tag: "Owner Care",
    pillar3_title: "Full Property Management & Spanish Licenses",
    pillar3_desc: "Year-round care for your home (maintenance, cleaning, furnishing & guest check-in) plus official tourist licenses and certificates from 50 €.",
    ed_btn: "Explore properties",
    props_eyebrow: "Verified Real Portfolio · Costa Blanca",
    props_title: "Our Pearls in Marina Alta",
    filter_all: "All (8)",
    filter_buy: "Buy · New Build (1)",
    filter_villas: "Pool Villas (3)",
    filter_apts: "Apartments & Beach (4)",
    unit_bed: "Beds",
    unit_bath: "Baths",
    unit_guests: "Up to {n} guests",
    btn_details: "Details",
    srv_eyebrow: "Complete Care for Owners & Guests",
    srv_title: "Our Services in Pego & Costa Blanca",
    srv_intro: "Working closely with <strong>Stella Inmo Consulting</strong>, we deliver personal, reliable, and dedicated real estate care.",
    legal_eyebrow: "Official Paperwork in Spain",
    legal_title: "Certificates & Tourist Licenses",
    legal_desc: "We handle the application for mandatory Spanish documents and tourist licenses quickly, reliably, and in full legal compliance.",
    legal_cta: "Request service",
    card_agency_tag: "Boutique Real Estate in Pego",
    card_agency_desc: "Specialists in holiday rentals, new builds, and full-service property management across Pego, Dénia, Oliva, El Verger, and Pedreguer.",
    card_founder_lbl: "Founder:",
    card_partner_lbl: "Official Partner:",
    card_region_lbl: "Region:",
    about_eyebrow: "About Us · Personal Management",
    about_langs_label: "Personal assistance in 4 European languages:",
    contact_eyebrow: "Direct & No-Obligation Consultation",
    contact_title: "Looking to sell, rent, or have your property professionally managed?",
    contact_desc: "Or searching for your next home on the Costa Blanca? We look forward to your message and will advise you personally.",
    c_phone_lbl: "Phone & WhatsApp",
    c_email_lbl: "Official E-Mail",
    c_loc_lbl: "Headquarters & Service Area",
    form_title: "Send us a message",
    form_subtitle: "Direct reply from Sara Brink (Brink Inmo Consulting).",
    lbl_name: "Name *",
    ph_name: "Your full name",
    lbl_email: "Email *",
    ph_email: "name@email.com",
    lbl_phone: "Phone",
    lbl_subject: "Subject *",
    subj_rent: "Holiday Rental Inquiry",
    subj_buy: "Buy New Build · El Patio de Vergel (SB0126)",
    subj_manage: "Property Management (Hausverwaltung)",
    subj_legal: "Spanish Licenses & Certificates",
    lbl_msg: "Message *",
    ph_msg: "Tell us your preferred dates, property of interest, or question...",
    form_submit: "Send inquiry to Sara Brink",
    footer_copy: "© 2026 BRINK INMO CONSULTING · Sara Brink · Pego, Costa Blanca. Partner: Stella Inmo Consulting."
  }
};

function renderDemo1Properties() {
  const grid = document.getElementById("demo1-properties-grid");
  const lang = window.BrinkUI.currentLang || "es";
  const dict = i18nDemo1[lang] || i18nDemo1.es;
  const ic = window.BrinkIcons;

  const props = window.BRINK_DATA.properties.filter(p => {
    if (currentFilterDemo1 === "all") return true;
    if (currentFilterDemo1 === "kaufen") return p.operation === "kaufen";
    return p.category === currentFilterDemo1;
  });

  grid.innerHTML = props.map(p => {
    const t = p.i18n[lang] || p.i18n.es;
    return `
      <article class="prop-card-stayli reveal visible" onclick="BrinkUI.openPropertyModal('${p.id}')">
        <div class="prop-media">
          <img src="${p.mainImage}" alt="${p.title} — ${t.location}" loading="lazy" />
          <div class="prop-top-badges">
            <span class="prop-pill-badge">${t.badge}</span>
            <span class="prop-pill-ref">${p.ref}</span>
          </div>
        </div>
        <div class="prop-content">
          <span class="prop-location">${ic.pin} <span>${t.location}</span></span>
          <h3 class="prop-name">${p.title}</h3>
          <p class="prop-summary">${t.summary}</p>
          <div class="prop-specs-row">
            <span>${ic.bed} ${p.bedrooms} ${dict.unit_bed}</span>
            <span>${ic.bath} ${p.bathrooms} ${dict.unit_bath}</span>
            <span>${ic.users} ${dict.unit_guests.replace("{n}", p.guests)}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderDemo1Services() {
  const lang = window.BrinkUI.currentLang || "es";
  const ic = window.BrinkIcons;
  const srvGrid = document.getElementById("demo1-services-grid");

  srvGrid.innerHTML = window.BRINK_DATA.services.map(s => {
    const t = s[lang] || s.es;
    return `
      <div class="service-card reveal visible">
        <div class="olive-icon-badge" style="margin-bottom:0;">${ic[s.icon] || ic.sparkles}</div>
        <h3>${t.title}</h3>
        <p>${t.short}</p>
        <ul class="service-bullets">
          ${t.bullets.map(b => `<li>${ic.check} <span>${b}</span></li>`).join("")}
        </ul>
      </div>
    `;
  }).join("");

  const tariffsEl = document.getElementById("demo1-tariffs");
  tariffsEl.innerHTML = window.BRINK_DATA.legalFees.map(f => {
    const t = f[lang] || f.es;
    return `
      <div class="tariff-item">
        <div>
          <div style="font-weight:600;font-size:0.84rem;">${t.name}</div>
          <div style="font-size:0.7rem;color:var(--text-muted);">${t.sub} (${t.note})</div>
        </div>
        <strong>${f.price}</strong>
      </div>
    `;
  }).join("");
}

function renderDemo1About() {
  const lang = window.BrinkUI.currentLang || "es";
  const data = window.BRINK_DATA.about[lang] || window.BRINK_DATA.about.es;
  const ic = window.BrinkIcons;

  document.getElementById("about-title").textContent = data.title;
  document.getElementById("about-bio").textContent = `${data.bio} ${data.languagesText}`;
  document.getElementById("about-partner").textContent = data.partnershipText;

  document.getElementById("about-langs-list").innerHTML = data.langs.map(l => `
    <span class="lang-pill">${ic.globe} <span>${l}</span></span>
  `).join("");

  document.getElementById("about-pillars").innerHTML = data.pillars.map(p => `
    <div class="why-item">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join("");
}

function filterDemo1Props(filter) {
  currentFilterDemo1 = filter;
  document.querySelectorAll(".filter-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderDemo1Properties();
}

function setDemo1Lang(lang) {
  window.BrinkUI.currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  const dict = i18nDemo1[lang] || i18nDemo1.es;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  renderDemo1Properties();
  renderDemo1Services();
  renderDemo1About();
}

function handleDemo1Submit(e) {
  e.preventDefault();
  const name = document.getElementById("f-name").value;
  const subject = document.getElementById("f-subject").value;
  const msg = document.getElementById("f-msg").value;
  window.location.href = `mailto:sara@brink-consult.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(msg)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  window.BrinkUI.initDemoBar(1);

  // Inject SVG icons into static contact boxes
  document.getElementById("icon-phone-box").innerHTML = window.BrinkIcons.phone;
  document.getElementById("icon-mail-box").innerHTML = window.BrinkIcons.mail;
  document.getElementById("icon-pin-box").innerHTML = window.BrinkIcons.pin;

  setDemo1Lang("es");

  // Header scroll state
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });

  // Mobile Menu
  const toggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });

  // Scroll Reveal Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
