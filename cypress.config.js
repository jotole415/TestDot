const { defineConfig } = require("cypress");

const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Formata a data para uso em nomes de pastas

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações adicionais (opcional)
    },
    baseUrl: "https://www.amazon.com.br",
    video: true, // Habilita a gravação de vídeos
    videosFolder: `cypress/videos/${timestamp}`, // Adiciona timestamp para vídeos
    screenshotOnRunFailure: true, // Captura screenshots apenas em falhas
    screenshotsFolder: `cypress/screenshots/${timestamp}`, // Adiciona timestamp para screenshots
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    reporter: 'mochawesome', // Usando Mochawesome para relatórios (opcional)
    reporterOptions: {
      reportDir: 'cypress/reports', // Defina o diretório dos relatórios
      overwrite: true,
      html: true,
      json: true
    }
  },
});