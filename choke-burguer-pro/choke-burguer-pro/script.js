const STORE_SLUG = "chokoburguer";
const ORDER_URL = `https://pedido.anota.ai/loja/${STORE_SLUG}`;
const TOKEN_ENDPOINT = `https://api.anota.ai/noauth/access/get-token/${STORE_SLUG}`;
const MENU_ENDPOINT = "https://api.anota.ai/clientauth/nm-category/menu-merchant?displaySources=DIGITAL_MENU";
const CACHE_KEY = "choke-burguer-live-catalog-v2";

const FALLBACK_STORE = {
  name: "Choke Burguer",
  slug: STORE_SLUG,
  orderUrl: ORDER_URL,
  whatsapp: "5511947856919",
  phoneDisplay: "(11) 9 9818-3695",
  pageImage: "https://staginganotaai.s3.us-west-2.amazonaws.com/produtos/63ed187ad3accd0018c370d51769090058238blob",
  minimumOrder: 10,
  deliveryTime: { min: 40, max: 50 },
  pickupTime: { min: 20, max: 41 },
  modes: { delivery: true, takeout: true, onsite: true },
  paymentMethods: ["Dinheiro", "Crédito"],
  address: {
    street: "Rua Mem de Sá, 176",
    neighborhood: "Vila Santa Helena",
    city: "Poá",
    state: "SP",
    zipCode: "08.553-550",
    full: "Rua Mem de Sá, 176 - Vila Santa Helena, Poá - SP, 08.553-550, Brasil",
  },
  deliveryFees: [
    { label: "Até 0,3 km", price: 3 },
    { label: "Até 0,8 km", price: 4 },
    { label: "Até 2,5 km", price: 5 },
    { label: "Até 4 km", price: 8 },
    { label: "Até 5 km", price: 12 },
  ],
  schedule: [
    { day: "sun", schedules: [] },
    { day: "mon", schedules: [{ start: "10:30", end: "15:00" }] },
    { day: "tue", schedules: [{ start: "10:30", end: "15:00" }] },
    { day: "wed", schedules: [{ start: "10:31", end: "15:00" }] },
    { day: "thu", schedules: [{ start: "10:30", end: "15:00" }] },
    {
      day: "fri",
      schedules: [
        { start: "10:30", end: "15:00" },
        { start: "18:00", end: "23:00" },
      ],
    },
    {
      day: "sat",
      schedules: [
        { start: "10:30", end: "15:00" },
        { start: "18:00", end: "23:00" },
      ],
    },
  ],
  timezone: "America/Sao_Paulo",
  showOutItems: false,
};

const CATEGORY_THEMES = {
  doces: { accent: "#ff5a36", soft: "#fff0e8", border: "#ffd5c9" },
  acai: { accent: "#d63c6f", soft: "#fff1f5", border: "#f4cada" },
  bebidas: { accent: "#2664ff", soft: "#eef4ff", border: "#d5e2ff" },
  sorvetes: { accent: "#12b36d", soft: "#edfff6", border: "#ccefdc" },
  default: { accent: "#ffb02e", soft: "#fff7e8", border: "#ffe6b5" },
};

const DAY_LABELS = {
  sun: "Domingo",
  mon: "Segunda",
  tue: "Terça",
  wed: "Quarta",
  thu: "Quinta",
  fri: "Sexta",
  sat: "Sábado",
};

const SCHEMA_DAY = {
  sun: "https://schema.org/Sunday",
  mon: "https://schema.org/Monday",
  tue: "https://schema.org/Tuesday",
  wed: "https://schema.org/Wednesday",
  thu: "https://schema.org/Thursday",
  fri: "https://schema.org/Friday",
  sat: "https://schema.org/Saturday",
};

