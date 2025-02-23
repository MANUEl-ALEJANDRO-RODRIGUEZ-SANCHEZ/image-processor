const { parentPort } = require("worker_threads");
const sharp = require("sharp");
const path = require("path");

const imageDir = path.join(__dirname, "images");
const processedDir = path.join(__dirname, "processed");

// Procesamiento de imagenes con efectos reales
async function applyEffect(image, effect) {
    const inputPath = path.join(imageDir, image);
    const outputPath = path.join(processedDir, `processed_${effect}_${image}`);

    console.log(`Aplicando efecto "${effect}" a ${image}...`);

    let img = sharp(inputPath);

    switch (effect) {
        case "grayscale":
            img = img.grayscale();
            break;
        case "sepia":
            img = img.tint({ r: 112, g: 66, b: 20 });
            break;
        case "invert":
            img = img.negate();
            break;
        case "blur":
            img = img.blur(5);
            break;
    }

    await img.toFile(outputPath);
    return { image, effect };
}

parentPort.on("message", async ({ image, effect }) => {
    const result = await applyEffect(image, effect);
    parentPort.postMessage(result);
});
