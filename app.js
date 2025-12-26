// 1) List your pages here (add as many as you want)
const pages = [
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

