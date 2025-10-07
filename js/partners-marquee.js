window.initPartnersMarquee = function () {
  const track = document.getElementById("partnersTrack");
  if (!track) return;

  const logos = [
    { name: "Hanjin", src: "public/images/partners/hanjin.png" },
    { name: "KFA", src: "public/images/partners/kfa.png" },
    { name: "Hyungji", src: "public/images/partners/hyungji.png" },
    { name: "Kodit", src: "public/images/partners/kodit.png" },
    { name: "SparkLabs", src: "public/images/partners/sparklab.png" },
    { name: "Agora", src: "public/images/partners/agora.png" },
    { name: "Toss", src: "public/images/partners/toss.png" },
    { name: "Naning9", src: "public/images/partners/naning9.png" },
    { name: "DK Techin", src: "public/images/partners/dktechin.png" },
    { name: "MegaZone", src: "public/images/partners/megazone.png" },
    { name: "Blackholic", src: "public/images/partners/blackholic.png" },
    { name: "Dong Kwang", src: "public/images/partners/dongkwang.png" },
    { name: "Lotte Home Shopping", src: "public/images/partners/lottehomeshopping.png" },
  ];

  // Duplicate to create infinite loop
  const items = [...logos, ...logos];

  track.innerHTML = items
    .map(
      (logo) => `
          <div class="flex-shrink-0 flex h-24 items-center justify-center">
            <div class="relative h-16 w-32 group">
              <img 
                alt="${logo.name}" 
                src="${logo.src}" 
                class="absolute inset-0 h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>`
    )
    .join("");
};

// Run after load
document.addEventListener("DOMContentLoaded", () => {
  initPartnersMarquee();
});