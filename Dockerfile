# Usar uma imagem base mais leve com Node.js
FROM node:20-alpine

# Instalar dependências para compilar o bcrypt (Python, make, g++)
RUN apk add --no-cache \
    python3 \
    make \
    g++

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar os arquivos do seu projeto para o container
COPY . .

# Instalar dependências do npm, sem caches
RUN npm install

# Desinstalar e reinstalar o bcrypt (com compilação a partir do código-fonte)
RUN npm uninstall bcrypt && \
    npm install bcrypt && \
    npm rebuild bcrypt --build-from-source && \
    npm cache clean --force

# Expor a porta que o app vai rodar
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "start"]
