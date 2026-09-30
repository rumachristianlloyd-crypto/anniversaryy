// ========================================
// ELEMENTS
// ========================================

const envelope =
  document.getElementById("envelope");

const openBtn =
  document.getElementById("openBtn");

const surpriseBtn =
  document.getElementById("surpriseBtn");

const surpriseMessage =
  document.getElementById("surpriseMessage");

const hearts =
  document.getElementById("hearts");

const musicBtn =
  document.getElementById("musicBtn");

const bgMusic =
  document.getElementById("bgMusic");


// ========================================
// OPEN LETTER
// ========================================

function openLetter() {

  envelope.classList.add("open");

  createHearts(12);

  setTimeout(() => {

    document
      .querySelector(".intro")
      .scrollIntoView({
        behavior: "smooth"
      });

  }, 700);

}


// Envelope click
envelope.addEventListener(
  "click",
  openLetter
);


// Button click
openBtn.addEventListener(
  "click",
  openLetter
);


// ========================================
// SURPRISE MESSAGE
// ========================================

surpriseBtn.addEventListener(
  "click",
  () => {

    surpriseMessage.classList.toggle(
      "show"
    );

    if (
      surpriseMessage.classList.contains(
        "show"
      )
    ) {

      surpriseBtn.textContent =
        "Close the little secret";

      createHearts(20);

    } else {

      surpriseBtn.textContent =
        "One more thing…";

    }

  }
);


// ========================================
// FLOATING HEARTS
// ========================================

function createHearts(amount = 8) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement("span");

    heart.className =
      "floating-heart";

    heart.textContent =
      Math.random() > .35
        ? "♥"
        : "♡";


    heart.style.left =
      `${Math.random() * 100}%`;


    heart.style.fontSize =
      `${12 + Math.random() * 18}px`;


    heart.style.setProperty(
      "--duration",
      `${3 + Math.random() * 3}s`
    );


    heart.style.animationDelay =
      `${Math.random() * .8}s`;


    hearts.appendChild(
      heart
    );


    setTimeout(
      () => heart.remove(),
      7000
    );

  }

}


// ========================================
// SCROLL REVEAL
// ========================================

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: .12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(
    (section) => {

      observer.observe(
        section
      );

    }
  );


// ========================================
// INITIAL HEARTS
// ========================================

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => createHearts(5),
      900
    );

  }
);


// ========================================
// MUSIC
// ========================================

musicBtn.addEventListener(
  "click",
  async () => {

    try {

      if (
        bgMusic.paused
      ) {

        await bgMusic.play();

        musicBtn.classList.add(
          "playing"
        );

        musicBtn.textContent =
          "♫";

      } else {

        bgMusic.pause();

        musicBtn.classList.remove(
          "playing"
        );

        musicBtn.textContent =
          "♪";

      }

    } catch (error) {

      alert(
        "Put a music.mp3 file in the same folder as index.html first."
      );

    }

  }
);