/* ==========================================================================
   Bellavista Residencial 2.0 — Vintage Editorial & Motion Controller
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.BELLAVISTA_DATA;
  const I18N = window.BELLAVISTA_I18N;

  const SERVICES_DETAIL = {
    dining: {
      title: "Asador Restaurante & Bar Bellavista",
      desc: "Restaurante propio con vistas a los jardines y a la piscina, junto al Bar Bellavista en terraza abierta para bebidas y comidas ligeras todo el día.",
      items: [
        ["Restaurante", "Asador mediterráneo en el complejo"],
        ["Bar Bellavista", "Cócteles, batidos, helados, ensaladas y pizzas"],
        ["Julio y agosto", "Abierto todos los días desde las 10:00"],
        ["Resto del año", "Horario de recepción"]
      ]
    },
    pool: {
      title: "Piscina exterior, solárium y Spa de temporada",
      desc: "Amplia explanada con hamacas y sombrillas frente al mar Mediterráneo, complementada con piscina interior climatizada, sauna y baño turco en categoría Deluxe.",
      items: [
        ["Piscina exterior", "Tumbonas, sombrillas y vistas al mar"],
        ["Piscina climatizada", "Interior de temporada (incluida en Deluxe)"],
        ["Circuito termal", "Sauna finlandesa y baño turco"],
        ["Acceso", "Conectada con jardines privados y Bar"]
      ]
    },
    gym: {
      title: "Gimnasio, cicloturismo y ocio al aire libre",
      desc: "Espacios pensados tanto para entrenar en la Costa Blanca como para disfrutar en familia sin salir de Monte Pego.",
      items: [
        ["Gimnasio", "Spinning, cinta, pesas y máquinas de fuerza"],
        ["Ocio familiar", "Minigolf, ping-pong y parque infantil"],
        ["Cicloturismo", "Taller, alquiler de bicis y rutas Marina Alta"],
        ["Comodidades", "Parking privado y mascotas bajo petición"]
      ]
    }
  };

  const state = {
    lang: "es",
    collection: "all",
    openAptId: DATA.apartments[0].id,
    aptPhotoIdx: {},
    activeService: "pool",
    activeAttrId: DATA.attractions[0].id,
    galleryFilter: "all",
    lightboxList: [],
    lightboxIdx: 0,
    heroSlide: 0,
    heroPaused: false,
    heroTimer: null
  };

  const t = (key) => (I18N[state.lang] && I18N[state.lang][key]) || I18N.es[key] || key;

  function buildBookingUrl() {
    const ci = document.getElementById("book-in")?.value || "";
    const co = document.getElementById("book-out")?.value || "";
    const adults = document.getElementById("book-guests")?.value || "2";
    const params = new URLSearchParams();
    if (ci) params.set("check_in_date", ci);
    if (co) params.set("check_out_date", co);
    params.set("number_adults", adults);
    params.set("locale", state.lang);
    return `${DATA.bookingUrl}?${params.toString()}`;
  }

  function initDates() {
    const ci = document.getElementById("book-in");
    const co = document.getElementById("book-out");
    if (!ci || !co) return;
    const today = new Date();
    const s = new Date(today);
    s.setDate(today.getDate() + 14);
    const e = new Date(s);
    e.setDate(s.getDate() + 7);
    const iso = (d) => d.toISOString().split("T")[0];
    ci.min = iso(today);
    ci.value = iso(s);
    co.min = iso(s);
    co.value = iso(e);
    ci.addEventListener("change", () => {
      const d = new Date(ci.value);
      const next = new Date(d);
      next.setDate(d.getDate() + 1);
      co.min = iso(next);
      if (new Date(co.value) <= d) co.value = iso(next);
    });
  }

  /* ------------------------------------------------------------------------
     Cinematic Hero Ken Burns Living Reel (with Play / Pause & Dots)
     ------------------------------------------------------------------------ */
  function initHeroReel() {
    const hero = document.getElementById("inicio");
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".reel-dot"));
    const captionEl = document.getElementById("hero-slide-caption");
    const toggleBtn = document.getElementById("reel-toggle");
    const toggleIcon = document.getElementById("reel-toggle-icon");
    const toggleLabel = document.getElementById("reel-toggle-label");

    if (!hero || !slides.length) return;

    function goToSlide(idx) {
      state.heroSlide = (idx + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === state.heroSlide));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === state.heroSlide));
      if (captionEl) {
        captionEl.textContent = slides[state.heroSlide].dataset.caption || "";
      }
    }

    function startAuto() {
      clearInterval(state.heroTimer);
      if (state.heroPaused) return;
      state.heroTimer = setInterval(() => goToSlide(state.heroSlide + 1), 6500);
    }

    function setPaused(paused) {
      state.heroPaused = paused;
      hero.classList.toggle("is-paused", paused);
      if (toggleBtn) toggleBtn.setAttribute("aria-pressed", String(paused));
      if (toggleIcon) toggleIcon.textContent = paused ? "▶" : "⏸";
      if (toggleLabel) toggleLabel.textContent = paused ? "Reanudar" : "Pausar";
      if (paused) {
        clearInterval(state.heroTimer);
      } else {
        startAuto();
      }
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => setPaused(!state.heroPaused));
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.dataset.slideTo, 10));
        if (!state.heroPaused) startAuto();
      });
    });

    // Respect prefers-reduced-motion automatically
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    } else {
      startAuto();
    }
  }

  /* ------------------------------------------------------------------------
     Scroll Reveal Choreography
     ------------------------------------------------------------------------ */
  function initScrollReveals() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  function applyLang(lang) {
    state.lang = I18N[lang] ? lang : "es";
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang-btn").forEach((b) => {
      const on = b.dataset.lang === state.lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    renderAccordion();
  }

  /* Service Detail beneath the Giant Overlapping SERVICES Trio */
  function renderServiceDetail() {
    const box = document.getElementById("service-detail-box");
    if (!box) return;
    const s = SERVICES_DETAIL[state.activeService] || SERVICES_DETAIL.pool;
    document.querySelectorAll("[data-service-key]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.serviceKey === state.activeService);
    });
    box.innerHTML = `
      <div>
        <h3 class="service-detail-title">${s.title}</h3>
        <p class="service-detail-desc">${s.desc}</p>
      </div>
      <ul class="service-detail-list">
        ${s.items.map(([k, v]) => `<li><strong>${k}</strong><span>${v}</span></li>`).join("")}
      </ul>
    `;
  }

  /* ------------------------------------------------------------------------
     APARTAMENTOS — Smooth In-Place Editorial Accordion (Zero scroll hunting!)
     ------------------------------------------------------------------------ */
  function renderAccordion() {
    const root = document.getElementById("apt-accordion");
    if (!root) return;

    const visible = DATA.apartments.filter((a) =>
      state.collection === "all" ? true : a.collection === state.collection
    );

    if (state.openAptId && !visible.some((a) => a.id === state.openAptId)) {
      state.openAptId = visible[0]?.id || null;
    }

    root.innerHTML = visible.map((apt) => {
      const isOpen = apt.id === state.openAptId;
      const pIdx = state.aptPhotoIdx[apt.id] || 0;
      const mainPhoto = apt.photos[pIdx] || apt.photos[0];

      return `
        <article class="apt-item ${isOpen ? "is-open" : ""}" data-apt-card="${apt.id}">
          <button
            type="button"
            class="apt-trigger"
            data-toggle-apt="${apt.id}"
            aria-expanded="${isOpen}"
          >
            <img class="apt-mini-thumb" src="${apt.photos[0]}" alt="" loading="lazy">
            <div>
              <div class="apt-trigger-title">${apt.name[state.lang]}</div>
              <div class="apt-trigger-sub">${apt.tierLabel[state.lang]} · ${apt.capacity}</div>
            </div>
            <div class="apt-trigger-metrics">
              ${apt.size}
              <span>+ ${apt.terrace}</span>
            </div>
            <span class="apt-plus" aria-hidden="true">+</span>
          </button>

          <div class="apt-drawer">
            <div class="apt-drawer-inner">
              <div class="apt-spread">
                <div>
                  <div class="stage-photo">
                    <img
                      src="${mainPhoto}"
                      alt="${apt.name[state.lang]} — Bellavista Residencial"
                      data-open-apt-lightbox="${apt.id}"
                      loading="lazy"
                    >
                  </div>
                  <div class="stage-thumbs">
                    ${apt.photos.map((src, i) => `
                      <button
                        type="button"
                        class="stage-thumb ${i === pIdx ? "is-active" : ""}"
                        data-apt-thumb="${apt.id}"
                        data-thumb-idx="${i}"
                        aria-label="Foto ${i + 1} de ${apt.name[state.lang]}"
                      >
                        <img src="${src}" alt="" loading="lazy">
                      </button>
                    `).join("")}
                  </div>
                </div>

                <div>
                  <p class="stage-desc">${apt.summary[state.lang]}</p>
                  <dl class="stage-specs">
                    <div><dt>Superficie y terraza</dt><dd>${apt.size} + ${apt.terrace}</dd></div>
                    <div><dt>Capacidad máxima</dt><dd>${apt.capacity}</dd></div>
                    <div><dt>Acceso / Planta</dt><dd>${apt.access}</dd></div>
                    <div><dt>Climatización</dt><dd>${apt.climate}</dd></div>
                    <div><dt>Cocina</dt><dd>${apt.kitchen}</dd></div>
                    <div><dt>Baños</dt><dd>${apt.baths}</dd></div>
                  </dl>
                  <ul class="stage-amenities">
                    ${apt.amenities.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                  <div class="stage-actions">
                    <a href="${buildBookingUrl()}" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn--solid">
                      ${t("room_check_btn")} →
                    </a>
                    <a href="#ubicacion" class="pill-btn">${t("room_ask_btn")}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  /* 9 Real Attractions Explorer */
  function renderAttractions() {
    const listEl = document.getElementById("env-list");
    const stageEl = document.getElementById("env-stage");
    if (!listEl || !stageEl) return;

    listEl.innerHTML = DATA.attractions.map((a) => `
      <button
        type="button"
        class="env-btn ${a.id === state.activeAttrId ? "is-active" : ""}"
        data-attr-id="${a.id}"
        aria-pressed="${a.id === state.activeAttrId}"
      >
        <span class="env-btn-name">${a.title}</span>
        <span class="env-btn-dist">${a.dist}</span>
      </button>
    `).join("");

    const active = DATA.attractions.find((a) => a.id === state.activeAttrId) || DATA.attractions[0];
    stageEl.innerHTML = `
      <img src="${active.image}" alt="${active.title} — Costa Blanca" loading="lazy">
      <div class="env-stage-dist">${active.dist}</div>
      <h3 class="env-stage-title">${active.title}</h3>
      <p class="env-stage-desc">${active.desc}</p>
    `;
  }

  /* Real Photo Archive + Lightbox */
  function renderGallery() {
    const grid = document.getElementById("archive-grid");
    if (!grid) return;
    const list = DATA.gallery.filter((g) =>
      state.galleryFilter === "all" ? true : g.category === state.galleryFilter
    );
    grid.innerHTML = list.map((item, idx) => `
      <button
        type="button"
        class="archive-item ${item.span6 && state.galleryFilter === "all" ? "archive-item--span6" : ""}"
        data-gal-idx="${idx}"
        aria-label="Ampliar: ${item.caption}"
      >
        <img src="${item.image}" alt="${item.caption}" loading="lazy">
        <span class="archive-cap">${item.caption}</span>
      </button>
    `).join("");
  }

  function openLightbox(items, index) {
    state.lightboxList = items;
    state.lightboxIdx = index;
    updateLightbox();
    document.getElementById("lightbox-modal").hidden = false;
    document.body.style.overflow = "hidden";
  }

  function updateLightbox() {
    const cur = state.lightboxList[state.lightboxIdx];
    if (!cur) return;
    document.getElementById("lightbox-img").src = cur.image;
    document.getElementById("lightbox-img").alt = cur.caption;
    document.getElementById("lightbox-caption").textContent = cur.caption;
    document.getElementById("lightbox-counter").textContent = `${state.lightboxIdx + 1} / ${state.lightboxList.length}`;
  }

  function closeModals() {
    document.querySelectorAll(".modal-backdrop").forEach((m) => (m.hidden = true));
    const vFrame = document.getElementById("video-iframe");
    if (vFrame) vFrame.src = "";
    document.body.style.overflow = "";
  }

  function bindEvents() {
    const drawer = document.getElementById("mobile-drawer");
    document.getElementById("mobile-open").addEventListener("click", () => {
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
    });
    document.getElementById("mobile-close").addEventListener("click", () => {
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
    });
    drawer.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        drawer.classList.remove("is-open");
        drawer.setAttribute("aria-hidden", "true");
      })
    );

    document.getElementById("hero-booking-form").addEventListener("submit", (e) => {
      e.preventDefault();
      window.open(buildBookingUrl(), "_blank", "noopener,noreferrer");
    });

    document.querySelectorAll("[data-open-video]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById("video-iframe").src = DATA.youtubeEmbed;
        document.getElementById("video-modal").hidden = false;
        document.body.style.overflow = "hidden";
      });
    });

    document.addEventListener("click", (e) => {
      const langBtn = e.target.closest(".lang-btn");
      if (langBtn) applyLang(langBtn.dataset.lang);

      const srvCol = e.target.closest("[data-service-key]");
      if (srvCol) {
        state.activeService = srvCol.dataset.serviceKey;
        renderServiceDetail();
      }

      const colTab = e.target.closest("[data-collection]");
      if (colTab) {
        state.collection = colTab.dataset.collection;
        document.querySelectorAll("[data-collection]").forEach((b) =>
          b.classList.toggle("is-active", b === colTab)
        );
        renderAccordion();
      }

      // Smooth in-place accordion toggle (no DOM rebuild so CSS transition glides!)
      const toggleApt = e.target.closest("[data-toggle-apt]");
      if (toggleApt) {
        const id = toggleApt.dataset.toggleApt;
        const willOpen = state.openAptId !== id;
        state.openAptId = willOpen ? id : null;
        document.querySelectorAll(".apt-item").forEach((card) => {
          const open = card.dataset.aptCard === state.openAptId;
          card.classList.toggle("is-open", open);
          const btn = card.querySelector("[data-toggle-apt]");
          if (btn) btn.setAttribute("aria-expanded", String(open));
        });
      }

      // Thumbnail switch inside an expanded accordion without closing it
      const thumbBtn = e.target.closest("[data-apt-thumb]");
      if (thumbBtn) {
        const id = thumbBtn.dataset.aptThumb;
        const idx = parseInt(thumbBtn.dataset.thumbIdx, 10);
        state.aptPhotoIdx[id] = idx;
        const apt = DATA.apartments.find((a) => a.id === id);
        const card = document.querySelector(`[data-apt-card="${id}"]`);
        if (apt && card) {
          const mainImg = card.querySelector(".stage-photo img");
          if (mainImg) mainImg.src = apt.photos[idx];
          card.querySelectorAll("[data-apt-thumb]").forEach((b, i) =>
            b.classList.toggle("is-active", i === idx)
          );
        }
      }

      const lbApt = e.target.closest("[data-open-apt-lightbox]");
      if (lbApt) {
        const id = lbApt.dataset.openAptLightbox;
        const apt = DATA.apartments.find((a) => a.id === id);
        if (apt) {
          openLightbox(
            apt.photos.map((src, i) => ({ image: src, caption: `${apt.name[state.lang]} (${i + 1}/${apt.photos.length})` })),
            state.aptPhotoIdx[id] || 0
          );
        }
      }

      const attrBtn = e.target.closest("[data-attr-id]");
      if (attrBtn) {
        state.activeAttrId = attrBtn.dataset.attrId;
        renderAttractions();
      }

      const galTab = e.target.closest("[data-gal-filter]");
      if (galTab) {
        state.galleryFilter = galTab.dataset.galFilter;
        document.querySelectorAll("[data-gal-filter]").forEach((b) =>
          b.classList.toggle("is-active", b === galTab)
        );
        renderGallery();
      }

      const galItem = e.target.closest("[data-gal-idx]");
      if (galItem) {
        const list = DATA.gallery.filter((g) =>
          state.galleryFilter === "all" ? true : g.category === state.galleryFilter
        );
        openLightbox(list, parseInt(galItem.dataset.galIdx, 10));
      }

      if (e.target.closest("[data-close-modal]") || e.target.classList.contains("modal-backdrop")) {
        closeModals();
      }
    });

    document.getElementById("lb-prev").addEventListener("click", () => {
      state.lightboxIdx = (state.lightboxIdx - 1 + state.lightboxList.length) % state.lightboxList.length;
      updateLightbox();
    });
    document.getElementById("lb-next").addEventListener("click", () => {
      state.lightboxIdx = (state.lightboxIdx + 1) % state.lightboxList.length;
      updateLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModals();
      if (!document.getElementById("lightbox-modal").hidden) {
        if (e.key === "ArrowLeft") document.getElementById("lb-prev").click();
        if (e.key === "ArrowRight") document.getElementById("lb-next").click();
      }
    });

    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("c-name");
      const email = document.getElementById("c-email");
      const msg = document.getElementById("c-msg");
      const fb = document.getElementById("contact-feedback");
      if (!name.value.trim() || !email.validity.valid || !msg.value.trim()) {
        fb.textContent = "Por favor, completa nombre, email válido y mensaje.";
        fb.hidden = false;
        return;
      }
      fb.textContent = t("c_ok");
      fb.hidden = false;
      e.target.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initDates();
    initHeroReel();
    initScrollReveals();
    renderServiceDetail();
    renderAttractions();
    renderGallery();
    applyLang("es");
    bindEvents();
  });
})();
