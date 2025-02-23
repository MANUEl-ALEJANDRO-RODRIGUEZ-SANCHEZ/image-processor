# 🎨 Image Processor - Procesador de Imágenes con Node.js y Worker Threads 🚀

¡Bienvenido a **Image Processor**! Este proyecto es un procesador de imágenes concurrente, desarrollado en **Node.js** usando **Worker Threads** para aprovechar múltiples núcleos de CPU y mejorar el rendimiento en tareas de procesamiento de imágenes.

## ✨ Introducción
Este programa distribuye el procesamiento de imágenes en **múltiples hilos**, aplicando efectos como:
- 🎨 **Blanco y Negro**
- 🧔 **Sepia**
- 🔄 **Invertir Colores**
- 🌬️ **Desenfoque (Blur)**

En lugar de procesar imágenes de manera secuencial y lenta, este proyecto aprovecha **hilos de ejecución paralelos**, mejorando la velocidad y eficiencia.

## 🔥 Características
✔️ **Procesamiento concurrente** con múltiples hilos.  
✔️ **Uso eficiente de CPU** mediante `Worker Threads`.  
✔️ **Efectos reales aplicados** con la librería `sharp`.  
✔️ **Manejo dinámico de carga** según disponibilidad de hilos.  
✔️ **Escalable**: Fácilmente adaptable para más efectos y optimizaciones.  

## 🛠️ Tecnologías Usadas
- **Node.js** (Ejecución del código)
- **Worker Threads** (Procesamiento paralelo)
- **Sharp** (Manipulación de imágenes)
- **File System (fs)** (Gestión de archivos)

---

## 👅 Instalación y Configuración

### 1️⃣ **Clonar el repositorio**
Abre una terminal y ejecuta:
```sh
git clone https://github.com/MANUEL-ALEJANDRO-RODRIGUEZ-SANCHEZ/image-processor.git
cd image-processor
```

### 2️⃣ **Instalar dependencias**
Ejecuta el siguiente comando:
```sh
npm install
```

### 3️⃣ **Preparar las imágenes**
- Crea una carpeta `images/` en la raíz del proyecto.  
- Agrega algunas imágenes **.jpg** o **.png** en esta carpeta.  

Ejemplo:
```
/image-processor
│── images/
│   ├── foto1.jpg
│   ├── foto2.png
│   ├── imagen3.jpg
```

---

## ▶️ Uso del Programa

Para ejecutar el procesador de imágenes, usa:
```sh
node main.js
```
Esto iniciará el programa y comenzará a aplicar efectos a las imágenes.

---

## 🖥️ Ejemplo de Salida en Consola

```
##### Procesador de imágenes iniciado con 4 hilos #####

Aplicando efecto "sepia" a imagen1.jpg...
Aplicando efecto "grayscale" a imagen2.jpg...
Aplicando efecto "invert" a imagen3.jpg...
Aplicando efecto "blur" a imagen4.jpg...

imagen2.jpg procesada con efecto "grayscale"

imagen3.jpg procesada con efecto "invert"
imagen1.jpg procesada con efecto "sepia"
imagen4.jpg procesada con efecto "blur"

Todas las imágenes han sido procesadas ().
```

Las imágenes procesadas se guardarán en la carpeta `processed/` con nombres como:
```
/processed/
│── processed_sepia_imagen1.jpg
│── processed_grayscale_imagen2.jpg
│── processed_invert_imagen3.jpg
```

---

📧 **Contacto:** [manuel.rodriguez9120@alumnos.udg.mx](mailto:manuel.rodriguez9120@alumnos.udg.mx)  
💻 **GitHub:** [github.com/MANUEL-ALEJANDRO-RODRIGUEZ-SANCHEZ](https://github.com/MANUEL-ALEJANDRO-RODRIGUEZ-SANCHEZ)  

---

