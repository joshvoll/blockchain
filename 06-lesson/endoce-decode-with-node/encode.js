// Require file system access
const fs = require("fs");
// Read file buffer 
imgReadBuf = fs.readFileSync("test-pattern.jpeg");

// Encode image buffer to hex
imgHexEncode = Buffer.from(imgReadBuf).toString("hex");

// Output encoded data to console
console.log(imgHexEncode);

// Decode hex
let imgHexDecode = Buffer.from(imgHexEncode, "hex");

// Save decoded file file system 
fs.writeFileSync("decodHexImage.jpg", imgHexEncode);
