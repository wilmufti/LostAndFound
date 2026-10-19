const REPORTS_KEY = "lost-found-campus.reports";
const MESSAGES_KEY = "lost-found-campus.messages";
const CLAIM_KEY = "lost-found-campus.claim";

function readStore(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function notify(message) {
  let region = document.querySelector("[data-notice]");
  if (!region) {
    region = document.createElement("div");
    region.className = "notice";
    region.dataset.notice = "";
    region.setAttribute("role", "status");
    region.setAttribute("aria-live", "polite");
    document.body.append(region);
  }
  region.textContent = message;
  region.classList.add("is-visible");
  window.clearTimeout(notify.timeout);
  notify.timeout = window.setTimeout(() => region.classList.remove("is-visible"), 3200);
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a[href]").forEach((link) => {
    const linkPath = new URL(link.href, window.location.href).pathname.split("/").pop();
    if (linkPath === currentPath) link.setAttribute("aria-current", "page");
  });

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    nav.dataset.open = String(open);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  setOpen(false);
}

function setupModal() {
  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    const dialog = document.getElementById(button.dataset.modalOpen);
    if (!dialog) return;
    button.addEventListener("click", () => dialog.showModal());
    dialog.querySelectorAll("[data-modal-close]").forEach((closeButton) => {
      closeButton.addEventListener("click", () => dialog.close());
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}

function setupReportList() {
  const searchResults = document.querySelector("[data-search-results]");
  const tableBody = document.querySelector("table tbody");
  const filterForm = document.querySelector("[data-report-filter]");
  if (searchResults && filterForm) {
    const queryField = filterForm.querySelector("[type=search]");
    const locationField = filterForm.querySelector("select[name=lokasi]");
    const categoryFields = [...document.querySelectorAll("[data-filter-category]")];
    const locationChecks = [...document.querySelectorAll("[data-filter-location]")];
    const countLabel = document.querySelector("[data-result-count]");
    const params = new URLSearchParams(window.location.search);
    if (queryField) queryField.value = params.get("kata-kunci") || "";

    readStore(REPORTS_KEY, []).slice().reverse().forEach((report) => {
      const card = document.createElement("article");
      card.className = "listing-card";
      card.dataset.category = report.category || "aksesori";
      card.dataset.location = (report.location || "").toLocaleLowerCase("id");
      const image = document.createElement("a");
      image.className = "item-art item-art-wallet";
      image.href = `detail-laporan.html?id=${encodeURIComponent(report.id)}`;
      image.setAttribute("aria-label", report.name);
      image.textContent = "▰";
      const info = document.createElement("div");
      info.className = "listing-info";
      const heading = document.createElement("div");
      const title = document.createElement("h2");
      title.textContent = report.name;
      const badge = document.createElement("span");
      badge.className = "category-pill";
      badge.textContent = report.category || "BARANG";
      heading.append(title, badge);
      const location = document.createElement("p");
      location.textContent = `◉ ${report.location || "Lokasi belum dicantumkan"}`;
      const date = document.createElement("p");
      date.textContent = `◷ ${report.date || "Baru saja"}`;
      const link = document.createElement("a");
      link.href = `detail-laporan.html?id=${encodeURIComponent(report.id)}`;
      link.textContent = "Lihat Detail";
      info.append(heading, location, date, link);
      card.append(image, info);
      searchResults.prepend(card);
    });

    const applyCardFilters = () => {
      const query = (queryField?.value || "").trim().toLocaleLowerCase("id");
      const location = (locationField?.value || "semua").toLocaleLowerCase("id");
      const categories = categoryFields.filter((field) => field.checked).map((field) => field.value);
      const locations = locationChecks.filter((field) => field.checked).map((field) => field.value);
      const cards = [...searchResults.querySelectorAll(".listing-card")];
      let visible = 0;
      cards.forEach((card) => {
        const cardLocation = (card.dataset.location || "").toLocaleLowerCase("id");
        const matchesQuery = card.textContent.toLocaleLowerCase("id").includes(query);
        const matchesLocation = location === "semua" || cardLocation.includes(location);
        const matchesCategory = categories.length === 0 || categories.includes(card.dataset.category);
        const matchesCheckedLocation = locations.length === 0 || locations.some((value) => cardLocation.includes(value));
        const show = matchesQuery && matchesLocation && matchesCategory && matchesCheckedLocation;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (countLabel) countLabel.textContent = `Menampilkan ${visible} dari 128 barang temuan`;
    };

    filterForm.addEventListener("submit", (event) => { event.preventDefault(); applyCardFilters(); });
    filterForm.addEventListener("input", applyCardFilters);
    filterForm.addEventListener("change", applyCardFilters);
    document.querySelector("[data-apply-filter]")?.addEventListener("click", applyCardFilters);
    applyCardFilters();
    return;
  }
  if (!tableBody || !filterForm) return;

  const reports = readStore(REPORTS_KEY, []);
  reports.slice().reverse().forEach((report) => {
    const row = document.createElement("tr");
    row.dataset.kind = report.kind;
    [report.id, report.name, report.kind === "hilang" ? "Hilang" : "Temuan", report.location, "Baru", null].forEach((value, index) => {
      const cell = document.createElement("td");
      if (index === 5) {
        const link = document.createElement("a");
        link.href = `detail-laporan.html?id=${encodeURIComponent(report.id)}`;
        link.textContent = "Lihat detail";
        cell.append(link);
      } else {
        cell.textContent = value || "-";
      }
      row.append(cell);
    });
    tableBody.prepend(row);
  });

  const applyFilter = () => {
    const query = filterForm.querySelector("[type=search]").value.trim().toLocaleLowerCase("id");
    const kind = filterForm.querySelector("select").value;
    tableBody.querySelectorAll("tr").forEach((row) => {
      const matchesQuery = row.textContent.toLocaleLowerCase("id").includes(query);
      const matchesKind = kind === "semua" || row.dataset.kind === kind;
      row.hidden = !(matchesQuery && matchesKind);
    });
  };

  filterForm.addEventListener("submit", (event) => event.preventDefault());
  filterForm.addEventListener("input", applyFilter);
  filterForm.addEventListener("change", applyFilter);
}

function setupReportForm() {
  const form = document.querySelector("[data-report-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form));
    const kind = form.dataset.reportForm;
    const report = {
      id: `LF-${String(Date.now()).slice(-6)}`,
      kind,
      name: values["nama-barang"] || values["nama-temuan"] || "Barang",
      category: values.kategori || "lainnya",
      description: values["ciri-barang"] || values["deskripsi-temuan"] || "",
      location: values["lokasi-hilang"] || values["lokasi-temuan"] || "Belum dicantumkan",
      date: values["tanggal-hilang"] || values["tanggal-temuan"] || ""
    };
    const reports = readStore(REPORTS_KEY, []);
    reports.push(report);
    if (!writeStore(REPORTS_KEY, reports)) {
      notify("Penyimpanan browser tidak tersedia. Laporan belum tersimpan.");
      return;
    }
    form.reset();
    notify(`Laporan ${report.id} tersimpan di prototipe ini.`);
  });
}

function setupReportDetail() {
  const article = document.querySelector("main > article");
  const id = new URLSearchParams(window.location.search).get("id");
  if (!article || !id) return;
  const report = readStore(REPORTS_KEY, []).find((item) => item.id === id);
  if (!report) return;

  article.querySelector("h1").textContent = `Detail laporan ${report.id}`;
  const pairs = new Map([
    ["Nama barang", report.name],
    ["Jenis laporan", report.kind === "hilang" ? "Barang hilang" : "Barang ditemukan"],
    ["Lokasi", report.location],
    ["Tanggal", report.date || "Tidak dicantumkan"],
    ["Ciri khusus", report.description || "Tidak dicantumkan"]
  ]);
  article.querySelectorAll("dl dt").forEach((term) => {
    if (pairs.has(term.textContent)) term.nextElementSibling.textContent = pairs.get(term.textContent);
  });
}

function setupClaimForm() {
  const form = document.querySelector("[data-claim-form]");
  if (!form) return;
  const claim = readStore(CLAIM_KEY, null);
  if (claim) notify(`Jadwal pengambilan tersimpan: ${claim.date} pukul ${claim.time}.`);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form));
    const saved = writeStore(CLAIM_KEY, { date: values["tanggal-ambil"], time: values["jam-ambil"] });
    if (!saved) {
      notify("Penyimpanan browser tidak tersedia. Jadwal belum tersimpan.");
      return;
    }
    notify("Jadwal pengambilan berhasil disimpan.");
  });
}

