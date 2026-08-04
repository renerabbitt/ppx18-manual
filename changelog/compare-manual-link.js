(() => {
  const addManualLink = () => {
    const deck = document.querySelector(".compare-chapter .deck");
    if (!deck || deck.querySelector("[data-compare-manual]")) return;
    const link = document.createElement("a");
    link.href = "https://renerabbitt.github.io/ppx18-manual/";
    link.target = "_blank";
    link.rel = "noreferrer";
    link.dataset.compareManual = "true";
    link.textContent = "Open the PPX18 User Manual →";
    link.style.display = "block";
    link.style.marginTop = "10px";
    link.style.fontWeight = "800";
    deck.appendChild(link);
  };
  const observer = new MutationObserver(addManualLink);
  observer.observe(document.querySelector("#reader") || document.body, {childList:true,subtree:true});
  addManualLink();
})();