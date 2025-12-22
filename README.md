# Thiers - Site Institucional

Site institucional da Thiers desenvolvido em Angular.

## 🚀 Funcionalidades

- **Header/Navegação**: Menu responsivo com navegação suave
- **Hero Section**: Seção principal com call-to-action
- **Sobre**: História da empresa e estatísticas
- **Soluções**: Cards clicáveis que abrem modais com informações detalhadas
- **Depoimentos**: Seção de feedback de clientes
- **Newsletter**: Formulário de cadastro de e-mail
- **Footer**: Links e informações de contato

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

## 🛠️ Instalação

1. Instale as dependências:
```bash
npm install
```

2. Adicione o logo da empresa:
   - Coloque o arquivo `Logo-Sem-Fundo.png` na pasta `public/`
   - O logo será exibido no header e footer

## 🏃 Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

O site estará disponível em `http://localhost:4200/`

## 📦 Build para Produção

Para gerar o build de produção:

```bash
ng build
```

Os arquivos compilados estarão na pasta `dist/thiers/`

## 🎨 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Cabeçalho e navegação
│   │   ├── hero/             # Seção principal
│   │   ├── about/            # Sobre a empresa
│   │   ├── solutions/        # Cards de soluções
│   │   ├── solution-modal/   # Modal de detalhes da solução
│   │   ├── testimonials/     # Depoimentos
│   │   ├── newsletter/       # Formulário de newsletter
│   │   └── footer/           # Rodapé
│   └── services/
│       └── solutions.service.ts  # Gerenciamento de soluções e modais
├── styles.css                # Estilos globais
└── ...
```

## 🔧 Personalização

### Cores e Tema

As cores podem ser personalizadas no arquivo `src/styles.css` através das variáveis CSS:

```css
:root {
  --primary-color: #0066cc;
  --primary-dark: #0052a3;
  --secondary-color: #00a8e8;
  --accent-color: #ff6b35;
  /* ... */
}
```

### Conteúdo das Soluções

O conteúdo das soluções está definido no serviço `src/app/services/solutions.service.ts`. Você pode editar os textos, adicionar ou remover soluções conforme necessário.

### Depoimentos

Os depoimentos podem ser editados no componente `src/app/components/testimonials/testimonials.component.ts`.

## 📝 Notas Importantes

- **Logo**: Certifique-se de adicionar o arquivo `Logo-Sem-Fundo.png` na pasta `public/`
- **Modal de Soluções**: Ao clicar em um card de solução, um modal é aberto com informações detalhadas
- **Responsividade**: O site é totalmente responsivo e se adapta a diferentes tamanhos de tela

## 🐛 Solução de Problemas

Se o logo não aparecer:
1. Verifique se o arquivo `Logo-Sem-Fundo.png` está na pasta `public/`
2. Verifique se o nome do arquivo está correto (case-sensitive)
3. Limpe o cache do navegador

## 📄 Licença

Este projeto é propriedade da Thiers.
