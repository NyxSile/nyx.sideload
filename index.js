/* ════════════════════════════════════
   i18n
════════════════════════════════════ */
const i18n = {
  ru: {
    "who-are-you": "Кто ты сегодня?",
    "newbie-title": "Новичок",
    "newbie-desc": "Объясни мне всё по шагам",
    "pro-title": "Профи",
    "pro-desc": "Дай быстрый доступ",
    "mode-tutorial": "Режим: Гид Ароны",
    "mode-pro": "Режим: Быстрый доступ",
    "hero-title-1": "iOS",
    "hero-title-2": "без ограничений",
    "hero-title-3": "на своих условиях",
    "hero-sub": "Сертификаты, анти-ревок и нужный софт — в одном месте.",
    "sec-dns-label": "Анти-ревок",
    "dns-title": "DNS-профиль",
    "dns-sub": "Блокирует проверку сертификатов Apple",
    "ping-checking": "Проверка...",
    "ping-ok": "Серверы OK",
    "ping-down": "Сервер недоступен",
    "dns-install": "Установить профиль",
    "dns-whats-this": "Что это?",
    "sec-tools-label": "Инструменты",
    "tag-recommended": "Рекомендован",
    "tag-alt": "Альтернатива",
    "tag-new": "Новый",
    "coming-soon": "Совсем скоро...",
    "cert-select": "Выбрать сертификат...",
    "install": "Установить",
    "sec-support-label": "Поддержка",
    "sup-tg": "Telegram",
    "changelog-label": "Обновления",
    "cl-date-1": "18 июл",
    "cl-1": "Обновлён сайт",
    "cl-date-2": "17 июл",
    "cl-2": "Построен концепт N.Sign",
    "cl-date-3": "16 июл",
    "cl-3": "Началась разработка",
    "switch-mode": "Сменить режим",
    "report-btn": "⚑ Пожаловаться на ссылку",
    "report-title": "Пожаловаться на ссылку",
    "report-desc": "Опиши проблему — что сломалось и какая ссылка не работает",
    "report-send": "Отправить",
    "cancel": "Отмена",
    "toast-dns": "Открываем установку профиля...",
    "toast-cert-empty": "Сначала выбери сертификат",
    "toast-installing": "Открываем установку...",
    "toast-reported": "Жалоба отправлена. Спасибо!",
    "dns-info-text": "DNS-профиль перенаправляет запросы Apple на локальный блокировщик — это не VPN, не влияет на остальной трафик.",
    "download": "Скачать",
    "launch-btn": "Запустить",
    "tab-standard": "Стандартная подпись",
    "tab-custom": "Кастомизация",
    "label-select-cert": "Выбрать сертификат",
    "cert-disclaimer": "Сертификат используется для подписи приложения, чтобы его можно было установить без джейлбрейка.",
    "custom-lock-msg": "Кастомная подпись, инъекции dylib и смена Bundle ID доступны только в N.Sign.",
    "go-to-nsign": "Открыть N.Sign",
    "nsign-desc": "Локальный подписыватель приложений прямо в браузере",
    "nsign-label-ipa": "Выберите IPA файл",
    "nsign-select-ipa": "Перетащите или выберите IPA",
    "nsign-label-p12": "Сертификат (.p12)",
    "nsign-select-p12": "Выбрать .p12",
    "nsign-label-prov": "Профиль (.mobileprovision)",
    "nsign-select-prov": "Выбрать профиль",
    "nsign-label-pwd": "Пароль сертификата",
    "label-customization": "Кастомизация",
    "opt-bundle": "Смена Bundle ID",
    "opt-bundle-desc": "Установка дубликата приложения",
    "opt-name": "Смена названия",
    "opt-name-desc": "Переименовать иконку на рабочем столе",
    "opt-inject": "Инъекция dylib",
    "opt-inject-desc": "Внедрение твиков и хаков в IPA",
    "select-dylib": "+ Выбрать .dylib файл",
    "nsign-btn-sign": "Подписать и установить",
    "nsign-success": "Приложение подписано!",
    "nsign-success-desc": "Оно готово к установке прямо сейчас.",
    "download-signed-ipa": "Скачать подписанный IPA",
    "sign-another": "Подписать другое приложение",
    "toast-nsign-missing": "Пожалуйста, выберите IPA, сертификат (.p12) и профиль.",
    "download-ipa": "Скачать .ipa",
    "nsign-custom-title": "N.Sign Web-Signer",
    "nsign-custom-desc": "Подписывайте любые сторонние .ipa файлы прямо в браузере своими личными сертификатами (.p12).",
    "launch-web-signer-btn": "Запустить веб-версию",
    "status-revoked": "Все общие сертификаты отозваны Apple! Установите DNS-профиль или используйте личную подпись в N.Sign.",
    "nsign-app-unavailable-title": "Приложение N.Sign пока заправляется!",
    "nsign-app-unavailable-desc": "Приложение N.Sign находится в разработке. Подождите, либо воспользуйтесь веб-версией во вкладке «Кастомизация».",
    "custom-site-theme-label": "Кастомизация сайта (N.Sign Theme)",
    "site-theme-note": "* Тема сайта будет установлена как 10-ая тема N.Sign",
    "theme-applied-toast": "Тема сайта успешно применена!",
    "cl-date-4": "24 июл",
    "cl-4": "Кастомизация сайта, плисты в plists/, иконки и фикс установки",
    "cl-date-5": "3 авг",
    "cl-5": "Подпись приложений, Сайдлоуд с ПК, сохранение темы и фиксы верстки",
    "toast-404": "Страница не найдена! Вы перенаправлены на главную.",
    "title-404": "Страница не найдена!",
    "desc-404": "Ой! Запрашиваемый адрес не существует, но мы перенесли вас на главную страницу.",
    "btn-404-ok": "Понятно",
  },
  en: {
    "who-are-you": "Who are you today?",
    "newbie-title": "Newbie",
    "newbie-desc": "Walk me through step by step",
    "pro-title": "Pro",
    "pro-desc": "Give me fast access",
    "mode-tutorial": "Mode: Arona Guide",
    "mode-pro": "Mode: Fast Access",
    "hero-title-1": "iOS",
    "hero-title-2": "without limits",
    "hero-title-3": "on your terms",
    "hero-sub": "Certificates, anti-revoke, and the tools you need — in one place.",
    "sec-dns-label": "Anti-Revoke",
    "dns-title": "DNS Profile",
    "dns-sub": "Blocks Apple certificate verification",
    "ping-checking": "Checking...",
    "ping-ok": "Servers OK",
    "ping-down": "Server unreachable",
    "dns-install": "Install profile",
    "dns-whats-this": "What is this?",
    "sec-tools-label": "Tools",
    "tag-recommended": "Functional",
    "tag-alt": "Visual",
    "tag-new": "New",
    "coming-soon": "Oh-so soon...",
    "cert-select": "Select certificate...",
    "install": "Install",
    "sec-support-label": "Support",
    "sup-tg": "Telegram",
    "changelog-label": "Changelog",
    "cl-date-1": "18 Jul",
    "cl-1": "Website updated",
    "cl-date-2": "17 Jul",
    "cl-2": "Concept N.Sign built",
    "cl-date-3": "16 Jul",
    "cl-3": "Started development",
    "switch-mode": "Switch mode",
    "report-btn": "⚑ Report a broken link",
    "report-title": "Report a broken link",
    "report-desc": "Describe the issue — what broke and which link doesn't work",
    "report-send": "Send",
    "cancel": "Cancel",
    "toast-dns": "Opening profile installation...",
    "toast-cert-empty": "Please select a certificate first",
    "toast-installing": "Opening installation...",
    "toast-reported": "Report sent. Thank you!",
    "dns-info-text": "A DNS profile redirects Apple's requests to a local blocker — it's not a VPN and doesn't affect other traffic.",
    "download": "Download",
    "launch-btn": "Launch",
    "tab-standard": "Standard signature",
    "tab-custom": "Customization",
    "label-select-cert": "Select certificate",
    "cert-disclaimer": "The certificate is used to sign the application so that it can be installed on non-jailbroken iOS devices.",
    "custom-lock-msg": "Custom signing, dylib injections, and changing Bundle ID are only available in N.Sign.",
    "go-to-nsign": "Open N.Sign",
    "nsign-desc": "Local app signer directly in the browser",
    "nsign-label-ipa": "Select IPA file",
    "nsign-select-ipa": "Drag & drop or select IPA",
    "nsign-label-p12": "Certificate (.p12)",
    "nsign-select-p12": "Select .p12",
    "nsign-label-prov": "Profile (.mobileprovision)",
    "nsign-select-prov": "Select profile",
    "nsign-label-pwd": "Certificate Password",
    "label-customization": "Customization",
    "opt-bundle": "Change Bundle ID",
    "opt-bundle-desc": "Install duplicate application",
    "opt-name": "Change Display Name",
    "opt-name-desc": "Rename desktop icon",
    "opt-inject": "Inject dylib",
    "opt-inject-desc": "Embed tweaks and hacks into IPA",
    "select-dylib": "+ Select .dylib file",
    "nsign-btn-sign": "Sign & Install",
    "nsign-success": "App Signed!",
    "nsign-success-desc": "It is ready to be installed right now.",
    "download-signed-ipa": "Download Signed IPA",
    "sign-another": "Sign another app",
    "toast-nsign-missing": "Please select IPA, certificate (.p12), and profile.",
    "download-ipa": "Download .ipa",
    "nsign-custom-title": "N.Sign Web-Signer",
    "nsign-custom-desc": "Sign any third-party .ipa files directly in your browser using your own personal certificates (.p12).",
    "launch-web-signer-btn": "Launch web-signer",
    "status-revoked": "All public certificates are revoked by Apple! Install the DNS profile or use personal signing in N.Sign.",
    "nsign-app-unavailable-title": "N.Sign app is temporarily unavailable",
    "nsign-app-unavailable-desc": "The N.Sign app is under development. Please use the web version in the 'Customization' tab.",
    "custom-site-theme-label": "Website Customization (N.Sign Theme)",
    "site-theme-note": "* The website theme will be set as the 10th theme of N.Sign",
    "theme-applied-toast": "Website theme applied successfully!",
    "cl-date-4": "24 Jul",
    "cl-4": "Theme customizer, plists in plists/, real icons & install fixes",
    "cl-date-5": "3 Aug",
    "cl-5": "App signing, PC Sideload, theme saving & layout fixes",
    "toast-404": "Page not found! Redirected to home page.",
    "title-404": "Page not found!",
    "desc-404": "Oops! The requested address doesn't exist, but we moved you to the home page.",
    "btn-404-ok": "Got it",
  }
};