function setupChat() {
  const history = document.querySelector("[data-chat-history]");
  const form = document.querySelector("[data-chat-form]");
  if (!history || !form) return;
  const messages = readStore(MESSAGES_KEY, []);
  const appendMessage = (message) => {
    const article = document.createElement("article");
    const author = document.createElement("h3");
    author.textContent = "Mahasiswa";
    const body = document.createElement("p");
    body.textContent = message;
    article.append(author, body);
    history.append(article);
  };
  messages.forEach(appendMessage);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const field = form.querySelector("textarea");
    const message = field.value.trim();
    if (!message) return;
    messages.push(message);
    if (!writeStore(MESSAGES_KEY, messages)) {
      notify("Penyimpanan browser tidak tersedia. Pesan belum tersimpan.");
      return;
    }
    appendMessage(message);
    form.reset();
    notify("Pesan ditambahkan ke percakapan demo.");
  });
}

function setupLogin() {
  if (!window.location.pathname.endsWith("masuk.html")) return;
  const form = document.querySelector("form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    notify("Mode demo: formulir masuk tidak mengirim data ke server.");
    window.setTimeout(() => window.location.assign("dashboard.html"), 900);
  });
}

setupMenu();
setupModal();
setupReportList();
setupReportForm();
setupReportDetail();
setupClaimForm();
setupChat();
setupLogin();