const refs = {
  currentYear: document.getElementById("currentYear"),
  menuToggle: document.getElementById("menuToggle"),
  mainNav: document.getElementById("mainNav"),
  navLinks: Array.from(document.querySelectorAll(".nav__link")),
  sections: Array.from(document.querySelectorAll("main section[id]")),
  revealElements: Array.from(document.querySelectorAll(".reveal")),
  statusPill: document.getElementById("statusPill"),
  heroDescription: document.getElementById("heroDescription"),
  primaryOrderLink: document.getElementById("primaryOrderLink"),
  heroWhatsappLink: document.getElementById("heroWhatsappLink"),
  headerOrderLink: document.getElementById("headerOrderLink"),
  headerWhatsappLink: document.getElementById("headerWhatsappLink"),
  contactOrderLink: document.getElementById("contactOrderLink"),
  contactWhatsappLink: document.getElementById("contactWhatsappLink"),
  footerOrderLink: document.getElementById("footerOrderLink"),
  floatingOrderLink: document.getElementById("floatingOrderLink"),
  mapLink: document.getElementById("mapLink"),
  metricAvailableValue: document.getElementById("metricAvailableValue"),
  metricAvailableLabel: document.getElementById("metricAvailableLabel"),
  metricProductsValue: document.getElementById("metricProductsValue"),
  metricProductsLabel: document.getElementById("metricProductsLabel"),
  metricDeliveryValue: document.getElementById("metricDeliveryValue"),
  metricDeliveryLabel: document.getElementById("metricDeliveryLabel"),
  heroImageMain: document.getElementById("heroImageMain"),
  heroImageSecondary: document.getElementById("heroImageSecondary"),
  heroImageTertiary: document.getElementById("heroImageTertiary"),
  heroImageLabelMain: document.getElementById("heroImageLabelMain"),
  heroImageLabelSecondary: document.getElementById("heroImageLabelSecondary"),
  heroImageLabelTertiary: document.getElementById("heroImageLabelTertiary"),
  heroPanelHeadline: document.getElementById("heroPanelHeadline"),
  heroPanelText: document.getElementById("heroPanelText"),
  heroMinimumOrder: document.getElementById("heroMinimumOrder"),
  heroDeliveryWindow: document.getElementById("heroDeliveryWindow"),
  heroPickupWindow: document.getElementById("heroPickupWindow"),
  heroPayments: document.getElementById("heroPayments"),
  highlightModesValue: document.getElementById("highlightModesValue"),
  highlightModesLabel: document.getElementById("highlightModesLabel"),
  highlightDeliveryValue: document.getElementById("highlightDeliveryValue"),
  highlightDeliveryLabel: document.getElementById("highlightDeliveryLabel"),
  highlightPickupValue: document.getElementById("highlightPickupValue"),
  highlightPickupLabel: document.getElementById("highlightPickupLabel"),
  highlightPaymentValue: document.getElementById("highlightPaymentValue"),
  highlightPaymentLabel: document.getElementById("highlightPaymentLabel"),
  categoryGrid: document.getElementById("categoryGrid"),
  syncBadge: document.getElementById("syncBadge"),
  filterTabs: document.getElementById("filterTabs"),
  availableOnly: document.getElementById("availableOnly"),
  searchInput: document.getElementById("searchInput"),
  resultsSummary: document.getElementById("resultsSummary"),
  retryButton: document.getElementById("retryButton"),
  loadingState: document.getElementById("loadingState"),
  menuGrid: document.getElementById("menuGrid"),
  emptyState: document.getElementById("emptyState"),
  deliveryFacts: document.getElementById("deliveryFacts"),
  feeList: document.getElementById("feeList"),
  hoursHeadline: document.getElementById("hoursHeadline"),
  hoursDescription: document.getElementById("hoursDescription"),
  scheduleList: document.getElementById("scheduleList"),
  contactDescription: document.getElementById("contactDescription"),
  addressLine: document.getElementById("addressLine"),
  addressFull: document.getElementById("addressFull"),
  phoneDisplay: document.getElementById("phoneDisplay"),
  contactStatus: document.getElementById("contactStatus"),
  contactStatusDetail: document.getElementById("contactStatusDetail"),
  orderChannelLine: document.getElementById("orderChannelLine"),
  modal: document.getElementById("itemModal"),
  modalImage: document.getElementById("modalImage"),
  modalCategory: document.getElementById("modalCategory"),
  modalStatus: document.getElementById("modalStatus"),
  modalTitle: document.getElementById("modalTitle"),
  modalDescription: document.getElementById("modalDescription"),
  modalPrice: document.getElementById("modalPrice"),
  modalPriceNote: document.getElementById("modalPriceNote"),
  modalOptions: document.getElementById("modalOptions"),
  modalPrimaryAction: document.getElementById("modalPrimaryAction"),
  modalSecondaryAction: document.getElementById("modalSecondaryAction"),
  closeModalElements: Array.from(document.querySelectorAll("[data-close-modal]")),
  structuredData: document.getElementById("structuredData"),
};

const state = {
  data: {
    store: FALLBACK_STORE,
    categories: [],
    items: [],
    lastUpdated: null,
    source: "fallback",
  },
  activeCategory: "all",
  search: "",
  availableOnly: !FALLBACK_STORE.showOutItems,
  loading: true,
  error: "",
  modalItem: null,
};

let revealObserver = null;

refs.currentYear.textContent = new Date().getFullYear();
refs.availableOnly.checked = state.availableOnly;

initMenuToggle();
initReveal();
bindEvents();
renderAll();
hydrateFromCache();
loadCatalog();

function bindEvents() {
  refs.filterTabs.addEventListener("click", handleFilterTabClick);
  refs.availableOnly.addEventListener("change", handleAvailabilityToggle);
  refs.searchInput.addEventListener("input", handleSearchInput);
  refs.retryButton.addEventListener("click", () => loadCatalog(true));
  refs.menuGrid.addEventListener("click", handleMenuGridClick);
  refs.categoryGrid.addEventListener("click", handleCategoryCardClick);

  refs.closeModalElements.forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && refs.modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  window.addEventListener("scroll", updateActiveNav);
  window.addEventListener("resize", updateActiveNav);
}

function initReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  refs.revealElements.forEach((element) => revealObserver.observe(element));
}

function refreshReveal() {
  const dynamicReveal = document.querySelectorAll(".reveal:not(.is-visible)");
  dynamicReveal.forEach((element) => revealObserver.observe(element));
}

function initMenuToggle() {
  refs.menuToggle.addEventListener("click", () => {
    const isOpen = refs.mainNav.classList.toggle("is-open");
    refs.menuToggle.classList.toggle("is-open", isOpen);
    refs.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  refs.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      refs.mainNav.classList.remove("is-open");
      refs.menuToggle.classList.remove("is-open");
      refs.menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function handleFilterTabClick(event) {
  const button = event.target.closest(".filter-tab");
  if (!button) return;
  state.activeCategory = button.dataset.filter;
  renderFilterTabs();
  renderCatalog();
}

function handleAvailabilityToggle(event) {
  state.availableOnly = event.target.checked;
  renderCatalog();
}

function handleSearchInput(event) {
  state.search = event.target.value;
  renderCatalog();
}

function handleMenuGridClick(event) {
  const button = event.target.closest("[data-view-item]");
  if (!button) return;
  const item = state.data.items.find((entry) => entry.id === button.dataset.viewItem);
  if (!item) return;
  openModal(item);
}

function handleCategoryCardClick(event) {
  const button = event.target.closest("[data-filter-category]");
  if (!button) return;
  state.activeCategory = button.dataset.filterCategory;
  renderFilterTabs();
  renderCatalog();
  document.getElementById("cardapio").scrollIntoView({ behavior: "smooth", block: "start" });
}

function hydrateFromCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return;
    const cached = JSON.parse(raw);
    if (!cached?.items?.length) return;
    state.data = { ...cached, source: "cache" };
    state.loading = false;
    state.error = "";
    state.availableOnly = !cached.store.showOutItems;
    refs.availableOnly.checked = state.availableOnly;
    renderAll();
  } catch (error) {
    console.error("Cache de catálogo inválido:", error);
  }
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Não foi possível salvar o catálogo em cache:", error);
  }
}

