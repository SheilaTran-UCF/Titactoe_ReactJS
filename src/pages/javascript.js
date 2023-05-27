// 3 cach xu li bat dong bo
// callback
// promise
// async await

function logger(title) {
  console.log(title);
}

// function batdongbo(callback, title) {
//   setTimeout(() => {
//     callback(title);
//   }, 1000);
// }

// const batdongbo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("title ne");
//   }, 1000);
// });

async function getdata() {
  const data = await laydulieu(); // bat dong bo
  console.log(data);
}

// batdongbo
//   .then((data) => {
//     logger(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// batdongbo(logger, "title ne");
