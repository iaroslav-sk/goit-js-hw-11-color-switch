import colors from './colors.js';

const bodyStyle = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const bgChange = {
  intervalId: null,
  startIsActive: false,

  start() {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    if (this.startIsActive) {
      return;
    }
    this.startIsActive = true;
    this.intervalId = setInterval(() => {
      const color = colors[randomIntegerFromInterval(0, colors.length)];
      bodyStyle.style.backgroundColor = color;
    }, 1000);
  },

  stop() {
    this.startIsActive = false;
    clearInterval(this.intervalId);
  },
};

startBtn.addEventListener('click', bgChange.start.bind(bgChange));
stopBtn.addEventListener('click', bgChange.stop.bind(bgChange));
