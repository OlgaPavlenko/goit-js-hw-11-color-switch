const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const body = document.querySelector('body');
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  
  const startButton = document.querySelector('button[data-action=start]');
  const stopButton = document.querySelector('button[data-action=stop]');

  let intervalId = null;
  let i = true;

  startButton.addEventListener('click', onClickChangeBodyColor);
  stopButton.addEventListener('click', onClickStopChangeBodyColor);
 
function onClickChangeBodyColor() {
      i = true;
      intervalId = setInterval(() => {let color = colors[randomIntegerFromInterval(0, colors.length)];
      body.style.backgroundColor = color}, 1000);
      i = false;
  }

function onClickStopChangeBodyColor () {
    clearInterval(intervalId);
}