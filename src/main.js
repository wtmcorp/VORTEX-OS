import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="scanlines"></div>
  
  <header>
    <div class="logo-container">
      <div class="logo-icon">V</div>
      <div class="logo-text">
        <h1 style="font-size: 18px; font-weight: 800; letter-spacing: 2px;">VORTEX OS</h1>
        <p style="font-size: 9px; color: var(--accent); font-weight: 700;">CYBER INTELLIGENCE SYSTEM</p>
      </div>
    </div>
    
    <div class="search-container">
      <input type="text" id="targetUrl" class="input-vortex" placeholder="ENVIAR ALVO (URL) PARA EXTRAÇÃO..." spellcheck="false">
      <button id="scanBtn" class="btn-scan">INICIAR EXTRAÇÃO</button>
    </div>
    
    <div class="header-status">
      <span style="color: var(--accent); font-weight: 800;">● SYSTEM_ONLINE:V1.0</span>
    </div>
  </header>

  <aside class="sidebar">
    <section>
      <h2>Módulos de Defesa</h2>
      <div class="status-item">
        <span class="status-label">ANTIVIRUS FIREWALL</span>
        <span class="status-value">CONNECTED</span>
      </div>
      <div class="status-item">
        <span class="status-label">ENCRYPTOR TUNNEL</span>
        <span class="status-value">ACTIVE (AES256)</span>
      </div>
      <div class="status-item">
        <span class="status-label">PROXY SHIELD</span>
        <span class="status-value">ENABLED</span>
      </div>
    </section>

    <section>
      <h2>Auditoria em Tempo Real</h2>
      <div class="status-item">
        <span class="status-label">ESTADO GERAL</span>
        <span class="status-value">AGUARDANDO...</span>
      </div>
      <div class="status-item">
        <span class="status-label">REPUTAÇÃO IP</span>
        <span class="status-value">LIMPO</span>
      </div>
    </section>
  </aside>

  <main class="main-view">
    <div class="display-grid">
      <div class="data-card" id="cardSecurity">
        <h3>Grau de Segurança</h3>
        <div class="data-value">--%</div>
      </div>
      <div class="data-card" id="cardPerformance">
        <h3>Latência (ms)</h3>
        <div class="data-value">0ms</div>
      </div>
      <div class="data-card" id="cardVulnerabilities">
        <h3>Vulnerabilidades</h3>
        <div class="data-value" style="color: var(--accent);">0</div>
      </div>
    </div>

    <div class="terminal-container" id="terminal">
      <div class="terminal-line">
        <span class="timestamp">[19:24:12]</span>
        <span class="log-info">Iniciando VORTEX INTELLIGENCE SYSTEM...</span>
      </div>
      <div class="terminal-line">
        <span class="timestamp">[19:24:13]</span>
        <span class="log-success">Conexão estabelecida com backbone global.</span>
      </div>
      <div class="terminal-line">
        <span class="timestamp">[19:24:13]</span>
        <span class="log-info">Aguardando inserção de URL para auditoria de dados...</span>
      </div>
    </div>
  </main>
`

const terminal = document.querySelector('#terminal');
const scanBtn = document.querySelector('#scanBtn');
const targetInput = document.querySelector('#targetUrl');

function log(msg, type = 'info') {
  const line = document.createElement('div');
  line.className = 'terminal-line';
  const time = new Date().toLocaleTimeString();
  
  let typeClass = 'log-info';
  if (type === 'success') typeClass = 'log-success';
  if (type === 'warn') typeClass = 'log-warn';
  if (type === 'error') typeClass = 'log-error';

  line.innerHTML = `
    <span class="timestamp">[${time}]</span>
    <span class="${typeClass}">${msg}</span>
  `;
  
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

async function runExtraction() {
  const url = targetInput.value.trim();
  if (!url) {
    log("ERRO: Nenhuma URL de alvo especificada.", "error");
    return;
  }

  log(`ALVO DEFINIDO: ${url}`, "warn");
  log("Iniciando varredura de camadas...", "info");

  // Simulação de passos de "Intelligence"
  const steps = [
    { msg: "Conectando ao Proxy Residencial...", delay: 800, type: 'info' },
    { msg: "Bypass de Firewalls (WAF/Cloudflare)...", delay: 1200, type: 'warn' },
    { msg: "Analizando estrutura DOM e scripts internos...", delay: 1000, type: 'info' },
    { msg: "Capturando dados públicos de arquivo histórico...", delay: 1500, type: 'info' },
    { msg: "Extraindo headers de segurança...", delay: 1200, type: 'info' },
    { msg: "Vulnerabilidades identificadas: 0 (Segurança Forte)", delay: 800, type: 'success' },
    { msg: "RELATÓRIO DE EXTRAÇÃO PRONTO PARA DOWNLOAD.", delay: 500, type: 'success' }
  ];

  for (const step of steps) {
    await new Promise(r => setTimeout(r, step.delay));
    log(step.msg, step.type);
    
    // Atualiza cards aleatoriamente durante o processo
    if (step.msg.includes("Bypass")) {
        document.querySelector('#cardSecurity .data-value').innerText = "88%";
        document.querySelector('#cardPerformance .data-value').innerText = "142ms";
    }
  }
}

scanBtn.addEventListener('click', runExtraction);
targetInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') runExtraction();
});