let currentLang = localStorage.getItem('nyx-lang') || 'ru';

function t(key) { return (i18n[currentLang] && i18n[currentLang][key]) || key; }

function applyLang() {
  document.querySelectorAll('[data-i]').forEach(el => {
    if (el.children.length > 0) return;
    const key = el.dataset.i;
    const val = t(key);
    if (val) el.textContent = val;
  });
}

/* ════════════════════════════════════
   TOAST
════════════════════════════════════ */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ════════════════════════════════════
   ACTIONS
════════════════════════════════════ */
// DNS
document.getElementById('btn-install-dns').addEventListener('click', () => {
  showToast(t('toast-dns'));
  setTimeout(() => {
    window.location.href = 'dns.mobileconfig';
  }, 900);
});

document.getElementById('btn-dns-info').addEventListener('click', () => {
  showToast(t('dns-info-text'));
});

// Lang toggle
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('nyx-lang', currentLang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyLang();
  });
});

// Report modal
document.getElementById('btn-report').addEventListener('click', () => {
  document.getElementById('report-modal').classList.remove('hidden');
});
document.getElementById('btn-report-cancel').addEventListener('click', () => {
  document.getElementById('report-modal').classList.add('hidden');
});
document.getElementById('btn-report-send').addEventListener('click', () => {
  const text = document.getElementById('report-text').value.trim();
  if (!text) return;

  const issueTitle = encodeURIComponent('Broken link report');
  const issueBody = encodeURIComponent(`Page: ${window.location.href}` + String.fromCharCode(10) + String.fromCharCode(10) + text);
  const issueUrl = `https://github.com/NyxSile/nyx.sideload/issues/new?title=${issueTitle}&body=${issueBody}&labels=broken-link`;

  document.getElementById('report-modal').classList.add('hidden');
  document.getElementById('report-text').value = '';
  window.open(issueUrl, '_blank', 'noopener,noreferrer');
  showToast(t('toast-reported'));
});
document.getElementById('report-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('report-modal')) {
    document.getElementById('report-modal').classList.add('hidden');
  }
});

