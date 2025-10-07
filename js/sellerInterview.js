window.initSellerInterview = function () {
  const container = document.getElementById("videoScrollerInner");
  if (!container) return;

  // Video data
  const sellerVideos = [
    { id: 8, name: "리클라라", file: "8_reclala.mp4", image: "8_reclala-0008.png" },
    { id: 2, name: "바닐라윤", file: "2_vanillayun.mp4", image: "2_vanillayun-0002.png" },
    { id: 3, name: "센스", file: "3_sens.mp4", image: "3_sens-0003.png" },
    { id: 6, name: "신난데이", file: "6_sinnanday.mp4", image: "6_sinnanday-0006.png" },
    { id: 7, name: "쓰리백", file: "7_threebag.mp4", image: "7_threebag-0007.png" },
    { id: 5, name: "오드리겸", file: "5_audreygyum.mp4", image: "5_audreygyum-0005.png" },
    { id: 1, name: "제이플러스", file: "1_jplus.mp4", image: "1_jplus-0001.png" },
    { id: 4, name: "지름신", file: "4_jireumsin.mp4", image: "4_jireumsin-0004.png" },
  ];

  // Duplicate for looping
  const duplicated = [...sellerVideos, ...sellerVideos];

  // Inject cards
  container.innerHTML = duplicated
    .map(
      (video) => `
        <div class="flex-shrink-0 cursor-pointer w-[var(--item-width)]">
          <div class="relative rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-pink-500 hover:scale-105 transition-all duration-300 seller-video-wrapper" data-video="${video.file}">
            <video
              class="w-full h-full object-cover"
              src="public/videos/${video.file}"
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
            <img
              class="absolute inset-0 object-cover transition-opacity duration-300 pointer-events-none seller-thumbnail"
              src="public/images/sellers/interviews/${video.image}"
              alt="${video.name} 썸네일"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p class="text-white font-bold text-sm text-center">${video.name}</p>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  // Scroll width
  const itemWidth = 180;
  const gap = 16;
  const scrollWidth = duplicated.length * (itemWidth + gap);
  container.style.setProperty("--scroll-width", `${scrollWidth}px`);

  // Hover play/pause & modal
  const videoCards = container.querySelectorAll(".seller-video-wrapper");

  videoCards.forEach((wrapper) => {
    const video = wrapper.querySelector("video");
    const thumb = wrapper.querySelector(".seller-thumbnail");

    wrapper.addEventListener("mouseenter", () => {
      video.play().catch(() => { });
    });
    wrapper.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    wrapper.addEventListener("mouseenter", () => (thumb.style.opacity = "0"));
    wrapper.addEventListener("mouseleave", () => (thumb.style.opacity = "1"));

    // Modal open
    wrapper.addEventListener("click", () => {
      openSellerVideoModal(`public/videos/${wrapper.dataset.video}`);
    });
  });

  // Modal
  const modal = document.getElementById("sellerVideoModal");
  const videoPlayer = document.getElementById("sellerVideoPlayer");
  const closeBtn = document.getElementById("sellerVideoClose");

  function openSellerVideoModal(src) {
    videoPlayer.src = src;
    videoPlayer.muted = false; // Unmute the video for modal playback
    modal.classList.remove("hidden");
    videoPlayer.play().catch(() => { });
  }
  function closeSellerVideoModal() {
    modal.classList.add("hidden");
    videoPlayer.pause();
    videoPlayer.src = "";
  }

  closeBtn.addEventListener("click", closeSellerVideoModal);
  modal.addEventListener("click", closeSellerVideoModal);
  modal.querySelector("div").addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSellerVideoModal();
  });
};