async function loadCatalog(forceLoading = false) {
  state.loading = forceLoading || !state.data.items.length;
  state.error = "";
  renderCatalog();
  updateSyncBadge();

  try {
    const tokenResponse = await fetch(TOKEN_ENDPOINT, { cache: "no-store" });
    if (!tokenResponse.ok) {
      throw new Error("Não foi possível autenticar a leitura do catálogo.");
    }

    const tokenPayload = await tokenResponse.json();
    if (!tokenPayload?.token) {
      throw new Error("Token público do catálogo não encontrado.");
    }

    const menuResponse = await fetch(MENU_ENDPOINT, {
      headers: { Authorization: tokenPayload.token },
      cache: "no-store",
    });

    if (!menuResponse.ok) {
      throw new Error("A API do cardápio não respondeu como esperado.");
    }

    const payload = await menuResponse.json();
    const transformed = transformPayload(payload);

    state.data = { ...transformed, source: "live" };
    state.loading = false;
    state.error = "";
    state.availableOnly = !state.data.store.showOutItems;
    refs.availableOnly.checked = state.availableOnly;
    saveCache(state.data);
    renderAll();
  } catch (error) {
    console.error(error);
    state.loading = false;
    state.error = "Não foi possível atualizar o catálogo agora.";

    if (!state.data.items.length) {
      state.data = {
        store: FALLBACK_STORE,
        categories: [],
        items: [],
        lastUpdated: null,
        source: "fallback",
      };
    }

    renderAll();
  }
}

function transformPayload(payload) {
  const establishment = payload?.data?.establishment || {};
  const menu = payload?.data?.menu?.menu || [];
  const aux = payload?.data?.menu?.menu_aux || [];
  const optionMap = new Map(aux.map((group) => [group.category_id, group]));
  const categoryMap = new Map();
  const items = [];

  menu.forEach((category, categoryIndex) => {
    const label = normalizeCategory(category.title);
    const slug = slugify(label);

    if (!categoryMap.has(slug)) {
      categoryMap.set(slug, {
        slug,
        label,
        order: categoryIndex,
        total: 0,
        available: 0,
        image: "",
        availableImage: "",
      });
    }

    const categoryEntry = categoryMap.get(slug);

    (category.itens || []).forEach((item, itemIndex) => {
      const optionGroups = mapOptionGroups(item.next_steps || [], optionMap);
      const basePrice = Number(item.price) || 0;
      const requiredCost = optionGroups.reduce((sum, group) => sum + group.requiredCost, 0);
      const fallbackStart =
        basePrice === 0 && requiredCost === 0
          ? optionGroups.reduce((smallest, group) => {
              if (!group.fallbackStart) return smallest;
              if (!smallest) return group.fallbackStart;
              return Math.min(smallest, group.fallbackStart);
            }, 0)
          : 0;

      const image = item.image || establishment.page?.image || FALLBACK_STORE.pageImage;

      items.push({
        id: String(item.item_id || item._id),
        name: item.title || "Produto",
        category: label,
        categorySlug: slug,
        description: item.description || "",
        image,
        available: !item.out,
        basePrice,
        startingPrice: basePrice + requiredCost + fallbackStart,
        hasOptions: optionGroups.length > 0,
        optionGroups,
        categoryOrder: categoryEntry.order,
        itemOrder: typeof item.order === "number" ? item.order : itemIndex,
      });

      categoryEntry.total += 1;
      if (!item.out) {
        categoryEntry.available += 1;
        if (!categoryEntry.availableImage) {
          categoryEntry.availableImage = image;
        }
      }

      if (!categoryEntry.image) {
        categoryEntry.image = image;
      }
    });
  });

  const store = {
    ...FALLBACK_STORE,
    whatsapp: sanitizeWhatsapp(establishment.whatsapp || FALLBACK_STORE.whatsapp),
    phoneDisplay:
      formatPhone(establishment.units?.[0]?.phones?.[0]?.number || establishment.whatsapp) || FALLBACK_STORE.phoneDisplay,
    pageImage: establishment.page?.image || FALLBACK_STORE.pageImage,
    minimumOrder: Number(establishment.minimum_order_amount) || FALLBACK_STORE.minimumOrder,
    deliveryTime: {
      min: establishment.units?.[0]?.time_delivery_min || FALLBACK_STORE.deliveryTime.min,
      max: establishment.units?.[0]?.time_delivery_max || FALLBACK_STORE.deliveryTime.max,
    },
    pickupTime: {
      min: establishment.units?.[0]?.time_take_min || FALLBACK_STORE.pickupTime.min,
      max: establishment.units?.[0]?.time_take_max || FALLBACK_STORE.pickupTime.max,
    },
    modes: {
      delivery: Boolean(establishment.units?.[0]?.acceptDelivery),
      takeout: Boolean(establishment.units?.[0]?.acceptTake),
      onsite: Boolean(establishment.units?.[0]?.acceptLocal),
    },
    paymentMethods: buildPaymentMethods(establishment.units?.[0]?.payment_method),
    address: {
      street: `${establishment.units?.[0]?.address?.name || ""}, ${establishment.units?.[0]?.address?.num || ""}`.trim(),
      neighborhood: establishment.units?.[0]?.address?.neighborhood || FALLBACK_STORE.address.neighborhood,
      city: establishment.units?.[0]?.address?.city || FALLBACK_STORE.address.city,
      state: establishment.units?.[0]?.address?.state || FALLBACK_STORE.address.state,
      zipCode: establishment.units?.[0]?.address?.postal_code || FALLBACK_STORE.address.zipCode,
      full: establishment.units?.[0]?.address?.addressFormated || FALLBACK_STORE.address.full,
    },
    deliveryFees: (establishment.units?.[0]?.regions || FALLBACK_STORE.deliveryFees).map((region) => ({
      label: `Até ${String(region.name).replace(".", ",")} km`,
      price: Number(region.price) || 0,
    })),
    schedule: (establishment.units?.[0]?.week || FALLBACK_STORE.schedule).map((entry) => ({
      day: entry.short_name || entry.day,
      schedules: entry.schedules || [],
    })),
    timezone: establishment.units?.[0]?.timezone || FALLBACK_STORE.timezone,
    showOutItems: Boolean(establishment.webview?.show_out_items),
  };

  const categories = Array.from(categoryMap.values())
    .sort((left, right) => left.order - right.order)
    .map((category) => ({
      slug: category.slug,
      label: category.label,
      total: category.total,
      available: category.available,
      image: category.availableImage || category.image || store.pageImage,
    }));

  items.sort((left, right) => {
    if (left.categoryOrder !== right.categoryOrder) {
      return left.categoryOrder - right.categoryOrder;
    }

    if (left.itemOrder !== right.itemOrder) {
      return left.itemOrder - right.itemOrder;
    }

    return left.name.localeCompare(right.name, "pt-BR");
  });

  return {
    store,
    categories,
    items,
    lastUpdated: payload?.data?.menu?.updated_at || establishment?.s3_last_update_date || new Date().toISOString(),
  };
}