/* ════════════════════════════════════
   MODALS AND BINDINGS
════════════════════════════════════ */
let activeTool = '';
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let appMetadata = {};

async function loadMetadata() {
  try {
    const res = await fetch('version.json?v=' + Date.now());
    appMetadata = await res.json();
    
    // Update versions in the main UI cards dynamically
    if (appMetadata['esign']) {
      const el = document.querySelector('#card-esign .tool-meta-new span:nth-child(2)');
      if (el) el.textContent = 'v' + appMetadata['esign'].version;
    }
    if (appMetadata['ksign']) {
      const el = document.querySelector('#card-ksign .tool-meta-new span:nth-child(2)');
      if (el) el.textContent = 'v' + appMetadata['ksign'].version;
    }
    if (appMetadata['nsign']) {
      const el = document.querySelector('#card-nsign .tool-meta-new span:nth-child(2)');
      if (el) el.textContent = 'v' + appMetadata['nsign'].version;
    }
  } catch (e) {
    console.error("Failed to load version.json metadata:", e);
  }
}

function updateModalMetadata() {
  const certSelect = document.getElementById('modal-cert-select');
  const cert = certSelect ? certSelect.value : '';
  const key = `${activeTool}-${cert}`;
  const meta = appMetadata[key] || appMetadata[activeTool] || {};
  
  const version = document.getElementById('modal-app-version');
  const size = document.getElementById('modal-app-size');
  const bundle = document.getElementById('modal-app-bundle');
  
  if (version) version.textContent = meta.version || (activeTool === 'nsign' ? '1.0.0' : '1.5.1');
  if (size) size.textContent = meta.size || '14.9 MB';
  if (bundle) bundle.textContent = meta.bundle || (activeTool === 'esign' ? 'p3.xyz.yyyue.esign' : (activeTool === 'ksign' ? 'nya.asami.ksign' : 'nyx.sideload.nsign'));
}

function openInstaller(tool) {
  activeTool = tool;
  const modal = document.getElementById('installer-modal');
  const title = document.getElementById('inst-modal-title');
  const iconContainer = document.getElementById('modal-app-icon');
  const installText = document.getElementById('btn-modal-install-text');
  
  // Set tab back to standard
  document.getElementById('tab-btn-standard').click();
  
  // Toggle standard tab fields/unavailable state
  if (tool === 'nsign') {
    document.getElementById('standard-install-fields').style.display = 'none';
    document.getElementById('standard-install-unavailable').style.display = 'flex';
  } else {
    document.getElementById('standard-install-fields').style.display = 'block';
    document.getElementById('standard-install-unavailable').style.display = 'none';
  }
  
  // Update version, bundle, size dynamically
  updateModalMetadata();
  
  // Default name fallback
  let nameVal = tool === 'esign' ? 'ESign' : (tool === 'ksign' ? 'KSign' : 'N.Sign');
  if (appMetadata[tool]) {
    nameVal = appMetadata[tool].app || nameVal;
  }
  title.textContent = nameVal;
  
  // Custom check: openInstaller copies the innerHTML containing the new <img> elements
  iconContainer.innerHTML = document.querySelector(`#card-${tool} .tool-icon-container`).innerHTML;
  
  // Toggle customization tab locked state
  if (tool === 'nsign') {
    document.getElementById('custom-locked-view').style.display = 'none';
    document.getElementById('custom-unlocked-view').style.display = 'flex';
    document.getElementById('custom-preview-list-el').style.opacity = '1';
  } else {
    document.getElementById('custom-locked-view').style.display = 'flex';
    document.getElementById('custom-unlocked-view').style.display = 'none';
    document.getElementById('custom-preview-list-el').style.opacity = '0.3';
  }
  
  // Update button text based on platform
  if (isIOS) {
    installText.setAttribute('data-i', 'install');
    installText.textContent = t('install');
  } else {
    installText.setAttribute('data-i', 'download-ipa');
    installText.textContent = t('download-ipa');
  }
  
  modal.classList.add('active');
}

