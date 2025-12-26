// 1) List your pages here (add as many as you want)
const Pages = [
  "Pages/RGCT Company Profile 04-10-2025v2-01.png",
  "Pages/RGCT Company Profile 04-10-2025v2-02.png",
  "Pages/RGCT Company Profile 04-10-2025v2-03.png",
  "Pages/RGCT Company Profile 04-10-2025v2-04.png",
  "Pages/RGCT Company Profile 04-10-2025v2-05.png",
  "Pages/RGCT Company Profile 04-10-2025v2-06.png",
  "Pages/RGCT Company Profile 04-10-2025v2-07.png",
  "Pages/RGCT Company Profile 04-10-2025v2-08.png",
  "Pages/RGCT Company Profile 04-10-2025v2-09.png",
  "Pages/RGCT Company Profile 04-10-2025v2-10.png",
  "Pages/RGCT Company Profile 04-10-2025v2-11.png",
  "Pages/RGCT Company Profile 04-10-2025v2-12.png",
  "Pages/RGCT Company Profile 04-10-2025v2-13.png",
  "Pages/RGCT Company Profile 04-10-2025v2-14.png",
  "Pages/RGCT Company Profile 04-10-2025v2-15.png",
  "Pages/RGCT Company Profile 04-10-2025v2-16.png",
  "Pages/RGCT Company Profile 04-10-2025v2-17.png",
  "Pages/RGCT Company Profile 04-10-2025v2-18.png",
  "Pages/RGCT Company Profile 04-10-2025v2-19.png",
  "Pages/RGCT Company Profile 04-10-2025v2-20.png",
  "Pages/RGCT Company Profile 04-10-2025v2-21.png",
  "Pages/RGCT Company Profile 04-10-2025v2-22.png",
  "Pages/RGCT Company Profile 04-10-2025v2-23.png",
  "Pages/RGCT Company Profile 04-10-2025v2-24.png",
  "Pages/RGCT Company Profile 04-10-2025v2-25.png",
  "Pages/RGCT Company Profile 04-10-2025v2-26.png",
];

const bookEl = document.getElementById("book");
const pageInfo = document.getElementById("pageInfo");
const loadingEl = document.getElementById("loading");

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

function setDisabledAll(disabled){
  btnPrev.disabled = disabled;
  btnNext.disabled = disabled;
}

function updateUI(){
  const total = pageFlip.getPageCount();
  const current = pageFlip.getCurrentPageIndex() + 1;

  pageInfo.textContent = `${current} / ${total}`;
  btnPrev.disabled = (current <= 1);
  btnNext.disabled = (current >= total);
}

// 2) Create flipbook
// Your images appear to be LANDSCAPE spreads (two-page wide), so this ratio fits better than 550x733.
const pageFlip = new St.PageFlip(bookEl, {
  width: 900,
  height: 600,
  size: "stretch",
  maxShadowOpacity: 0.35,
  showCover: true,
  mobileScrollSupport: false,
});

// 3) Load pages as images
setDisabledAll(true);

try {
  pageFlip.loadFromImages(Pages);
} catch (e) {
  console.error(e);
  if (loadingEl) {
    loadingEl.innerHTML = `<div style="padding:16px;">Failed to load pages. Check console.</div>`;
  }
}

// 4) Controls
btnPrev.addEventListener("click", () => pageFlip.flipPrev());
btnNext.addEventListener("click", () => pageFlip.flipNext());

// 5) Events
pageFlip.on("init", () => {
  if (loadingEl) loadingEl.style.display = "none";
  setDisabledAll(false);
  updateUI();
});

pageFlip.on("flip", () => {
  updateUI();
});

// 6) Ensure it resizes nicely
window.addEventListener("resize", () => {
  try { pageFlip.update(); } catch(e) {}
});