function mapOptionGroups(steps, optionMap) {
  return steps
    .map((step) => {
      const group = optionMap.get(step.category);
      if (!group) return null;

      const choices = (group.itens || []).map((choice) => ({
        name: choice.title || "Opção",
        price: Number(choice.price) || 0,
        available: !choice.out,
      }));

      const effectiveChoices = choices.filter((choice) => choice.available);
      const pricePool = (effectiveChoices.length ? effectiveChoices : choices)
        .map((choice) => choice.price)
        .sort((left, right) => left - right);

      const min = Number(step.min) || 0;
      const max = Number(step.max) || 0;

      return {
        id: String(group.category_id),
        title: toSentenceCase(group.title || "Opções"),
        min,
        max,
        optionCount: choices.length,
        availableCount: effectiveChoices.length,
        requiredCost: min > 0 ? pricePool.slice(0, min).reduce((sum, price) => sum + price, 0) : 0,
        fallbackStart: min === 0 && pricePool.length ? pricePool[0] : 0,
        choices: choices.slice(0, 8),
      };
    })
    .filter(Boolean);
}

function renderAll() {
  renderStoreInfo();
  renderCategories();
  renderFilterTabs();
  renderCatalog();
  renderDeliverySection();
  renderContactSection();
  updateStructuredData();
  updateActiveNav();
  refreshReveal();
}

function renderStoreInfo() {
  const { store, items, categories } = state.data;
  const availableItems = items.filter((item) => item.available);
  const storeStatus = getStoreStatus(store.schedule, store.timezone);
  const deliveryModes = buildModeLabel(store.modes);
  const heroImages = pickHeroImages(items, store.pageImage);

  refs.statusPill.textContent = storeStatus.label;
  refs.statusPill.dataset.status = storeStatus.open ? "open" : "closed";

  refs.heroDescription.textContent = items.length
    ? `Cardápio completo da Choke Burguer com ${items.length} produtos em ${categories.length || 0} categorias, disponibilidade atual e atalhos rápidos para pedir.`
    : "A Choke Burguer reúne aqui cardápio, horários, atendimento e delivery para facilitar o seu pedido.";

  refs.metricAvailableValue.textContent = String(availableItems.length);
  refs.metricAvailableLabel.textContent = "itens disponíveis agora";
  refs.metricProductsValue.textContent = String(items.length || categories.length || 0);
  refs.metricProductsLabel.textContent = items.length ? "produtos no cardápio" : "categorias prontas";
  refs.metricDeliveryValue.textContent = formatRange(store.deliveryTime.min, store.deliveryTime.max);
  refs.metricDeliveryLabel.textContent = "tempo de entrega";

  applyImage(refs.heroImageMain, heroImages[0]?.image || store.pageImage, heroImages[0]?.name || "Destaques da casa");
  applyImage(refs.heroImageSecondary, heroImages[1]?.image || store.pageImage, heroImages[1]?.name || "Delivery local");
  applyImage(refs.heroImageTertiary, heroImages[2]?.image || store.pageImage, heroImages[2]?.name || "Pedido rápido");

  refs.heroImageLabelMain.textContent = heroImages[0]?.name || "Destaques da casa";
  refs.heroImageLabelSecondary.textContent = heroImages[1]?.name || "Delivery local";
  refs.heroImageLabelTertiary.textContent = heroImages[2]?.name || "Pedido rápido";

  refs.heroPanelHeadline.textContent = deliveryModes;
  refs.heroPanelText.textContent = storeStatus.open
    ? `A loja está aberta agora e o site já destaca os itens disponíveis para deixar o pedido mais rápido.`
    : `A loja está ${storeStatus.shortLabel.toLowerCase()} no momento, mas o site continua pronto para navegação, contato e próximo pedido.`;
  refs.heroMinimumOrder.textContent = formatCurrency(store.minimumOrder);
  refs.heroDeliveryWindow.textContent = `${store.deliveryTime.min} a ${store.deliveryTime.max} min`;
  refs.heroPickupWindow.textContent = `${store.pickupTime.min} a ${store.pickupTime.max} min`;
  refs.heroPayments.textContent = store.paymentMethods.join(" e ");

  refs.highlightModesValue.textContent = deliveryModes;
  refs.highlightModesLabel.textContent = "Canais ativos para pedido e consumo.";
  refs.highlightDeliveryValue.textContent = `${store.deliveryTime.min} a ${store.deliveryTime.max} min`;
  refs.highlightDeliveryLabel.textContent = "Estimativa atual para o delivery.";
  refs.highlightPickupValue.textContent = `${store.pickupTime.min} a ${store.pickupTime.max} min`;
  refs.highlightPickupLabel.textContent = "Tempo estimado para retirada.";
  refs.highlightPaymentValue.textContent = store.paymentMethods.join(" e ");
  refs.highlightPaymentLabel.textContent = "Formas de pagamento aceitas.";

  const genericMessage = createWhatsAppMessage("Olá! Quero fazer um pedido na Choke Burguer.");
  const genericWhatsappLink = createWhatsAppLink(store.whatsapp, genericMessage);
  const mapUrl = buildMapsUrl(store.address.full);

  [
    refs.primaryOrderLink,
    refs.headerOrderLink,
    refs.contactOrderLink,
    refs.footerOrderLink,
    refs.floatingOrderLink,
    refs.modalSecondaryAction,
  ].forEach((link) => {
    link.href = store.orderUrl;
  });

  [refs.heroWhatsappLink, refs.headerWhatsappLink, refs.contactWhatsappLink].forEach((link) => {
    link.href = genericWhatsappLink;
  });

  refs.mapLink.href = mapUrl;
  refs.phoneDisplay.textContent = store.phoneDisplay;

  updateSyncBadge();
}