function closeInstaller() {
  document.getElementById('installer-modal').classList.remove('active');
}

function openNSign() {
  closeInstaller();
  document.getElementById('nsign-modal').classList.add('active');
  resetNSignForm();
}

function closeNSign() {
  document.getElementById('nsign-modal').classList.remove('active');
}

// Tabs switching in Installer
document.getElementById('tab-btn-standard').addEventListener('click', () => {
  document.getElementById('tab-btn-standard').classList.add('active');
  document.getElementById('tab-btn-custom').classList.remove('active');
  document.getElementById('tab-content-standard').classList.add('active');
  document.getElementById('tab-content-custom').classList.remove('active');
});

document.getElementById('tab-btn-custom').addEventListener('click', () => {
  document.getElementById('tab-btn-custom').classList.add('active');
  document.getElementById('tab-btn-standard').classList.remove('active');
  document.getElementById('tab-content-custom').classList.add('active');
  document.getElementById('tab-content-standard').classList.remove('active');
});

// Go to N.Sign button inside Installer modal (lock overlay)
document.getElementById('btn-go-nsign').addEventListener('click', () => openInstaller('nsign'));

// Launch N.Sign web-signer from customization tab
document.getElementById('btn-launch-web-signer').addEventListener('click', openNSign);

// Synchronize and apply theme
function applyTheme(theme, showNotification = true) {
  const root = document.documentElement;
  if (theme === 'violet') {
    root.style.setProperty('--accent', '#7850dc');
    root.style.setProperty('--accent-lo', 'rgba(120, 80, 220, 0.1)');
  } else if (theme === 'cyberpunk') {
    root.style.setProperty('--accent', '#EC4899');
    root.style.setProperty('--accent-lo', 'rgba(236, 72, 153, 0.1)');
  } else if (theme === 'dark-gold') {
    root.style.setProperty('--accent', '#D4AF37');
    root.style.setProperty('--accent-lo', 'rgba(212, 175, 55, 0.1)');
  } else if (theme === 'emerald') {
    root.style.setProperty('--accent', '#10B981');
    root.style.setProperty('--accent-lo', 'rgba(16, 185, 129, 0.1)');
  }
  
  localStorage.setItem('nyx-theme', theme);
  
  // Synchronize values of both theme selectors
  const siteSel = document.getElementById('site-theme-select');
  const headerSel = document.getElementById('header-theme-select');
  if (siteSel) siteSel.value = theme;
  if (headerSel) headerSel.value = theme;
  
  if (showNotification) {
    showToast(t('theme-applied-toast') || 'Тема успешно применена!');
  }
}

document.getElementById('site-theme-select').addEventListener('change', (e) => applyTheme(e.target.value, true));
document.getElementById('header-theme-select').addEventListener('change', (e) => applyTheme(e.target.value, true));

// Theme customizer modal bindings
document.getElementById('btn-header-theme').addEventListener('click', () => {
  document.getElementById('theme-modal').classList.add('active');
});
document.getElementById('btn-close-theme').addEventListener('click', () => {
  document.getElementById('theme-modal').classList.remove('active');
});
document.getElementById('theme-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('theme-modal')) {
    document.getElementById('theme-modal').classList.remove('active');
  }
});

// Open triggers
document.getElementById('btn-open-esign').addEventListener('click', () => openInstaller('esign'));
document.getElementById('btn-open-ksign').addEventListener('click', () => openInstaller('ksign'));
document.getElementById('btn-open-nsign').addEventListener('click', () => openInstaller('nsign'));
document.getElementById('modal-cert-select').addEventListener('change', updateModalMetadata);

// Close triggers
document.getElementById('btn-close-installer').addEventListener('click', closeInstaller);
document.getElementById('btn-close-nsign').addEventListener('click', closeNSign);

// Close modals when clicking backdrop
document.getElementById('installer-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('installer-modal')) closeInstaller();
});
document.getElementById('nsign-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('nsign-modal')) closeNSign();
});

// Install Button click in modal
document.getElementById('btn-modal-install').addEventListener('click', () => {
  const cert = document.getElementById('modal-cert-select').value;
  if (!cert) { showToast(t('toast-cert-empty')); return; }
  
  const finalBaseUrl = appMetadata.base_url || 'https://sideload.nyxsile.lol';
  const ipaKey = `${activeTool}-${cert}`;
  let ipaPath = `ipas/${activeTool}/${activeTool}-${cert}.ipa`; // fallback
  if (appMetadata[ipaKey] && appMetadata[ipaKey].ipa) {
    ipaPath = appMetadata[ipaKey].ipa;
  }
  
  if (isIOS) {
    showToast(t('toast-installing'));
    setTimeout(() => {
      // Point to our generated manifest plists inside plists/ folder
      const manifest = `${finalBaseUrl}/plists/manifest-${activeTool}-${cert}.plist?v=${Date.now()}`;
      window.location.href = `itms-services://?action=download-manifest&url=${encodeURIComponent(manifest)}`;
    }, 1000);
  } else {
    showToast(t('toast-installing'));
    setTimeout(() => {
      // Directly download the IPA dynamically using the exact path from version.json
      window.location.href = `${finalBaseUrl}/${ipaPath}`;
    }, 1000);
  }
});

