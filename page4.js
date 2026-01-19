const introScreen = document.getElementById("introScreen");
const galleryScreen = document.getElementById("galleryScreen");
const startBtn = document.getElementById("startBtn");
const videoGrid = document.getElementById("videoGrid");

/* ✅ IMPORTANT:
   Put your videos in /videos and name them:
   ronya1.mp4 ... ronya12.mp4
*/
const videoSlides = [
  {
    src: "videos/ronya1.mp4",
    caption:
      "i found you and to this day i am shocked in and in disbelief of how someone could be so beautiful",
  },
  {
    src: "videos/ronya2.mp4",
    caption:
      "from that first day i fully saw you and i got to know you there has never been anything i ever wanted more than for me to be yours and for you to be mine",
  },
  {
    src: "videos/ronya3.mp4",
    caption:
      "that beautiful and adorable girl that is my baby whomever i forever love and i forever adore",
  },
  {
    src: "videos/ronya4.mp4",
    caption:
      "NEVER AND EVER will i ever be ale to willingly take my eyes from you i just cant i literally cannot with the way you look my eyes are glued to you and solely you and how dazzling you are",
  },
  {
    src: "videos/ronya5.mp4",
    caption:
      "that beautiful face elegant demeanor lovely and amazing personality of hers have turned me into the biggest loverboy i could possibly be",
  },
  {
    src: "videos/ronya6.mp4",
    caption:
      "do you literally have any doubt that you are the prettiest most valuable the most stunning the most gorgeous the fanciest and the most important woman in the world and my world that resolves around you",
  },
  {
    src: "videos/ronya7.mp4",
    caption:
      "from her on it gets freaky a little bit but i hope you realized what your looks do to me",
  },
  {
    src: "videos/ronya8.mp4",
    caption:
      "which way do you want it baby? because ill never spare you a position that i wont make you try you do unimaginable things to my body take responsibility",
  },
  {
    src: "videos/ronya9.mp4",
    caption:
      "this ones pretty self explanatory you turn me on and my reaction will be destroying your vocal cords",
  },
  {
    src: "videos/ronya10.mp4",
    caption:
      "seeing you in my hoodie makes me go feral there is no shame in hiding it and ill do it all word for word",
  },

  /* ✅ UPDATED 11th caption */
  {
    src: "videos/ronya11.mp4",
    caption:
      "there is truly nothing i own in this world and nothing i want to own except be the receiver of your love and i promise you ill always and always give you every bit of love i have in me to give and ill forever give it to you and you will be the only one to receive it and show you how special you are to me",
  },

  /* ✅ 12th caption now uses the OLD 11th caption */
  {
    src: "videos/ronya12.mp4",
    caption:
      "i did find her i found the girl that i will give all of my love to and i want of her love and ill give her more and more forever and all she needs ill eat that grenade and swallow it in my stomach for her she is literally my dream and forever my dream girl the love of my life that i will always love and adore. to this day this is still my favorite picture of you and words alone aren't enough to describe how much i love it.",
  },
];

let activeIndex = null;

function stopAllVideos() {
  const vids = document.querySelectorAll(".tile-video-frame video");
  vids.forEach((v) => {
    v.pause();
    v.currentTime = 0;
  });
}

function clearActiveTiles() {
  const tiles = document.querySelectorAll(".video-tile");
  tiles.forEach((t) => t.classList.remove("active"));
}

function createGrid() {
  videoGrid.innerHTML = "";

  videoSlides.forEach((slide, index) => {
    const tile = document.createElement("div");
    tile.className = "video-tile";

    const frame = document.createElement("div");
    frame.className = "tile-video-frame";

    const video = document.createElement("video");
    video.src = slide.src;
    video.playsInline = true;
    video.loop = true;
    video.muted = false;
    video.preload = "metadata";
    video.controls = false;

    const caption = document.createElement("div");
    caption.className = "tile-caption";
    caption.textContent = ""; // only show caption when clicked

    frame.appendChild(video);
    tile.appendChild(frame);
    tile.appendChild(caption);

    tile.addEventListener("click", () => {
      stopAllVideos();
      clearActiveTiles();

      tile.classList.add("active");
      caption.textContent = slide.caption;

      video.play().catch(() => {});
      activeIndex = index;
    });

    videoGrid.appendChild(tile);
  });
}

startBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  galleryScreen.classList.remove("hidden");
  createGrid();
});