function renderCategories() {
  if (!state.data.categories.length) {
    refs.categoryGrid.innerHTML = `
      <article class="category-card" style="--accent:#2664ff;--soft:#eef4ff;--border:#d5e2ff;">
        <div class="category-card__top">
          <span class="category-card__badge">Cardápio em atualização</span>
          <span class="category-card__count">Aguarde</span>
        </div>
        <h3>Preparando categorias</h3>
        <p>Assim que os dados forem carregados, as categorias aparecem aqui com imagem, volume de itens e disponibilidade.</p>
      </article>
    `;
    return;
  }

  refs.categoryGrid.innerHTML = state.data.categories
    .map((category) => {
      const theme = getCategoryTheme(category.slug);
      const availabilityText = category.available
        ? `${category.available} disponíveis agora`
        : "Sem itens disponíveis agora";

      return `
        <button
          class="category-card reveal is-visible"
          type="button"
          data-filter-category="${category.slug}"
          style="--accent:${theme.accent};--soft:${theme.soft};--border:${theme.border};"
        >
          <div class="category-card__top">
            <span class="category-card__badge">${escapeHtml(category.label)}</span>
            <span class="category-card__count">${category.total} itens</span>
          </div>

          <h3>${escapeHtml(category.label)}</h3>
          <p>Filtro rápido para chegar nos produtos da categoria e acelerar a escolha.</p>

          <div class="category-card__footer">
            <span class="category-card__availability">${escapeHtml(availabilityText)}</span>
            <div class="category-card__image">
              <img src="${escapeHtml(category.image || FALLBACK_STORE.pageImage)}" alt="${escapeHtml(category.label)}" onerror="this.src='assets/logo.png';this.onerror=null;" />
            </div>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderFilterTabs() {
  const availableFilters = ["all", ...state.data.categories.map((category) => category.slug)];
  if (!availableFilters.includes(state.activeCategory)) {
    state.activeCategory = "all";
  }

  const tabs = [{ slug: "all", label: "Todos" }, ...state.data.categories];

  refs.filterTabs.innerHTML = tabs
    .map((tab) => {
      const isActive = state.activeCategory === tab.slug;
      const count = tab.slug === "all" ? state.data.items.length : state.data.items.filter((item) => item.categorySlug === tab.slug).length;

      return `
        <button
          class="filter-tab ${isActive ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${String(isActive)}"
          data-filter="${tab.slug}"
        >
          ${escapeHtml(tab.label)} · ${count}
        </button>
      `;
    })
    .join("");
}

function renderCatalog() {
  const filteredItems = getFilteredItems();
  const totalItems = state.data.items.length;
  const hasItems = filteredItems.length > 0;
  const showingSkeleton = state.loading && !totalItems;

  refs.loadingState.classList.toggle("is-visible", showingSkeleton);
  refs.menuGrid.classList.toggle("is-hidden", showingSkeleton);
  refs.emptyState.classList.toggle("is-visible", !showingSkeleton && !hasItems && !state.error);
  refs.retryButton.classList.toggle("is-hidden", !state.error);

  if (showingSkeleton) {
    refs.resultsSummary.textContent = "Atualizando cardápio...";
    refs.menuGrid.innerHTML = "";
    return;
  }

  if (!totalItems && state.error) {
    refs.resultsSummary.textContent = `${state.error} Você ainda pode usar o WhatsApp e o link do delivery.`;
    refs.menuGrid.innerHTML = "";
    return;
  }

  if (!totalItems) {
    refs.resultsSummary.textContent = "Nenhum produto disponível no momento.";
    refs.menuGrid.innerHTML = "";
    return;
  }

  refs.resultsSummary.textContent = buildResultsSummary(filteredItems.length, totalItems);

  refs.menuGrid.innerHTML = filteredItems
    .map((item) => {
      const theme = getCategoryTheme(item.categorySlug);
      const description = item.description || "Item disponível no cardápio da Choke Burguer.";
      const optionTags = item.optionGroups
        .slice(0, 2)
        .map((group) => `<span class="menu-tag">${escapeHtml(group.title)}</span>`)
        .join("");
      const statusLabel = item.available ? "Disponível" : "Indisponível";
      const actionLabel = item.available ? "WhatsApp" : "Consultar";

      return `
        <article
          class="menu-card ${item.available ? "" : "is-unavailable"}"
          style="--accent:${theme.accent};--soft:${theme.soft};--border:${theme.border};"
        >
          <div class="menu-card__image">
            <span class="menu-card__availability" data-status="${item.available ? "available" : "unavailable"}">
              ${statusLabel}
            </span>
            <img src="${escapeHtml(item.image || FALLBACK_STORE.pageImage)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.src='assets/logo.png';this.onerror=null;" />
          </div>

          <div class="menu-card__body">
            <div class="menu-card__meta">
              <span class="menu-card__category">${escapeHtml(item.category)}</span>
              ${item.hasOptions ? '<span class="menu-card__custom">Personalizável</span>' : ""}
            </div>

            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(description)}</p>

            <div class="menu-card__tags">
              ${optionTags}
              ${item.hasOptions ? `<span class="menu-tag">${item.optionGroups.length} grupo${item.optionGroups.length > 1 ? "s" : ""}</span>` : ""}
            </div>

            <div class="menu-card__footer">
              <div class="menu-card__price-wrap">
                <strong class="menu-card__price">${escapeHtml(getPriceLabel(item))}</strong>
                <span class="menu-card__price-note">${escapeHtml(getPriceNote(item))}</span>
              </div>

              <div class="menu-card__actions">
                <button class="icon-button" type="button" data-view-item="${escapeHtml(item.id)}">Detalhes</button>
                <a class="icon-button icon-button--primary" href="${escapeHtml(createItemWhatsappLink(item))}" target="_blank" rel="noreferrer">${actionLabel}</a>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDeliverySection() {
  const { store } = state.data;
  const storeStatus = getStoreStatus(store.schedule, store.timezone);
  const deliveryModes = buildModeLabel(store.modes);

  refs.deliveryFacts.innerHTML = `
    <article class="info-card">
      <span>Pedido mínimo</span>
      <strong>${formatCurrency(store.minimumOrder)}</strong>
      <p>Valor mínimo atual para pedidos no delivery.</p>
    </article>
    <article class="info-card">
      <span>Entrega</span>
      <strong>${store.deliveryTime.min} a ${store.deliveryTime.max} min</strong>
      <p>Previsão média informada para a entrega.</p>
    </article>
    <article class="info-card">
      <span>Retirada</span>
      <strong>${store.pickupTime.min} a ${store.pickupTime.max} min</strong>
      <p>Tempo estimado para retirar na unidade.</p>
    </article>
    <article class="info-card">
      <span>Canais ativos</span>
      <strong>${escapeHtml(deliveryModes)}</strong>
      <p>${escapeHtml(storeStatus.detail)}</p>
    </article>
  `;

  refs.feeList.innerHTML = store.deliveryFees
    .map(
      (fee) => `
        <div class="fee-item">
          <span>${escapeHtml(fee.label)}</span>
          <strong>${formatCurrency(fee.price)}</strong>
        </div>
      `
    )
    .join("");

  refs.hoursHeadline.textContent = storeStatus.open ? "Loja aberta agora" : "Loja fechada no momento";
  refs.hoursDescription.textContent = storeStatus.detail;
  refs.scheduleList.innerHTML = store.schedule
    .map((entry) => {
      const period = entry.schedules.length
        ? entry.schedules.map((range) => `${range.start} às ${range.end}`).join(" · ")
        : "Fechado";

      return `
        <div class="schedule-item">
          <strong>${DAY_LABELS[entry.day] || entry.day}</strong>
          <span>${escapeHtml(period)}</span>
        </div>
      `;
    })
    .join("");
}

function renderContactSection() {
  const { store } = state.data;
  const status = getStoreStatus(store.schedule, store.timezone);
  const mapUrl = buildMapsUrl(store.address.full);

  refs.contactDescription.textContent = `Endereço, delivery, WhatsApp e funcionamento organizados para que o cliente escolha como pedir em poucos segundos.`;
  refs.addressLine.textContent = store.address.street;
  refs.addressFull.textContent = `${store.address.neighborhood}, ${store.address.city} - ${store.address.state}`;
  refs.phoneDisplay.textContent = store.phoneDisplay;
  refs.contactStatus.textContent = status.label;
  refs.contactStatusDetail.textContent = status.detail;
  refs.orderChannelLine.textContent = store.orderUrl.replace("https://", "");
  refs.mapLink.href = mapUrl;
}

function updateSyncBadge() {
  const { source, lastUpdated } = state.data;

  if (state.loading) {
    refs.syncBadge.textContent = "Atualizando cardápio...";
    refs.syncBadge.dataset.source = "loading";
    return;
  }

  if (state.error && source === "cache") {
    refs.syncBadge.textContent = "Exibindo última versão salva";
    refs.syncBadge.dataset.source = "cache";
    return;
  }

  if (state.error && source === "fallback") {
    refs.syncBadge.textContent = "Informações essenciais disponíveis";
    refs.syncBadge.dataset.source = "fallback";
    return;
  }

  if (source === "live") {
    refs.syncBadge.textContent = lastUpdated
      ? `Cardápio atualizado · ${formatDate(lastUpdated)}`
      : "Cardápio atualizado";
    refs.syncBadge.dataset.source = "live";
    return;
  }

  if (source === "cache") {
    refs.syncBadge.textContent = lastUpdated
      ? `Última versão salva · ${formatDate(lastUpdated)}`
      : "Última versão salva";
    refs.syncBadge.dataset.source = "cache";
    return;
  }

  refs.syncBadge.textContent = "Cardápio em preparação";
  refs.syncBadge.dataset.source = "fallback";
}

function openModal(item) {
  state.modalItem = item;
  refs.modalCategory.textContent = item.category;
  refs.modalStatus.textContent = item.available ? "Disponível" : "Indisponível";
  refs.modalStatus.dataset.status = item.available ? "open" : "closed";
  refs.modalTitle.textContent = item.name;
  refs.modalDescription.textContent = item.description || "Item disponível no cardápio atual da loja.";
  refs.modalPrice.textContent = getPriceLabel(item);
  refs.modalPriceNote.textContent = getPriceNote(item);

  applyImage(refs.modalImage, item.image || state.data.store.pageImage, item.name);

  refs.modalOptions.innerHTML = item.optionGroups.length
    ? item.optionGroups
        .map((group) => {
          const chips = group.choices
            .map((choice) => {
              const extra = choice.price > 0 ? ` · ${formatCurrency(choice.price)}` : "";
              return `<span class="option-chip ${choice.available ? "" : "is-out"}">${escapeHtml(choice.name + extra)}</span>`;
            })
            .join("");

          return `
            <section class="modal__option-group">
              <strong>${escapeHtml(group.title)}</strong>
              <p>${escapeHtml(buildGroupRule(group))}</p>
              <div class="option-chip-list">${chips}</div>
            </section>
          `;
        })
        .join("")
    : `
        <section class="modal__option-group">
          <strong>Pronto para pedido</strong>
          <p>Este item não traz escolhas adicionais no cardápio exibido no momento.</p>
        </section>
      `;

  refs.modalPrimaryAction.textContent = item.available ? "Pedir no WhatsApp" : "Consultar no WhatsApp";
  refs.modalPrimaryAction.href = createItemWhatsappLink(item);
  refs.modalSecondaryAction.href = state.data.store.orderUrl;

  refs.modal.classList.add("is-open");
  refs.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  refs.modal.classList.remove("is-open");
  refs.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.modalItem = null;
}

function getFilteredItems() {
  const searchTerm = normalizeText(state.search);

  return state.data.items.filter((item) => {
    const matchesCategory = state.activeCategory === "all" || item.categorySlug === state.activeCategory;
    const matchesAvailability = !state.availableOnly || item.available;
    const haystack = normalizeText(
      [
        item.name,
        item.category,
        item.description,
        ...item.optionGroups.map((group) => group.title),
        ...item.optionGroups.flatMap((group) => group.choices.map((choice) => choice.name)),
      ].join(" ")
    );
    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    return matchesCategory && matchesAvailability && matchesSearch;
  });
}

function buildResultsSummary(filteredCount, totalItems) {
  if (state.error) {
    return `${state.error} Exibindo ${filteredCount} produto${filteredCount === 1 ? "" : "s"} com os dados disponíveis no site.`;
  }

  if (state.availableOnly) {
    return `Mostrando ${filteredCount} produto${filteredCount === 1 ? "" : "s"} disponível${filteredCount === 1 ? "" : "eis"} de ${totalItems} no cardápio.`;
  }

  return `Mostrando ${filteredCount} de ${totalItems} produtos do cardápio.`;
}

function updateStructuredData() {
  const { store } = state.data;
  const openingHoursSpecification = store.schedule.flatMap((entry) =>
    entry.schedules.map((range) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SCHEMA_DAY[entry.day],
      opens: range.start,
      closes: range.end,
    }))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: store.name,
    url: store.orderUrl,
    servesCuisine: ["Sobremesas", "Sorvetes", "Açaí", "Bebidas"],
    telephone: formatPhoneForSchema(store.phoneDisplay),
    hasMenu: store.orderUrl,
    acceptsReservations: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address.street,
      addressLocality: store.address.city,
      addressRegion: store.address.state,
      postalCode: store.address.zipCode,
      addressCountry: "BR",
    },
    openingHoursSpecification,
  };

  refs.structuredData.textContent = JSON.stringify(structuredData);
}