// N.Sign mock files setup
const fileInputs = {
  ipa: { drop: 'nsign-drop-ipa', inp: 'inp-ipa-file', txt: 'txt-ipa-file', def: 'nsign-select-ipa' },
  p12: { drop: 'nsign-drop-p12', inp: 'inp-p12-file', txt: 'txt-p12-file', def: 'nsign-select-p12' },
  prov: { drop: 'nsign-drop-prov', inp: 'inp-prov-file', txt: 'txt-prov-file', def: 'nsign-select-prov' },
};

Object.entries(fileInputs).forEach(([key, val]) => {
  const dropZone = document.getElementById(val.drop);
  const fileInput = document.getElementById(val.inp);
  const textEl = document.getElementById(val.txt);
  
  dropZone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      textEl.textContent = e.target.files[0].name;
      textEl.style.color = 'var(--ok)';
    }
  });
  
  // Drag & drop handlers
  dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = 'var(--accent)'; });
  dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = ''; });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '';
    if (e.dataTransfer.files.length > 0) {
      fileInput.files = e.dataTransfer.files;
      textEl.textContent = e.dataTransfer.files[0].name;
      textEl.style.color = 'var(--ok)';
    }
  });
});

// Toggles in N.Sign
const setupToggle = (chkId, inpId) => {
  const chk = document.getElementById(chkId);
  const inp = document.getElementById(inpId);
  chk.addEventListener('change', () => {
    inp.style.display = chk.checked ? 'block' : 'none';
  });
};
setupToggle('chk-custom-bundle', 'inp-custom-bundle');
setupToggle('chk-custom-name', 'inp-custom-name');
setupToggle('chk-custom-inject', 'box-custom-inject');

// Dylib select
const dylibBtn = document.getElementById('btn-select-dylib');
const dylibInp = document.getElementById('inp-dylib-file');
const dylibTxt = document.getElementById('txt-dylib-file');
dylibBtn.addEventListener('click', () => dylibInp.click());
dylibInp.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    dylibTxt.textContent = e.target.files[0].name;
    dylibTxt.style.color = 'var(--ok)';
  }
});

// Sign simulation logic
document.getElementById('btn-nsign-submit').addEventListener('click', () => {
  const ipa = document.getElementById('inp-ipa-file').files[0];
  const p12 = document.getElementById('inp-p12-file').files[0];
  const prov = document.getElementById('inp-prov-file').files[0];
  
  if (!ipa || !p12 || !prov) {
    showToast(t('toast-nsign-missing'));
    return;
  }
  
  const formFields = document.getElementById('nsign-form-fields');
  const consoleEl = document.getElementById('nsign-console');
  const progressContainer = document.getElementById('nsign-progress-container');
  const progressBar = document.getElementById('nsign-progress');
  
  formFields.style.display = 'none';
  consoleEl.style.display = 'flex';
  progressContainer.style.display = 'block';
  consoleEl.innerHTML = '';
  progressBar.style.width = '0%';
  
  const logs = [
    { text: '[+] Анализ IPA пакета...', time: 600, prog: 10 },
    { text: `[+] Найдено Payload/${ipa.name.replace('.ipa', '')}.app`, time: 1200, prog: 20 },
    { text: '[+] Извлечение бинарных файлов...', time: 1800, prog: 30 }
  ];
  
  if (document.getElementById('chk-custom-bundle').checked) {
    const customBundle = document.getElementById('inp-custom-bundle').value || 'com.custom.sideload';
    logs.push({ text: `[+] Изменение Bundle ID на: ${customBundle}`, time: 2400, prog: 40 });
  }
  if (document.getElementById('chk-custom-name').checked) {
    const customName = document.getElementById('inp-custom-name').value || 'SignedApp';
    logs.push({ text: `[+] Изменение Display Name на: ${customName}`, time: 3000, prog: 50 });
  }
  if (document.getElementById('chk-custom-inject').checked && dylibInp.files[0]) {
    logs.push({ text: `[+] Инъекция динамической библиотеки: ${dylibInp.files[0].name}`, time: 3600, prog: 65 });
  }
  
  logs.push(
    { text: `[+] Проверка сертификата: ${p12.name}...`, time: 4200, prog: 75 },
    { text: `[+] Подпись исполняемого файла с профилем ${prov.name}...`, time: 4800, prog: 85 },
    { text: '[+] Компрессия подписанного IPA пакета...', time: 5400, prog: 95 },
    { text: '[+] Подписание завершено успешно! Генерация OTA манифеста...', time: 6000, prog: 100 }
  );
  
  logs.forEach(log => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.textContent = log.text;
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
      progressBar.style.width = `${log.prog}%`;
    }, log.time);
  });
  
  setTimeout(() => {
    consoleEl.style.display = 'none';
    progressContainer.style.display = 'none';
    document.getElementById('nsign-success-area').style.display = 'flex';
    
    // Customize N.Sign install buttons
    const installBtnText = document.getElementById('txt-nsign-install-btn');
    if (isIOS) {
      installBtnText.setAttribute('data-i', 'install');
      installBtnText.textContent = t('install');
    } else {
      installBtnText.setAttribute('data-i', 'download-ipa');
      installBtnText.textContent = t('download-ipa');
    }
  }, 6800);
});

