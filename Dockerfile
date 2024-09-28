# Usa la imagen oficial de Node.js como base para la construcción
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de tu aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen de servidor web ligero para servir la aplicación (NGINX)
FROM nginx:alpine

# Copia los archivos de construcción desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación esté disponible
EXPOSE 80

# Comando por defecto para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