function getStoreStatus(schedule, timezone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday")?.value.toLowerCase() || "mon";
  const hours = Number(parts.find((part) => part.type === "hour")?.value || "0");
  const minutes = Number(parts.find((part) => part.type === "minute")?.value || "0");
  const currentMinutes = hours * 60 + minutes;
  const dayOrder = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const todayIndex = dayOrder.indexOf(weekday);
  const todaySchedule = schedule.find((entry) => entry.day === weekday)?.schedules || [];

  for (const range of todaySchedule) {
    const start = toMinutes(range.start);
    const end = toMinutes(range.end);
    const isOpen = start <= end
      ? currentMinutes >= start && currentMinutes < end
      : currentMinutes >= start || currentMinutes < end;

    if (isOpen) {
      return {
        open: true,
        label: "Aberto agora",
        shortLabel: "Aberto",
        detail: `Fecha às ${range.end}.`,
      };
    }
  }

  for (let offset = 0; offset < 7; offset += 1) {
    const dayIndex = (todayIndex + offset) % 7;
    const dayKey = dayOrder[dayIndex];
    const daySchedule = schedule.find((entry) => entry.day === dayKey)?.schedules || [];

    for (const range of daySchedule) {
      const start = toMinutes(range.start);
      if (offset === 0 && start <= currentMinutes) {
        continue;
      }

      const when = offset === 0 ? "hoje" : offset === 1 ? "amanhã" : DAY_LABELS[dayKey];
      return {
        open: false,
        label: "Fechado no momento",
        shortLabel: "Fechado",
        detail: `Próxima abertura ${when} às ${range.start}.`,
      };
    }
  }

  return {
    open: false,
    label: "Fechado",
    shortLabel: "Fechado",
    detail: "Sem horários ativos publicados neste momento.",
  };
}

