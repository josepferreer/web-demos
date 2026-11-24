/* ==========================================================================
   Bellavista Residencial 2.0 — Editorial Interactive Controller
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.BELLAVISTA_DATA;
  const I18N = window.BELLAVISTA_I18N;

  const state = {
    lang: "es",
    collection: "all",
    activeAptId: DATA.apartments[0].id,
    activePhotoIdx: 0,
    activeAttrId: DATA.attractions[0].id,
    galleryFilter: "all",
    lightboxList: [],
    lightboxIdx: 0
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
     i18n
     ------------------------------------------------------------------------ */
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
    renderFolio();
    renderPackages();
  }

  /* ------------------------------------------------------------------------
     Apartments Editorial Folio (Index + Sticky Real-Photo Stage)
     ------------------------------------------------------------------------ */
  function renderFolio() {
    const indexEl = document.getElementById("folio-index");
    const stageEl = document.getElementById("folio-stage");
    if (!indexEl || !stageEl) return;

    const visible = DATA.apartments.filter((a) =>
      state.collection === "all" ? true : a.collection === state.collection
    );

    if (!visible.some((a) => a.id === state.activeAptId)) {
      state.activeAptId = visible[0].id;
      state.activePhotoIdx = 0;
    }

    indexEl.innerHTML = visible.map((apt) => `
      <button
        type="button"
        class="folio-row ${apt.id === state.activeAptId ? "is-active" : ""}"
        data-apt-id="${apt.id}"
        aria-pressed="${apt.id === state.activeAptId}"
      >
        <div>
          <div class="folio-row-name">${apt.name[state.lang]}</div>
          <div class="folio-row-sub">${apt.tierLabel[state.lang]} · ${apt.capacity}</div>
        </div>
        <div class="folio-row-meta">
          <strong>${apt.size}</strong>
          <span>+ ${apt.terrace}</span>
        </div>
      </button>
    `).join("");

    const active = visible.find((a) => a.id === state.activeAptId) || visible[0];
    const mainPhoto = active.photos[state.activePhotoIdx] || active.photos[0];

    stageEl.innerHTML = `
      <div class="stage-photo-wrap">
        <img
          src="${mainPhoto}"
          alt="${active.name[state.lang]} — Bellavista Residencial Monte Pego"
          data-open-apt-lightbox
        >
      </div>
      <div class="stage-thumbs">
        ${active.photos.map((src, i) => `
          <button
            type="button"
            class="stage-thumb ${i === state.activePhotoIdx ? "is-active" : ""}"
            data-thumb-idx="${i}"
            aria-label="Foto ${i + 1} de ${active.name[state.lang]}"
          >
            <img src="${src}" alt="" loading="lazy">
          </button>
        `).join("")}
      </div>
      <div class="stage-body">
        <div class="stage-head">
          <h3 class="stage-title">${active.name[state.lang]}</h3>
          <span class="stage-tier">${active.tierLabel[state.lang]}</span>
        </div>
        <p class="stage-desc">${active.summary[state.lang]}</p>

        <dl class="stage-specs">
          <div><dt>Superficie y terraza</dt><dd>${active.size} + ${active.terrace}</dd></div>
          <div><dt>Capacidad máxima</dt><dd>${active.capacity}</dd></div>
          <div><dt>Acceso / Planta</dt><dd>${active.access}</dd></div>
          <div><dt>Climatización</dt><dd>${active.climate}</dd></div>
          <div><dt>Cocina</dt><dd>${active.kitchen}</dd></div>
          <div><dt>Baños</dt><dd>${active.baths}</dd></div>
        </dl>

        <ul class="stage-amenities">
          ${active.amenities.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <div class="stage-actions">
          <a href="${buildBookingUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn--terracota" data-dynamic-booking>
            ${t("room_check_btn")}
          </a>
          <a href="#ubicacion" class="btn btn--line">${t("room_ask_btn")}</a>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     Real Packages Ledger
     ------------------------------------------------------------------------ */
  function renderPackages() {
    const el = document.getElementById("packages-ledger");
    if (!el) return;
    el.innerHTML = DATA.packages.map((p) => `
      <article class="package-row">
        <div>
          <h3 class="package-name">${p.name[state.lang]}</h3>
          <div class="package-tag">${p.tag[state.lang]}</div>
        </div>
        <p class="package-desc">${p.desc[state.lang]}</p>
        <div>
          ${p.actionType === "booking"
            ? `<a href="${buildBookingUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn--terracota">${t("room_check_btn")}</a>`
            : `<a href="#ubicacion" class="btn btn--line-light">${t("room_ask_btn")}</a>`
          }
        </div>
      </article>
    `).join("");
  }

  /* ------------------------------------------------------------------------
     9 Real Attractions Interactive Explorer
     ------------------------------------------------------------------------ */
  function renderAttractions() {
    const listEl = document.getElementById("env-list");
    const featEl = document.getElementById("env-feature");
    if (!listEl || !featEl) return;

    listEl.innerHTML = DATA.attractions.map((a) => `
      <button
        type="button"
        class="env-btn ${a.id === state.activeAttrId ? "is-active" : ""}"
        data-attr-id="${a.id}"
        aria-pressed="${a.id === state.activeAttrId}"
      >
        <span class="env-btn-title">${a.title}</span>
        <span class="env-btn-dist">${a.dist}</span>
      </button>
    `).join("");

    const active = DATA.attractions.find((a) => a.id === state.activeAttrId) || DATA.attractions[0];
    featEl.innerHTML = `
      <div class="env-feature-img">
        <img src="${active.image}" alt="${active.title} — Costa Blanca" loading="lazy">
      </div>
      <div class="env-feature-dist">${active.dist}</div>
      <h3 class="env-feature-title">${active.title}</h3>
      <p class="env-feature-desc">${active.desc}</p>
    `;
  }

  /* ------------------------------------------------------------------------
     Real Photo Archive + Lightbox
     ------------------------------------------------------------------------ */
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
        <span class="archive-caption">${item.caption}</span>
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

  /* ------------------------------------------------------------------------
     Events
     ------------------------------------------------------------------------ */
  function bindEvents() {
    // Mobile drawer
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

    // Booking form submits to real TheBookingButton engine
    document.getElementById("hero-booking-form").addEventListener("submit", (e) => {
      e.preventDefault();
      window.open(buildBookingUrl(), "_blank", "noopener,noreferrer");
    });

    // Video modal trigger
    document.querySelectorAll("[data-open-video]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById("video-iframe").src = DATA.youtubeEmbed;
        document.getElementById("video-modal").hidden = false;
        document.body.style.overflow = "hidden";
      });
    });

    // Delegated clicks
    document.addEventListener("click", (e) => {
      const langBtn = e.target.closest(".lang-btn");
      if (langBtn) applyLang(langBtn.dataset.lang);

      const colTab = e.target.closest("[data-collection]");
      if (colTab) {
        state.collection = colTab.dataset.collection;
        document.querySelectorAll("[data-collection]").forEach((b) =>
          b.classList.toggle("is-active", b === colTab)
        );
        renderFolio();
      }

      const aptRow = e.target.closest("[data-apt-id]");
      if (aptRow) {
        state.activeAptId = aptRow.dataset.aptId;
        state.activePhotoIdx = 0;
        renderFolio();
      }

      const thumbBtn = e.target.closest("[data-thumb-idx]");
      if (thumbBtn) {
        state.activePhotoIdx = parseInt(thumbBtn.dataset.thumbIdx, 10);
        renderFolio();
      }

      if (e.target.closest("[data-open-apt-lightbox]")) {
        const apt = DATA.apartments.find((a) => a.id === state.activeAptId);
        if (apt) {
          openLightbox(
            apt.photos.map((src, i) => ({ image: src, caption: `${apt.name[state.lang]} (${i + 1}/${apt.photos.length})` })),
            state.activePhotoIdx
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

    // Lightbox prev/next
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

    // Contact form
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
    renderAttractions();
    renderGallery();
    applyLang("es");
    bindEvents();
  });
})();