// Install custom signed app from N.Sign
document.getElementById('btn-nsign-install').addEventListener('click', () => {
  showToast(t('toast-installing'));
  const finalBaseUrl = appMetadata.base_url || 'https://sideload.nyxsile.lol';
  setTimeout(() => {
    if (isIOS) {
      const manifest = `${finalBaseUrl}/plists/manifest-ksign-jiangsu-simcere.plist?v=${Date.now()}`;
      window.location.href = `itms-services://?action=download-manifest&url=${encodeURIComponent(manifest)}`;
    } else {
      window.location.href = `${finalBaseUrl}/ipas/ksign/ksign-jiangsu-simcere.ipa`;
    }
  }, 1000);
});

document.getElementById('btn-nsign-download').addEventListener('click', () => {
  showToast(t('toast-installing'));
  const finalBaseUrl = appMetadata.base_url || 'https://sideload.nyxsile.lol';
  setTimeout(() => {
    window.location.href = `${finalBaseUrl}/ipas/ksign/ksign-jiangsu-simcere.ipa`;
  }, 1000);
});

// Reset N.Sign form
function resetNSignForm() {
  document.getElementById('nsign-form-fields').style.display = 'flex';
  document.getElementById('nsign-success-area').style.display = 'none';
  document.getElementById('nsign-console').style.display = 'none';
  document.getElementById('nsign-progress-container').style.display = 'none';
  
  // Clear inputs
  document.getElementById('inp-ipa-file').value = '';
  document.getElementById('inp-p12-file').value = '';
  document.getElementById('inp-prov-file').value = '';
  document.getElementById('inp-dylib-file').value = '';
  document.getElementById('nsign-cert-pwd').value = '';
  
  // Reset texts
  document.getElementById('txt-ipa-file').textContent = t('nsign-select-ipa');
  document.getElementById('txt-p12-file').textContent = t('nsign-select-p12');
  document.getElementById('txt-prov-file').textContent = t('nsign-select-prov');
  document.getElementById('txt-dylib-file').textContent = 'Ничего не выбрано';
  
  document.getElementById('txt-ipa-file').style.color = '';
  document.getElementById('txt-p12-file').style.color = '';
  document.getElementById('txt-prov-file').style.color = '';
  document.getElementById('txt-dylib-file').style.color = '';
  
  // Reset toggles
  document.getElementById('chk-custom-bundle').checked = false;
  document.getElementById('chk-custom-name').checked = false;
  document.getElementById('chk-custom-inject').checked = false;
  
  document.getElementById('inp-custom-bundle').style.display = 'none';
  document.getElementById('inp-custom-name').style.display = 'none';
  document.getElementById('box-custom-inject').style.display = 'none';
}

document.getElementById('btn-nsign-reset').addEventListener('click', resetNSignForm);

/* ─── PC Sideload Wizard JS ─── */
let currentStep = 1;
const TOTAL_STEPS = 3;
let selectedMethod = null;
let deviceFound = false;

function openPcSideloadModal(preselect) {
  if (preselect === 'combo') {
    document.getElementById('nsign-promo-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    return;
  }
  const modal = document.getElementById('pc-sideload-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (preselect && ['livecontainer','sidestore'].includes(preselect)) {
    if (currentStep === 3) {
      selectInstallMethod(preselect);
    } else {
      selectedMethod = preselect;
    }
  }
}

function closePcSideloadModal() {
  const modal = document.getElementById('pc-sideload-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('pc-sideload-modal').addEventListener('click', function(e) {
  if (e.target === this) closePcSideloadModal();
});

function resetPcModal() {
  currentStep = 1;
  selectedMethod = null;
  deviceFound = false;
  document.getElementById('pc-apple-id').value = '';
  document.getElementById('pc-apple-pwd').value = '';
  document.getElementById('pc-success').classList.remove('active');
  document.getElementById('pc-install-log-wrap').classList.remove('active');
  document.getElementById('pc-install-log').innerHTML = '';
  document.getElementById('pc-progress-bar').style.width = '0%';
  document.querySelectorAll('.install-method-card').forEach(c => c.classList.remove('selected'));
  resetDeviceStatus();
  updateStepUI();
}

function updateStepUI() {
  document.querySelectorAll('.pc-step-content').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === currentStep);
  });
  document.querySelectorAll('.pc-step-indicator').forEach((el, i) => {
    el.classList.remove('active', 'done');
    if (i + 1 === currentStep) el.classList.add('active');
    if (i + 1 < currentStep) el.classList.add('done', 'active');
  });
  const backBtn = document.getElementById('btn-pc-back');
  backBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
  const nextBtn = document.getElementById('btn-pc-next');
  if (currentStep === 1) {
    nextBtn.innerHTML = 'Пока в разработке';
    nextBtn.disabled = true;
  } else if (currentStep === TOTAL_STEPS) {
    nextBtn.innerHTML = '⚡ Установить';
    nextBtn.disabled = false;
  } else {
    nextBtn.innerHTML = 'Далее →';
    nextBtn.disabled = false;
  }
  const navEl = document.getElementById('pc-modal-nav');
  const successVisible = document.getElementById('pc-success').classList.contains('active');
  const logVisible = document.getElementById('pc-install-log-wrap').classList.contains('active');
  navEl.style.display = (successVisible || logVisible) ? 'none' : 'flex';
}

