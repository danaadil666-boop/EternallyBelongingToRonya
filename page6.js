const loveData = [
  { lang: "English", text: "I love you" },
  { lang: "Arabic", text: "أحبك" },
  { lang: "French", text: "Je t’aime" },
  { lang: "Spanish", text: "Te amo" },
  { lang: "Italian", text: "Ti amo" },
  { lang: "German", text: "Ich liebe dich" },
  { lang: "Turkish", text: "Seni seviyorum" },
  { lang: "Persian", text: "دوستت دارم" },
  { lang: "Russian", text: "Я тебя люблю" },
  { lang: "Greek", text: "Σ’ αγαπώ" },
  { lang: "Portuguese", text: "Eu te amo" },
  { lang: "Dutch", text: "Ik hou van jou" },
  { lang: "Swedish", text: "Jag älskar dig" },
  { lang: "Norwegian", text: "Jeg elsker deg" },
  { lang: "Danish", text: "Jeg elsker dig" },
  { lang: "Polish", text: "Kocham cię" },
  { lang: "Czech", text: "Miluji tě" },
  { lang: "Hungarian", text: "Szeretlek" },
  { lang: "Romanian", text: "Te iubesc" },
  { lang: "Ukrainian", text: "Я тебе кохаю" },
  { lang: "Japanese", text: "愛してる" },
  { lang: "Korean", text: "사랑해" },
  { lang: "Chinese", text: "我爱你" },
  { lang: "Hindi", text: "मैं तुमसे प्यार करता हूँ" },
  { lang: "Urdu", text: "میں تم سے محبت کرتا ہوں" },
  { lang: "Thai", text: "ฉันรักคุณ" },
  { lang: "Vietnamese", text: "Anh yêu em" },
  { lang: "Hebrew", text: "אני אוהב אותך" },
  { lang: "Kurdish", text: "xoshm dawey" } // MUST BE LAST
];

let index = 0;

const languageName = document.getElementById("languageName");
const loveText = document.getElementById("loveText");

function showNext() {
  // fade out
  loveText.style.opacity = "0";
  loveText.style.transform = "translateY(8px)";

  setTimeout(() => {
    const item = loveData[index];
    languageName.textContent = item.lang;
    loveText.textContent = item.text;

    // fade in
    loveText.style.opacity = "1";
    loveText.style.transform = "translateY(0)";

    index++;
    if (index >= loveData.length) index = 0;
  }, 600);
}

showNext();
setInterval(showNext, 2000);
