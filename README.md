# ✨ Random Quote Generator

A beautiful and responsive **Random Quote Generator** built using **HTML5, CSS3, and JavaScript**. The application displays a random inspirational quote and its author whenever the user clicks the **New Quote** button.

The project has a modern glassmorphism UI with animations, copy functionality, and a share option.

## 📌 About the Project

The Random Quote Generator is a simple web application created to practice:

* JavaScript arrays
* Objects
* Random number generation
* Event handling
* DOM manipulation
* Clipboard API
* Web Share API
* Responsive web design

The application contains more than 10 quotes and ensures that the same quote is not displayed twice consecutively.

## 🚀 Features

* 🎲 Generate a random quote
* 💬 Displays quote and author
* 🚫 Prevents consecutive duplicate quotes
* 📋 Copy quote to clipboard
* 📤 Share quote using the device's share feature
* ✨ Smooth quote animations
* 🎨 Modern glassmorphism design
* 🌈 Gradient background
* 📱 Fully responsive design
* 🔔 Toast notification for copy actions
* 🔢 Displays the current quote number

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling, animations, responsive design, and glassmorphism UI
* **JavaScript** – Quote generation, DOM manipulation, and event handling
* **Font Awesome** – Icons

## 📂 Project Structure

```text
random-quote-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

### 1. Store Quotes

Quotes are stored inside a JavaScript array as objects.

```javascript
const quotes = [
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    }
];
```

### 2. Generate a Random Quote

JavaScript's `Math.random()` is used to generate a random index.

```javascript
randomIndex = Math.floor(Math.random() * quotes.length);
```

### 3. Avoid Duplicate Quotes

The application compares the newly generated index with the previous index so that the same quote does not appear twice consecutively.

### 4. Update the Web Page

The selected quote and author are displayed using DOM manipulation.

```javascript
quoteElement.textContent = `"${selectedQuote.quote}"`;
authorElement.textContent = `— ${selectedQuote.author}`;
```

### 5. Copy and Share

The **Copy** button uses the Clipboard API to copy the quote.

The **Share** button uses the Web Share API when it is supported by the browser.

## ▶️ How to Run

1. Download or clone the project.
2. Open the project folder.
3. Make sure all files are in the same folder.
4. Open `index.html` in a web browser.
5. Click **New Quote** to generate different quotes.

No installation or backend server is required.

## 📱 Responsive Design

The application works on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The layout automatically adjusts according to the screen size.

## 🎯 Objective

The main objective of this project is to practice basic JavaScript concepts such as:

* Arrays
* Objects
* Functions
* `Math.random()`
* DOM selection
* DOM updates
* Event listeners
* Browser APIs

## 🔮 Future Scope

The project can be improved by adding:

* 🌙 Dark mode
* 🏷️ Quote categories
* ❤️ Favorite quotes
* 🔍 Search quotes
* 📜 Quote history
* 🌐 API-based quotes
* 🎨 Multiple themes
* 📱 PWA support
* 💾 Local storage for favorite quotes


