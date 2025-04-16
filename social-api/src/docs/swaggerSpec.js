const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'API de Apoio a Pessoas em Situação de Rua',
    version: '1.0.0',
    description: 'Esta API fornece acesso a recursos sociais como alimentação, abrigo e apoio a pessoas em situação de rua.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local de desenvolvimento',
    },
  ],
  tags: [
    {
      name: 'Recursos',
      description: 'Endpoints relacionados aos recursos sociais',
    },
  ],
  paths: {
    '/recursos': {
      get: {
        tags: ['Recursos'],
        summary: 'Lista todos os recursos disponíveis',
        responses: {
          200: {
            description: 'Lista de recursos retornada com sucesso',
          },
        },
      },
    },
    '/recursos/tipo/{tipo}': {
      get: {
        tags: ['Recursos'],
        summary: 'Filtra recursos por tipo (ex: refeição, banho)',
        parameters: [
          {
            in: 'path',
            name: 'tipo',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'Tipo do recurso a ser buscado',
          },
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por tipo retornados com sucesso',
          },
        },
      },
    },
    '/recursos/localizacao/{localizacao}': {
      get: {
        tags: ['Recursos'],
        summary: 'Filtra recursos por localização (bairro, cidade)',
        parameters: [
          {
            in: 'path',
            name: 'localizacao',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'Localização para filtrar os recursos',
          },
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por localização retornados com sucesso',
          },
        },
      },
    },
    '/recursos/{id}': {
      get: {
        tags: ['Recursos'],
        summary: 'Busca um recurso específico pelo ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'integer',
            },
            description: 'ID do recurso',
          },
        ],
        responses: {
          200: {
            description: 'Recurso encontrado com sucesso',
          },
          404: {
            description: 'Recurso não encontrado',
          },
        },
      },
    },
  },
};

export default swaggerSpec;