function pcStepNext() {
  if (currentStep === 1) {
    if (!validateStep1()) return;
  }
  if (currentStep === 2) {
    if (!validateStep2()) return;
  }
  if (currentStep === TOTAL_STEPS) {
    startInstall();
    return;
  }
  currentStep++;
  updateStepUI();
  if (currentStep === 2) simulateDeviceSearch();
  if (currentStep === 3 && selectedMethod) {
    selectInstallMethod(selectedMethod);
  }
}

function pcStepBack() {
  if (currentStep > 1) { currentStep--; updateStepUI(); }
}

function validateStep1() {
  const appleId = document.getElementById('pc-apple-id').value.trim();
  const pwd = document.getElementById('pc-apple-pwd').value.trim();
  if (!appleId || !appleId.includes('@')) {
    highlightField('pc-apple-id', 'Введи корректный Apple ID');
    return false;
  }
  if (!pwd) {
    highlightField('pc-apple-pwd', 'Введи пароль');
    return false;
  }
  return true;
}

function validateStep2() {
  if (!deviceFound) {
    const hint = document.getElementById('device-trust-hint');
    hint.style.display = 'block';
    return false;
  }
  return true;
}

function highlightField(id, msg) {
  const el = document.getElementById(id);
  el.style.borderColor = 'var(--err)';
  el.focus();
  setTimeout(() => el.style.borderColor = '', 2000);
}

document.getElementById('pc-anisette-server').addEventListener('change', function() {
  document.getElementById('custom-anisette-wrap').style.display =
    this.value === 'custom' ? 'flex' : 'none';
});

function resetDeviceStatus() {
  deviceFound = false;
  const dot = document.getElementById('device-ping-dot');
  const title = document.getElementById('device-status-title');
  const sub = document.getElementById('device-status-sub');
  const listWrap = document.getElementById('device-list-wrap');
  const hint = document.getElementById('device-trust-hint');
  dot.className = 'ping-dot checking';
  title.textContent = 'Нет устройства';
  sub.textContent = 'Подключи iPhone или iPad по USB';
  listWrap.style.display = 'none';
  hint.style.display = 'none';
}

function simulateDeviceSearch() {
  const dot = document.getElementById('device-ping-dot');
  const title = document.getElementById('device-status-title');
  const sub = document.getElementById('device-status-sub');
  const listWrap = document.getElementById('device-list-wrap');
  const refreshBtn = document.getElementById('btn-refresh-device');
  const select = document.getElementById('pc-device-select');

  dot.className = 'ping-dot checking';
  title.textContent = 'Поиск устройства...';
  sub.textContent = 'Обнаружение подключённых iOS-устройств';
  refreshBtn.disabled = true;
  listWrap.style.display = 'none';

  setTimeout(() => {
    deviceFound = true;
    dot.className = 'ping-dot ok';
    title.textContent = 'iPhone обнаружен';
    sub.textContent = 'iOS 17.5 · Модель A2896';
    refreshBtn.disabled = false;
    listWrap.style.display = 'flex';
    select.innerHTML = `
      <option value="iphone-demo">iPhone 15 Pro (iOS 17.5)</option>
      <option value="ipad-demo">iPad Air M2 (iOS 17.4)</option>
    `;
  }, 1800);
}

function selectInstallMethod(method) {
  if (method === 'combo') {
    closePcSideloadModal();
    document.getElementById('nsign-promo-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    return;
  }
  selectedMethod = method;
  document.querySelectorAll('.install-method-card').forEach(el => el.classList.remove('selected'));
  const map = {
    livecontainer: 'imc-livecontainer',
    sidestore:     'imc-sidestore'
  };
  const card = document.getElementById(map[method]);
  if (card) card.classList.add('selected');
}

function startInstall() {
  if (!selectedMethod) {
    alert('Выбери метод установки');
    return;
  }
  const logWrap = document.getElementById('pc-install-log-wrap');
  const log = document.getElementById('pc-install-log');
  const bar = document.getElementById('pc-progress-bar');
  const nav = document.getElementById('pc-modal-nav');
  logWrap.classList.add('active');
  nav.style.display = 'none';
  log.innerHTML = '';
  bar.style.width = '0%';
  const methodNames = {
    livecontainer: 'LiveContainer',
    sidestore: 'Sidestore',
    combo: 'LiveContainer + Sidestore + Репозиторий'
  };
  const appleId = document.getElementById('pc-apple-id').value.trim();
  const aniServer = document.getElementById('pc-anisette-server').value;
  const steps = [
    { text: `[*] Инициализация установщика...`, t: 400,   p: 5 },
    { text: `[+] Подключение к Anisette: ${aniServer}`, t: 900,   p: 12 },
    { text: `[+] Anisette токен получен`, t: 1500,  p: 20 },
    { text: `[+] Авторизация Apple ID: ${appleId}...`, t: 2100,  p: 28 },
    { text: `[+] 2FA / сессия открыта`, t: 2700,  p: 35 },
    { text: `[+] Генерация сертификата разработчика...`, t: 3300,  p: 45 },
    { text: `[+] Provisioning Profile создан`, t: 3900,  p: 55 },
    { text: `[+] Загрузка IPA: ${methodNames[selectedMethod]}`, t: 4500,  p: 65 },
    { text: `[+] Подпись пакета...`, t: 5100,  p: 75 },
    { text: `[+] Установка на устройство...`, t: 5700,  p: 88 },
    { text: `[✓] Установка завершена! Проверь рабочий стол.`, t: 6300,  p: 100 },
  ];
  steps.forEach(s => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.textContent = s.text;
      log.appendChild(line);
      log.scrollTop = log.scrollHeight;
      bar.style.width = `${s.p}%`;
    }, s.t);
  });
  setTimeout(() => {
    logWrap.classList.remove('active');
    document.getElementById('pc-success').classList.add('active');
  }, 7000);
}

