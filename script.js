const quotes = [
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Your limitation—it's only your imagination.",
    author: "Unknown",
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const quoteContent = document.getElementById("quoteContent");
const quoteNumber = document.getElementById("quoteNumber");
const toast = document.getElementById("toast");

let currentQuoteIndex = 0;

// Generate a random quote
function generateQuote() {
  let randomIndex;

  // Prevent the same quote from appearing twice
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentQuoteIndex && quotes.length > 1);

  currentQuoteIndex = randomIndex;

  const selectedQuote = quotes[randomIndex];

  // Remove animation
  quoteContent.classList.remove("animate");

  // Force browser reflow to restart animation
  void quoteContent.offsetWidth;

  // Update content
  quoteElement.textContent = `"${selectedQuote.quote}"`;
  authorElement.textContent = `— ${selectedQuote.author}`;

  // Update quote number
  quoteNumber.textContent = String(randomIndex + 1).padStart(2, "0");

  // Add animation
  quoteContent.classList.add("animate");
}

// Copy quote
copyBtn.addEventListener("click", async () => {
  const text = `${quoteElement.textContent} ${authorElement.textContent}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("Quote copied!");
  } catch (error) {
    showToast("Unable to copy quote.");
  }
});

// Share quote
shareBtn.addEventListener("click", async () => {
  const shareData = {
    title: "Daily Inspiration",
    text: `${quoteElement.textContent} ${authorElement.textContent}`,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      // User cancelled sharing
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.text);
      showToast("Quote copied for sharing!");
    } catch (error) {
      showToast("Sharing is not supported.");
    }
  }
});

// New quote
newQuoteBtn.addEventListener("click", generateQuote);

// Toast message
function showToast(message) {
  toast.querySelector("span").textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
