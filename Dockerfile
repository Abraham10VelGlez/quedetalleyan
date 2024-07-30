FROM node:22-alpine

WORKDIR /app

# Copia package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install

# Copia el resto de la aplicación
COPY . .

# Exponer el puerto que Vite usará
EXPOSE 5174

# Comando para iniciar la aplicación en modo desarrollo
CMD ["yarn", "dev"]


#COMANDOS PARA EJECUTAR DOCKERFILE
#COMANDO 1
# docker build -t nodedigimon .
#COMANDO 2
#docker run -it -p 4000:5174 nodequedetalle
#llegando a conclusion que sirve para entorno de produccion en docker