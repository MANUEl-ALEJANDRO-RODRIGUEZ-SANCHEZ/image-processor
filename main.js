const { Worker } = require("worker_threads");
const fs = require("fs");
const path = require("path");

const NUM_WORKERS = 4; // Numero de hilos
const imageDir = path.join(__dirname, "images");
const processedDir = path.join(__dirname, "processed");

if (!fs.existsSync(processedDir)) fs.mkdirSync(processedDir);

// Obtener imagenes de la carpeta "images"
const images = fs.readdirSync(imageDir).filter(file => /\.(jpg|png)$/i.test(file));

// Efectos a aplicar
const effects = ["grayscale", "sepia", "invert", "blur"];

// Funcion para asignar tareas a los workers
function processImages() {
    console.log(`##### Procesador de imagenes iniciado con ${NUM_WORKERS} hilos #####\n`);

    let activeWorkers = 0;
    let processedImages = 0;

    for (let i = 0; i < NUM_WORKERS; i++) {
        if (images.length === 0) break; // No mas imagenes para procesar

        const worker = new Worker(path.join(__dirname, "worker.js"));

        worker.postMessage({ 
            image: images.shift(), 
            effect: effects[i] 
        });

        activeWorkers++;

        worker.on("message", (msg) => {
            console.log(`${msg.image} procesada con efecto "${msg.effect}"`);
            processedImages++;

            if (images.length > 0) {
                // Asignar otra tarea si hay mas imagenes
                worker.postMessage({ 
                    image: images.shift(), 
                    effect: effects[i] 
                });
            } else {
                worker.terminate();
                activeWorkers--;

                if (activeWorkers === 0) {
                    console.log(`\nTodas las imagenes han sido procesadas (${processedImages}).`);
                }
            }
        });

        worker.on("error", (err) => console.error("Error en el worker:", err));

        worker.on("exit", (code) => {
            if (code !== 0) {
                console.error(`Worker finalizado con codigo ${code}`);
            }
        });
    }
}

processImages();
