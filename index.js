// Import stylesheets
import './style.css';

function calculate(x, y, callback) {
  console.log('กำลังคำนวณ...');
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 3000);
}

function display(result) {
  console.log(result);
}

//calculate(100, 200, display);

// Callback function
calculate(100, 50, function (result) {
  console.log(result);
});