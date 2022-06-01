// Import stylesheets
import './style.css';

function calculate(x, y, callback) {
  console.log('calculating...');
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
// calculate(100, 50, function (result) {
//   console.log(result);
// });

//downloading(url1, complete);

//=================================================//

const url1 = 'kong.dev/file1.json';
const url2 = 'kong.dev/file2.json';
const url3 = 'kong.dev/file3.json';

function downloading(url, callback) {
  console.log(`downloading... ${url}`);
  setTimeout(() => {
    callback(url);
  }, 3000);
}

function complete(result) {
  console.log(`download ${result} completed`);
}

// downloading(url1, function (result) {
//   console.log(`download ${result} completed`);
// });

downloading(url1, function (result) {
  console.log(`download ${result} completed`);
  downloading(url2, function (result) {
    console.log(`download ${result} completed`);
    downloading(url3, function (result) {
      console.log(`download ${result} completed`);
    });
  });
});