function updateActiveNav() {
  const marker = window.scrollY + 180;
  let currentId = "inicio";

  refs.sections.forEach((section) => {
    if (marker >= section.offsetTop) {
      currentId = section.id;
    }
  });

  refs.navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
}

function pickHeroImages(items, fallbackImage) {
  const uniqueByCategory = [];
  const usedCategories = new Set();

  items
    .filter((item) => item.image)
    .sort((left, right) => Number(right.available) - Number(left.available))
    .forEach((item) => {
      if (usedCategories.has(item.categorySlug)) return;
      usedCategories.add(item.categorySlug);
      uniqueByCategory.push(item);
    });

  while (uniqueByCategory.length < 3) {
    uniqueByCategory.push({
      name: "Choke Burguer",
      image: fallbackImage,
    });
  }

  return uniqueByCategory.slice(0, 3);
}

function buildPaymentMethods(methods = {}) {
  const values = [];
  if (methods.money) values.push("Dinheiro");
  if (methods.creditcard) values.push("Crédito");
  if (methods.debit) values.push("Débito");
  if (methods.pix) values.push("Pix");
  return values.length ? values : FALLBACK_STORE.paymentMethods;
}

function buildModeLabel(modes) {
  const labels = [];
  if (modes.delivery) labels.push("Delivery");
  if (modes.takeout) labels.push("Retirada");
  if (modes.onsite) labels.push("Consumo no local");
  return labels.join(", ");
}

