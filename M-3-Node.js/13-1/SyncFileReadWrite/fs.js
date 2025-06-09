import fs from "fs";

// fs.readFile("./hall.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log(data);
//   fs.writeFile("./hallo-world.txt", data, "utf8", (err) => {
//     if (err) {
//       console.error("Error writing file:", err);
//       return;
//     }
//     console.log("File written successfully!");
//   });
// });

const readFile = fs.createReadStream("./hallo-world.txt", "utf-8");
const writeFile = fs.createWriteStream("./hall.txt", "utf-8");

readFile.on("data", (chunk) => {
  console.log(chunk);
});

// writeFile.on("data", (chunk) => {
//   console.log(chunk);
// });
