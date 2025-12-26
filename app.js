// 1) List your pages here (add as many as you want)
const pages = [
  "pages/page-01.jpg",
  "pages/page-02.jpg",
  "pages/page-03.jpg",
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