function createItemWhatsappLink(item) {
  const baseMessage = item.available
    ? `Olá! Quero pedir ${item.name} da categoria ${item.category}.`
    : `Olá! Quero saber quando o item ${item.name} volta a ficar disponível.`;
  return createWhatsAppLink(state.data.store.whatsapp, createWhatsAppMessage(baseMessage));
}

function createWhatsAppMessage(message) {
  return `${message} Vi no site oficial da Choke Burguer.`;
}

function createWhatsAppLink(number, message) {
  return `https://wa.me/${sanitizeWhatsapp(number)}?text=${encodeURIComponent(message)}`;
}

function buildMapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function getPriceLabel(item) {
  if (!item.startingPrice) {
    return item.hasOptions ? "Consulte opções" : "Consulte";
  }

  if (item.hasOptions && (item.basePrice === 0 || item.startingPrice !== item.basePrice)) {
    return `A partir de ${formatCurrency(item.startingPrice)}`;
  }

  return formatCurrency(item.startingPrice);
}

function getPriceNote(item) {
  if (!item.hasOptions) {
    return "Preço do cardápio.";
  }

  if (item.basePrice === 0 || item.startingPrice !== item.basePrice) {
    return "O valor pode variar conforme os complementos e sabores.";
  }

  return "Item com opções extras disponíveis.";
}

function buildGroupRule(group) {
  if (group.min > 0 && group.max > 0 && group.min === group.max) {
    return `Escolha ${group.min} opção${group.min > 1 ? "ões" : ""} dentre ${group.optionCount}.`;
  }

  if (group.min > 0 && group.max > group.min) {
    return `Escolha de ${group.min} até ${group.max} opções.`;
  }

  if (group.max > 0) {
    return `Você pode adicionar até ${group.max} opção${group.max > 1 ? "ões" : ""}.`;
  }

  return `Grupo com ${group.optionCount} opções disponíveis.`;
}

function getCategoryTheme(slug) {
  return CATEGORY_THEMES[slug] || CATEGORY_THEMES.default;
}

function applyImage(imageElement, source, alt) {
  imageElement.src = source || "assets/logo.png";
  imageElement.alt = alt || "Choke Burguer";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function formatRange(minimum, maximum) {
  return `${minimum} a ${maximum}`;
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function normalizeCategory(rawValue = "") {
  const value = rawValue.trim().toLocaleLowerCase("pt-BR");
  if (value === "doces") return "Doces";
  if (value === "sorvetes") return "Sorvetes";
  if (value === "bebidas") return "Bebidas";
  if (value === "açaí" || value === "acai") return "Açaí";
  return toTitleCase(rawValue);
}

function toTitleCase(value = "") {
  return value
    .toLocaleLowerCase("pt-BR")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toLocaleUpperCase("pt-BR") + part.slice(1))
    .join(" ");
}

function toSentenceCase(value = "") {
  const normalized = value.trim();
  if (!normalized) return "";
  return normalized.charAt(0).toLocaleUpperCase("pt-BR") + normalized.slice(1);
}

function slugify(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function sanitizeWhatsapp(value = "") {
  return String(value).replace(/\D/g, "");
}

function formatPhone(value = "") {
  const digits = String(value).replace(/\D/g, "");
  if (digits.length === 13 && digits.startsWith("55")) {
    return formatPhone(digits.slice(2));
  }
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
  }
  return value;
}

function formatPhoneForSchema(value = "") {
  const digits = sanitizeWhatsapp(value);
  return digits ? `+55${digits.length === 11 ? digits : digits.replace(/^55/, "")}` : "";
}

function toMinutes(time = "00:00") {
  const [hours, minutes] = time.split(":").map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
