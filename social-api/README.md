
# 🌍 API de Apoio a Pessoas em Situação de Rua

Esta API fornece acesso a informações sobre recursos sociais como alimentação, abrigo, higiene e outros serviços disponíveis para pessoas em situação de rua.

---

## 🚀 Tecnologias

- Node.js
- Express.js
- Swagger (para documentação)
- ES6 Modules

---

## 📦 Instalação e execução local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Acesse a pasta
cd seu-repo

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

A API estará disponível em:  
📍 `http://localhost:3000`

---

## 📚 Documentação da API

A documentação gerada automaticamente via Swagger está disponível em:

📄 [`http://localhost:3000/docs`](http://localhost:3000/docs)

---

## 🧩 Endpoints disponíveis

### 🔹 Listar todos os recursos

`GET /recursos`

---

### 🔹 Buscar por tipo

`GET /recursos/tipo/{tipo}`

Exemplo:
```
/recursos/tipo/refeição
```

---

### 🔹 Buscar por localização

`GET /recursos/localizacao/{localizacao}`

Exemplo:
```
/recursos/localizacao/centro
```

---

### 🔹 Buscar por ID

`GET /recursos/{id}`

Exemplo:
```
/recursos/1
```

---

## 🧪 Teste rápido com cURL

```bash
curl http://localhost:3000/recursos
curl http://localhost:3000/recursos/tipo/refeição
curl http://localhost:3000/recursos/localizacao/centro
curl http://localhost:3000/recursos/1
```

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests. Toda ajuda é bem-vinda ❤️

---

## 📄 Licença

Este projeto está sob a licença MIT.