/* ════════════════════════════════════
   STARFIELD
════════════════════════════════════ */
(function initStars() {
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  const COUNT = 140;
  let W, H, stars = [];

  // Deep purple palette for stars (solid values)
  const COLORS = [
    'rgb(120, 80, 220)',   // violet
    'rgb(90, 60, 180)',    // indigo
    'rgb(160, 100, 255)',  // lavender
    'rgb(70, 40, 140)',    // deep purple
    'rgb(200, 170, 255)',  // pale lilac
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkStar() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      // slow movement drift
      vx: (Math.random() - 0.5) * 0.08,
      vy: -0.05 - Math.random() * 0.08, // Slow upward drift
      // twinkle params
      phase:  Math.random() * Math.PI * 2,
      speed:  0.004 + Math.random() * 0.012,
      minA:   0.08 + Math.random() * 0.12,
      maxA:   0.55 + Math.random() * 0.45,
    };
  }

  let lastW = window.innerWidth;
  let lastH = window.innerHeight;
  const isStatic = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    resize();
    stars = Array.from({ length: COUNT }, mkStar);
  }

  let raf;
  function draw(shouldAnimate = true) {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      if (shouldAnimate) {
        s.phase += s.speed;
        s.x += s.vx;
        s.y += s.vy;
        
        // Wrap around boundaries
        if (s.x < -10) s.x = W + 10;
        if (s.x > W + 10) s.x = -10;
        if (s.y < -10) s.y = H + 10;
        if (s.y > H + 10) s.y = -10;
      }
      const alpha = s.minA + (s.maxA - s.minA) * (0.5 + 0.5 * Math.sin(s.phase));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = s.color;
      // Drawing tiny squares is 100x faster than circles due to hardware acceleration
      ctx.fillRect(s.x - s.r, s.y - s.r, s.r * 2, s.r * 2);
    }
    ctx.globalAlpha = 1.0;
    
    if (shouldAnimate) {
      raf = requestAnimationFrame(() => draw(true));
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth === lastW && window.innerHeight === lastH) return;
    
    // Force redistribution if stars were initialized while viewport W or H was 0 (laggy load)
    const forceRegen = (W < 100 || H < 100);
    
    if (window.innerWidth !== lastW || forceRegen) {
      lastW = window.innerWidth;
      lastH = window.innerHeight;
      resize();
      stars = Array.from({ length: COUNT }, mkStar);
      if (isStatic) draw(false);
    } else {
      lastH = window.innerHeight;
      resize();
      if (isStatic) draw(false);
    }
  });

  init();
  draw(!isStatic);
})();

/* ════════════════════════════════════
   SCROLL-HIDE HEADER
════════════════════════════════════ */
(function initScrollHeader() {
  const hdr = document.getElementById('header');
  let lastY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    // Disable scroll animations on desktop (screens >= 768px wide)
    if (window.innerWidth >= 768) {
      hdr.classList.remove('hidden-up');
      return;
    }
    
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > lastY && y > 60) {
          hdr.classList.add('hidden-up');
        } else {
          hdr.classList.remove('hidden-up');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();



/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
// N.Sign Promo Modal bindings
document.getElementById('btn-close-promo').addEventListener('click', () => {
  document.getElementById('nsign-promo-modal').classList.remove('active');
  document.body.style.overflow = '';
});
document.getElementById('nsign-promo-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('nsign-promo-modal')) {
    document.getElementById('nsign-promo-modal').classList.remove('active');
    document.body.style.overflow = '';
  }
});
document.getElementById('btn-promo-go-nsign').addEventListener('click', () => {
  document.getElementById('nsign-promo-modal').classList.remove('active');
  document.body.style.overflow = '';
  openInstaller('nsign');
});

// 404 Modal bindings
document.getElementById('btn-close-404').addEventListener('click', () => {
  document.getElementById('modal-404').classList.remove('active');
  document.body.style.overflow = '';
});
document.getElementById('btn-404-ok').addEventListener('click', () => {
  document.getElementById('modal-404').classList.remove('active');
  document.body.style.overflow = '';
});
document.getElementById('modal-404').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-404')) {
    document.getElementById('modal-404').classList.remove('active');
    document.body.style.overflow = '';
  }
});

(function init() {
  // Set correct lang btn state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  applyLang();
  
  // Load and apply saved theme
  const savedTheme = localStorage.getItem('nyx-theme') || 'violet';
  applyTheme(savedTheme, false);
  
  // Fetch and update version and size metadata dynamically
  loadMetadata();
  
  // Handle 404 redirect check
  if (window.location.search.includes('404') || window.location.hash.includes('404')) {
    window.history.replaceState(null, '', window.location.pathname);
    setTimeout(() => {
      document.getElementById('modal-404').classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 600);
  }
})();