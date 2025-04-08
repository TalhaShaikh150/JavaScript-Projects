let container = document.querySelector('.all-projects')

let data = [
  {
  id: 1,
    image:"/assets/scramble.png",
    link:"https://talhashaikh150.github.io/scramble-js/",
    name:"Word Scramble Game",
    description:"A fun WordScramble game using HTML, CSS, and JavaScript. 🚀",
    github:"https://github.com/TalhaShaikh150/scramble-js"
  },
  {
    id: 2,
    image:"/assets/todo.png",
    link:"https://talhashaikh150.github.io/Todo/",
    name:"Todo List",
    description:"A to-do list with local storage and dark mode. ✅🌙 ",
    github:"https://github.com/TalhaShaikh150/Todo"
  },
  {
    id: 3,
    image:"/assets/palindrome.png",
    link:"https://talhashaikh150.github.io/palindrome-checker/",
    name:"Palindrom Checker",
    description:"A simple palindrome checker using HTML, CSS, and JavaScript. 🔄✅",
    github:"https://github.com/TalhaShaikh150/palindrome-checker"
  },
  {
    id: 4,
    image:"/assets/pixelart.png",
    link:"https://talhashaikh150.github.io/Js-pixel-art/",
    name:"Pixel Art Editor",
    description:"A simple pixel art editor made with HTML, CSS, and JavaScript. 🎨🖌️",
    github:"https://github.com/TalhaShaikh150/Js-pixel-art"
  },
  {
    id: 5,
    image:"/assets/dicegame.png",
    link:"https://talhashaikh150.github.io/Dice-game/",
    name:"Dice Game",
    description:"A simple dice game made with HTML, CSS, and JavaScript. 🎲✨",
    github:"https://github.com/TalhaShaikh150/Dice-game"
  },
  {
    id: 6,
    image:"/assets/recipe.png",
    link:"https://talhashaikh150.github.io/recipe-website/",
    name:"Recipe's Website",
    description:"A simple recipe website made with HTML, CSS, and JavaScript. 🍽️📖",
    github:"https://github.com/TalhaShaikh150/recipe-website"
  },
  {
    id: 7,
    image:"/assets/csstools.png",
    link:"https://talhashaikh150.github.io/Css-Tools/",
    name:"Css Tools",
    description:"A simple CSS box shadow tool made with HTML, CSS, and JavaScript. 🎨🖌️",
    github:"https://github.com/TalhaShaikh150/Css-Tools"
  },
  {
    id: 8,
    image:"/assets/timer.png",
    link:"https://talhashaikh150.github.io/js-timer/",
    name:"Stop Watch",
    description:"A simple timer app made with HTML, CSS, and JavaScript. ⏱️🧭",
    github:"https://github.com/TalhaShaikh150/js-timer"
  },
  {
    id: 9,
    image:"/assets/E-commerce.png",
    link:"https://talhashaikh150.github.io/E-Commerce/",
    name:"E-Commerce Website",
    description:"A simple timer app made with HTML, CSS, and JavaScript. ⏱️🧭",
    github:"https://github.com/TalhaShaikh150/E-Commerce"
  }
]

for(let i = 0; i < data.length;i++){
  container.innerHTML += `<div class="col-md-4">
          <div class="project-card">
            <div class="project-image">
              <img src="${data[i].image}" alt="Word Scramble" class="img-fluid">
              <div class="project-overlay">
                <a href="${data[i].link}" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">${data[i].name}</h3>
              <p class="project-description">${data[i].description}</p>
              <div class="project-tech">
                <span class="tech-badge">HTML</span>
                <span class="tech-badge">CSS</span>
                <span class="tech-badge">JavaScript</span>
              </div>
              <a href="${data[i].github}" target="_blank" class="github-button">
                <i class="fab fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>`
}
