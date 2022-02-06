// import compress_images from "compress-images";
var compress_images = require("compress-images");

const input = "uncompressed/img/**/*.{jpg,JPG,jpeg,JPEG,gif,png,svg}";
const output = "public/img/";

compress_images(
  input,
  output,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "55"] } },
  { png: { engine: "webp", command: ['-q', '60'] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gif2webp", command: ['-f', '80', '-mixed', '-q', '30', '-m', '2'] } },
  function(error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  },
);
