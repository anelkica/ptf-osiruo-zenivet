# Koristi zvaničnu Node.js sliku
FROM node:20

# Kreiraj radni direktorijum u kontejneru
WORKDIR /app

# Kopiraj package fajlove i instaliraj zavisnosti
COPY package*.json ./
RUN npm install

# Kopiraj ostatak aplikacije
COPY . .

# Definiši port koji kontejner izlaže
EXPOSE 5173

# Pokreni aplikaciju
CMD ["node", "index.js"]
