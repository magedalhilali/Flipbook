// 1) List your pages here (add as many as you want)
const pages = [
  "pages/RGCT Company Profile 04-10-2025v2-01.png",
  "pages/RGCT Company Profile 04-10-2025v2-02.png",
  "pages/RGCT Company Profile 04-10-2025v2-03.png",
  "pages/RGCT Company Profile 04-10-2025v2-04.png",
  "pages/RGCT Company Profile 04-10-2025v2-05.png",
  "pages/RGCT Company Profile 04-10-2025v2-06.png",
  "pages/RGCT Company Profile 04-10-2025v2-07.png",
  "pages/RGCT Company Profile 04-10-2025v2-08.png",
  "pages/RGCT Company Profile 04-10-2025v2-09.png",
  "pages/RGCT Company Profile 04-10-2025v2-10.png",
  "pages/RGCT Company Profile 04-10-2025v2-11.png",
  "pages/RGCT Company Profile 04-10-2025v2-12.png",
  "pages/RGCT Company Profile 04-10-2025v2-13.png",
  "pages/RGCT Company Profile 04-10-2025v2-14.png",
  "pages/RGCT Company Profile 04-10-2025v2-15.png",
  "pages/RGCT Company Profile 04-10-2025v2-16.png",
  "pages/RGCT Company Profile 04-10-2025v2-17.png",
  "pages/RGCT Company Profile 04-10-2025v2-18.png",
  "pages/RGCT Company Profile 04-10-2025v2-19.png",
  "pages/RGCT Company Profile 04-10-2025v2-20.png",
  "pages/RGCT Company Profile 04-10-2025v2-21.png",
  "pages/RGCT Company Profile 04-10-2025v2-22.png",
  "pages/RGCT Company Profile 04-10-2025v2-23.png",
  "pages/RGCT Company Profile 04-10-2025v2-24.png",
  "pages/RGCT Company Profile 04-10-2025v2-25.png",
  "pages/RGCT Company Profile 04-10-2025v2-26.png",
  
  // ...
];

const bookEl = document.getElementById("book");
const pageInfo = document.getElementById("pageInfo");

// 2) Create flipbook
const pageFlip = new St.PageFlip(bookEl, {
  width: 550,          // base page size (JS will scale)
  height: 733,
  size: "stretch",     // makes it adapt to container
  minWidth: 315,
  maxWidth: 1200,
  minHeight: 420,
  maxHeight: 1600,
  maxShadowOpacity: 0.35,
  showCover: true,
  mobileScrollSupport: false,
});

// 3) Load pages as images
pageFlip.loadFromImages(pages);

// 4) Controls
document.getElementById("prev").addEventListener("click", () => pageFlip.flipPrev());
document.getElementById("next").addEventListener("click", () => pageFlip.flipNext());

// 5) Update page indicator
pageFlip.on("flip", (e) => {
  const current = e.data + 1;
  const total = pageFlip.getPageCount();
  pageInfo.textContent = `${current} / ${total}`;
});

// After load, set initial text
pageFlip.on("init", () => {
  pageInfo.textContent = `1 / ${pageFlip.getPageCount()}`;
});

