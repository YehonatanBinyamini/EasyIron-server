const fs = require("fs");
const path = require("path");
const LimagePath = path.resolve(__dirname,"../", "documents", "images", "L.png");
const LimageData = fs.readFileSync(LimagePath);
const LimageBase64 = Buffer.from(LimageData).toString('base64');
const LimageDataURI = `data:image/png;base64,${LimageBase64}`;

const logoPath = path.resolve(__dirname,"../", "documents", "images", "1.png");
const logoImageData = fs.readFileSync(logoPath);
const logoImageBase64 = Buffer.from(logoImageData).toString('base64');
const logoImageDataURI = `data:image/png;base64,${logoImageBase64}`;

const linePath = path.resolve(__dirname,"../", "documents", "images", "line.PNG");
const lineImageData = fs.readFileSync(linePath);
const lineImageBase64 = Buffer.from(lineImageData).toString('base64');
const lineImageDataURI = `data:image/png;base64,${lineImageBase64}`;


exports.LimageDataURI = LimageDataURI;
exports.logoImageDataURI =logoImageDataURI
exports.lineImageDataURI =lineImageDataURI