# Establecer la imagen base
FROM node:lts

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar os archivos de configuración de la aplicación al contenedor
COPY package.json yarn.lock ./

# Instalar las dependencias de la aplicación
RUN npm install or yarn install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE ${APP_PORT}

# Comando para iniciar la aplicación
CMD ["yarn", "dev"]