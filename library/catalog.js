(function () {
  "use strict";

  const accentCategories = ["pro-plan", "details-plan", "spec-plan", "layout", "general"];
  const accentColors = ["var(--plan)", "var(--details)", "var(--spec)", "var(--layout)", "var(--general)"];
  const $ = (selector) => document.querySelector(selector);
  const els = {
    menu: $("#menu"), rail: $("#rail"), nav: $("#nav"), search: $("#search"), searchResults: $("#search-results"),
    breadcrumbs: $("#breadcrumbs"), title: $("#folder-title"), path: $("#folder-path"), folderCount: $("#folder-count"),
    subfolderSection: $("#subfolder-section"), subfolderCount: $("#subfolder-count"), folderGrid: $("#folder-grid"),
    itemSection: $("#item-section"), itemCount: $("#item-count"), itemGrid: $("#item-grid"), empty: $("#catalog-empty"),
    dialog: $("#item-detail"), detailClose: $("#detail-close"), detailTitle: $("#detail-title"), detailType: $("#detail-type"), detailBody: $("#detail-body")
  };

  let data;
  let currentFolder = 0;
  let currentItem = null;
  let searchableFolders = [];
  let searchableItems = [];

  function cleanFolderName(name) {
    return String(name || "").replace(/\s+Folder$/i, "");
  }

  function itemLabel(count) {
    return `${count.toLocaleString()} ${count === 1 ? "item" : "items"}`;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function setHash(folderIndex, itemIndex) {
    const folder = data.folders[folderIndex];
    const parts = [`folder=${encodeURIComponent(folder.id)}`];
    if (itemIndex !== null && itemIndex !== undefined) parts.push(`item=${encodeURIComponent(data.items[itemIndex].id)}`);
    const next = `#${parts.join("&")}`;
    if (location.hash === next) routeFromHash();
    else location.hash = next;
  }

  function parseHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    const folderId = params.get("folder");
    const itemId = params.get("item");
    const folderIndex = data.folders.findIndex((folder) => folder.id === folderId);
    const itemIndex = data.items.findIndex((item) => item.id === itemId);
    return {
      folder: folderIndex >= 0 ? folderIndex : data.meta.initialFolder,
      item: itemIndex >= 0 ? itemIndex : null
    };
  }

  function ancestors(folderIndex) {
    const chain = [];
    let cursor = folderIndex;
    while (cursor !== null && cursor !== undefined) {
      chain.unshift(cursor);
      cursor = data.folders[cursor].parent;
    }
    return chain;
  }

  function isWithin(folderIndex, ancestorIndex) {
    let cursor = folderIndex;
    while (cursor !== null && cursor !== undefined) {
      if (cursor === ancestorIndex) return true;
      cursor = data.folders[cursor].parent;
    }
    return false;
  }

  function openFolder(folderIndex) {
    setHash(folderIndex, null);
  }

  function openItem(itemIndex, preferredFolder) {
    const item = data.items[itemIndex];
    const folderIndex = preferredFolder ?? item.folders[0] ?? data.meta.initialFolder;
    setHash(folderIndex, itemIndex);
  }

  function renderRail() {
    els.nav.replaceChildren();
    const main = data.folders[data.meta.initialFolder];
    main.children.forEach((folderIndex, index) => {
      const folder = data.folders[folderIndex];
      const button = el("button");
      button.type = "button";
      button.dataset.category = accentCategories[index % accentCategories.length];
      button.classList.toggle("active", isWithin(currentFolder, folderIndex));
      button.setAttribute("aria-label", `${cleanFolderName(folder.name)}, ${itemLabel(folder.subtreeItemCount)}`);
      button.append(el("span", "", String(index + 1).padStart(2, "0")));
      const label = el("span");
      label.append(el("strong", "", cleanFolderName(folder.name)));
      label.append(el("small", "", folder.children.length ? `${folder.children.length} subfolders` : "Open folder"));
      button.append(label, el("em", "", folder.subtreeItemCount.toLocaleString()));
      button.addEventListener("click", () => openFolder(folderIndex));
      els.nav.append(button);
    });
  }

  function renderBreadcrumbs() {
    els.breadcrumbs.replaceChildren();
    const chain = ancestors(currentFolder).filter((index) => index !== data.meta.rootFolder);
    chain.forEach((folderIndex, index) => {
      if (index) els.breadcrumbs.append(el("span", "", "/"));
      const folder = data.folders[folderIndex];
      const button = el("button", "", folderIndex === data.meta.initialFolder ? "Main Library" : cleanFolderName(folder.name));
      button.type = "button";
      if (folderIndex === currentFolder) button.setAttribute("aria-current", "page");
      else button.addEventListener("click", () => openFolder(folderIndex));
      els.breadcrumbs.append(button);
    });
  }

  function renderFolder() {
    const folder = data.folders[currentFolder];
    document.title = `${cleanFolderName(folder.name)} | X18 Main Library`;
    els.title.textContent = currentFolder === data.meta.initialFolder ? "Rabs Library" : cleanFolderName(folder.name);
    const visiblePath = ancestors(currentFolder)
      .filter((index) => index !== data.meta.rootFolder)
      .map((index) => index === data.meta.initialFolder ? "Main Library" : cleanFolderName(data.folders[index].name))
      .join(" › ");
    els.path.textContent = visiblePath;
    els.folderCount.replaceChildren(el("strong", "", folder.subtreeItemCount.toLocaleString()), el("span", "", "ITEMS IN THIS FOLDER"));

    els.folderGrid.replaceChildren();
    folder.children.forEach((folderIndex, index) => {
      const child = data.folders[folderIndex];
      const card = el("button", "folder-card");
      card.type = "button";
      card.style.setProperty("--card-accent", accentColors[index % accentColors.length]);
      card.append(el("span", "folder-icon", "F"));
      card.append(el("strong", "", cleanFolderName(child.name)));
      card.append(el("small", "", `${itemLabel(child.subtreeItemCount)}${child.children.length ? ` · ${child.children.length} subfolders` : ""}`));
      card.addEventListener("click", () => openFolder(folderIndex));
      els.folderGrid.append(card);
    });
    els.subfolderCount.textContent = `${folder.children.length} ${folder.children.length === 1 ? "folder" : "folders"}`;
    els.subfolderSection.hidden = folder.children.length === 0;

    els.itemGrid.replaceChildren();
    folder.items.forEach(([itemIndex, alias]) => {
      const item = data.items[itemIndex];
      const card = el("button", "item-card");
      card.type = "button";
      card.append(el("strong", "", alias || item.name || "Unnamed item"));
      card.append(el("small", "", item.type || "Library item"));
      card.addEventListener("click", () => openItem(itemIndex, currentFolder));
      els.itemGrid.append(card);
    });
    els.itemCount.textContent = itemLabel(folder.items.length);
    els.itemSection.hidden = folder.items.length === 0;
    els.empty.hidden = folder.children.length > 0 || folder.items.length > 0;
    renderBreadcrumbs();
    renderRail();
  }

  function detailRow(label, content, node) {
    if (!content && !node) return null;
    const wrapper = el("dl", "detail-row");
    wrapper.append(el("dt", "", label));
    const value = el("dd");
    if (node) value.append(node); else value.textContent = content;
    wrapper.append(value);
    return wrapper;
  }

  function stripMarkup(value) {
    const temp = document.createElement("div");
    temp.innerHTML = String(value || "");
    return temp.textContent || "";
  }

  function renderItemDetail(itemIndex) {
    const item = data.items[itemIndex];
    els.detailTitle.textContent = item.name || "Unnamed item";
    els.detailType.textContent = item.type || "Library item";
    els.detailBody.replaceChildren();

    const folderLinks = el("div", "folder-links");
    item.folders.forEach((folderIndex) => {
      const folder = data.folders[folderIndex];
      const button = el("button", "", folder.path.split(" > ").slice(1).map(cleanFolderName).join(" › "));
      button.type = "button";
      button.addEventListener("click", () => { els.dialog.close(); openFolder(folderIndex); });
      folderLinks.append(button);
    });

    [
      detailRow(item.folders.length === 1 ? "Folder" : "Folders", "", folderLinks),
      detailRow("Alternate names", item.alternateNames),
      detailRow("Tags", item.tags),
      detailRow("Keywords", item.keywords),
      detailRow("Common name", item.plantCommonName),
      detailRow("Scientific name", item.plantScientificName),
      detailRow("Variety", item.plantVarietyName),
      detailRow("Notes", stripMarkup(item.notes))
    ].filter(Boolean).forEach((row) => els.detailBody.append(row));

    if (!els.dialog.open) els.dialog.showModal();
  }

  function closeDetail(updateUrl) {
    if (els.dialog.open) els.dialog.close();
    if (updateUrl && currentItem !== null) setHash(currentFolder, null);
  }

  function routeFromHash() {
    if (!data) return;
    const route = parseHash();
    currentFolder = route.folder;
    currentItem = route.item;
    renderFolder();
    if (currentItem !== null) renderItemDetail(currentItem);
    else if (els.dialog.open) els.dialog.close();
    els.rail.classList.remove("open");
    els.menu.setAttribute("aria-expanded", "false");
  }

  function prepareSearch() {
    searchableFolders = data.folders
      .filter((folder) => folder.index !== data.meta.rootFolder)
      .map((folder) => ({ index: folder.index, haystack: `${folder.name} ${folder.path}`.toLowerCase() }));
    searchableItems = data.items.map((item) => ({
      index: item.index,
      haystack: `${item.name} ${item.type} ${item.alternateNames} ${item.tags} ${item.keywords}`.toLowerCase()
    }));
  }

  function runSearch() {
    const query = els.search.value.trim().toLowerCase();
    els.searchResults.replaceChildren();
    if (query.length < 2) { els.searchResults.hidden = true; return; }
    const folderMatches = searchableFolders.filter((entry) => entry.haystack.includes(query)).slice(0, 8);
    const itemMatches = searchableItems.filter((entry) => entry.haystack.includes(query)).slice(0, 30 - folderMatches.length);
    const totalShown = folderMatches.length + itemMatches.length;
    els.searchResults.append(el("div", "search-summary", totalShown ? `Showing ${totalShown} matching folders and items` : "No matching folders or items"));

    folderMatches.forEach((entry) => {
      const folder = data.folders[entry.index];
      const button = el("button");
      button.type = "button";
      const title = el("strong");
      title.append(el("span", "result-kind", "Folder"), document.createTextNode(cleanFolderName(folder.name)));
      button.append(title, el("small", "result-path", `${itemLabel(folder.subtreeItemCount)} · ${folder.path.split(" > ").slice(1).map(cleanFolderName).join(" › ")}`));
      button.addEventListener("click", () => { els.search.value = ""; els.searchResults.hidden = true; openFolder(entry.index); });
      els.searchResults.append(button);
    });
    itemMatches.forEach((entry) => {
      const item = data.items[entry.index];
      const button = el("button");
      button.type = "button";
      const title = el("strong");
      title.append(el("span", "result-kind", "Item"), document.createTextNode(item.name || "Unnamed item"));
      const folder = data.folders[item.folders[0]];
      button.append(title, el("small", "result-path", `${item.type || "Library item"} · ${cleanFolderName(folder.name)}`));
      button.addEventListener("click", () => { els.search.value = ""; els.searchResults.hidden = true; openItem(entry.index, item.folders[0]); });
      els.searchResults.append(button);
    });
    els.searchResults.hidden = false;
  }

  els.menu.addEventListener("click", () => {
    const open = els.rail.classList.toggle("open");
    els.menu.setAttribute("aria-expanded", String(open));
  });
  els.search.addEventListener("input", runSearch);
  els.search.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { els.search.value = ""; els.searchResults.hidden = true; els.search.blur(); }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search")) els.searchResults.hidden = true;
    if (!event.target.closest("#rail") && !event.target.closest("#menu") && innerWidth <= 1000) {
      els.rail.classList.remove("open"); els.menu.setAttribute("aria-expanded", "false");
    }
  });
  els.detailClose.addEventListener("click", () => closeDetail(true));
  els.dialog.addEventListener("click", (event) => { if (event.target === els.dialog) closeDetail(true); });
  els.dialog.addEventListener("cancel", (event) => { event.preventDefault(); closeDetail(true); });
  window.addEventListener("hashchange", routeFromHash);

  fetch("catalog-data.json")
    .then((response) => { if (!response.ok) throw new Error(`Catalog request failed (${response.status})`); return response.json(); })
    .then((catalog) => {
      data = catalog;
      prepareSearch();
      if (!location.hash) setHash(data.meta.initialFolder, null); else routeFromHash();
    })
    .catch((error) => {
      els.title.textContent = "Catalog unavailable";
      els.path.textContent = "The library data could not be loaded. Please refresh the page.";
      console.error(error);
    });
}());
