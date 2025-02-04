# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]