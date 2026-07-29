/* ============================================
   AI智能计调助手 - 全局公共脚本
   ============================================ */

function iconSvg(name, className = 'icon-line') {
  const icons = {
    plane: '<path d="M3 11l18-7-7 18-3-8-8-3z"/><path d="M11 14l4-4"/>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
    coins: '<circle cx="8" cy="8" r="5"/><path d="M12.5 6.5A5 5 0 1 1 10 16.9"/><path d="M8 5v6"/><path d="M6.2 7h3.6"/><path d="M6.2 9h3.6"/>',
    tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><path d="M7.5 7.5h.01"/>',
    folder: '<path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H9l2 2h7.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z"/>',
    clipboard: '<path d="M9 4h6"/><path d="M9 2h6v4H9z"/><path d="M8 4H6a2 2 0 0 0-2 2v14h16V6a2 2 0 0 0-2-2h-2"/><path d="M8 11h8"/><path d="M8 15h5"/>',
    paperclip: '<path d="M21.4 11.6l-8.5 8.5a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 1 1-2.8-2.8l8.5-8.5"/>',
    image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-4.5-4.5L8 19"/>',
    mic: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M19 11a7 7 0 0 1-14 0"/><path d="M12 18v3"/><path d="M8 21h8"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16h16V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
    calculator: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 15h.01"/><path d="M12 15h.01"/><path d="M16 15h.01"/>',
    chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-3"/>',
    map: '<path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    dollar: '<path d="M12 2v20"/><path d="M17 6.5a4 4 0 0 0-4-2h-2a3 3 0 0 0 0 6h2a3 3 0 0 1 0 6h-2a4 4 0 0 1-4-2"/>',
    flag: '<path d="M5 22V4"/><path d="M5 4h11l-1 4 1 4H5"/>',
    upload: '<path d="M12 16V4"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/>',
    hotel: '<path d="M4 21V4h10v17"/><path d="M14 9h6v12"/><path d="M8 8h2"/><path d="M8 12h2"/><path d="M8 16h2"/><path d="M17 13h1"/>',
    train: '<rect x="6" y="3" width="12" height="13" rx="2"/><path d="M8 16l-2 4"/><path d="M16 16l2 4"/><path d="M8 9h8"/><path d="M9 13h.01"/><path d="M15 13h.01"/>',
    ticket: '<path d="M3 9a3 3 0 0 0 0 6v3h18v-3a3 3 0 0 0 0-6V6H3z"/><path d="M13 6v12"/>',
    user: '<circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    utensils: '<path d="M4 3v8"/><path d="M8 3v8"/><path d="M6 3v18"/><path d="M14 3v8a4 4 0 0 0 4 4v6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    bed: '<path d="M3 7v14"/><path d="M21 12v9"/><path d="M3 15h18"/><path d="M7 12h4a2 2 0 0 0 0-4H7z"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2"/><path d="M3 12A9 9 0 0 1 18.5 5.8"/><path d="M18 2v4h-4"/><path d="M6 22v-4h4"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    warning: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    error: '<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6"/><path d="M9 9l6 6"/>',
    send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
    circle: '<circle cx="12" cy="12" r="9"/>'
  };
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.circle}</svg>`;
}

function hydrateLineIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    const className = el.dataset.iconClass || 'icon-line';
    const signature = name + ':' + className;
    if (el.dataset.iconRendered === signature) return;
    el.innerHTML = iconSvg(name, className);
    el.dataset.iconRendered = signature;
  });
}

function stripUiEmojiText(root = document) {
  const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]\uFE0F?/gu;
  const selectors = [
    'button',
    '.section-title',
    '.panel-section-title',
    '.quote-title',
    '.doc-title',
    '.task-title',
    '.compare-title',
    '.upload-icon',
    '.empty-icon',
    '.seg-transport',
    '.plan-info-item',
    '.result-item',
    '.file-name',
    '.page-label',
    'td',
    'th'
  ].join(',');

  function inferIconName(el, originalText) {
    const text = String(originalText || '');
    if (el.querySelector('.icon-line') || el.querySelector('[data-icon]')) return '';
    if (el.classList.contains('upload-icon')) return text.includes('📊') ? 'chart' : 'folder';
    if (el.classList.contains('empty-icon')) {
      if (text.includes('📚')) return 'book';
      if (text.includes('📋')) return 'clipboard';
      return 'folder';
    }
    if (el.classList.contains('section-title')) {
      if (text.includes('📋')) return 'clipboard';
      if (text.includes('📊')) return 'chart';
    }
    if (el.tagName === 'BUTTON') {
      if (/导入|上传/.test(text)) return 'upload';
      if (/酒店/.test(text)) return 'hotel';
      if (/机票/.test(text)) return 'plane';
      if (/火车/.test(text)) return 'train';
      if (/门票/.test(text)) return 'ticket';
      if (/导游/.test(text)) return 'user';
      if (/餐费/.test(text)) return 'utensils';
      if (/生成.*PDF|行程单|报价单/.test(text)) return 'clipboard';
      if (/海报|图片/.test(text)) return 'image';
      if (/报价|价格|续期/.test(text)) return 'coins';
      if (/刷新|重新/.test(text)) return 'refresh';
      if (/编辑|修改/.test(text)) return 'edit';
    }
    return '';
  }

  function cleanTextNodes(node) {
    node.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const cleaned = child.nodeValue.replace(emojiRegex, '').replace(/\s{2,}/g, ' ');
        if (cleaned !== child.nodeValue) child.nodeValue = cleaned;
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'SVG') {
        cleanTextNodes(child);
      }
    });
  }

  root.querySelectorAll(selectors).forEach(el => {
    if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(el.tagName)) return;
    const iconName = inferIconName(el, el.textContent);
    cleanTextNodes(el);
    if (iconName) el.insertAdjacentHTML('afterbegin', iconSvg(iconName));
  });
  hydrateLineIcons(root);
}

function installVisualCleanup() {
  if (window.__aiTravelVisualCleanupInstalled) return;
  window.__aiTravelVisualCleanupInstalled = true;
  let timer = null;
  const observer = new MutationObserver(() => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => stripUiEmojiText(document), 0);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  stripUiEmojiText(document);
}

// 导航栏渲染
function renderNavbar(activePage) {
  const legacyResourceMap = {
    knowledge: 'components',
    pricing: 'prices',
    upload: 'files'
  };
  if (legacyResourceMap[activePage]) {
    if (window.parent && window.parent !== window && typeof window.parent.switchWorkspace === 'function') {
      window.parent.switchWorkspace('resource', legacyResourceMap[activePage]);
    } else {
      location.replace(`resource.html?section=${legacyResourceMap[activePage]}`);
    }
    return;
  }

  const primaryNavPages = [
    { id: 'chat', label: 'AI对话', icon: 'message', href: 'chat.html' },
    { id: 'resource', label: '资源库', icon: 'folder', href: 'resource.html' },
    { id: 'plans', label: '方案库', icon: 'clipboard', href: 'plans.html' }
  ];
  const resourcePages = ['knowledge', 'pricing', 'upload', 'resource'];
  const navPages = activePage === 'chat' ? [] : primaryNavPages;

  const navHtml = `
    <nav class="navbar">
      <a class="navbar-brand" href="chat.html">
        <span class="brand-icon">${iconSvg('plane')}</span>
        <span>AI计调助手</span>
      </a>
      ${navPages.length ? `
        <ul class="navbar-nav">
          ${navPages.map(p => {
            const active = p.id === activePage || (p.id === 'resource' && resourcePages.includes(activePage));
            return `
              <li class="nav-item">
                <a class="nav-link ${active ? 'active' : ''}" href="${p.href}">
                  <span class="nav-icon">${iconSvg(p.icon)}</span>
                  <span>${p.label}</span>
                </a>
              </li>
            `;
          }).join('')}
        </ul>
      ` : ''}
      <div class="navbar-user">
        <div style="text-align:right">
          <div class="user-name">李计调</div>
          <div class="user-role">欧洲部</div>
        </div>
        <div class="user-avatar">李</div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHtml);
  installVisualCleanup();
}

function refreshNavBadges() {
  document.querySelectorAll('.navbar-nav .nav-badge').forEach(badge => badge.remove());
}

function isPriceAlert(price) {
  if (!price || price.source === 'API' || price.period === '实时') return false;
  const period = String(price.period || '');
  const parts = period.split(/\s*-\s*/);
  const end = parts[parts.length - 1];
  const dateParts = end.split(/[./-]/).map(Number);
  let endDate = null;
  if (dateParts.length >= 3) endDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  if (dateParts.length === 2) endDate = new Date(dateParts[0], dateParts[1], 0);
  if (!endDate) return price.status === 'expiring' || price.status === 'expired';
  const days = Math.ceil((endDate - new Date()) / 86400000);
  return days <= 30;
}

// Toast 通知
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { info: 'info', success: 'check', warning: 'warning', error: 'error' };
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${iconSvg(icons[type] || icons.info)}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function setButtonLoading(button, loading = true, text = '处理中...') {
  if (!button) return () => {};
  if (loading) {
    button.dataset.originalHtml = button.innerHTML;
    button.textContent = text;
    button.classList.add('is-loading');
    button.disabled = true;
    return () => setButtonLoading(button, false);
  }
  button.innerHTML = button.dataset.originalHtml || button.textContent;
  button.classList.remove('is-loading');
  button.disabled = false;
  delete button.dataset.originalHtml;
  hydrateLineIcons(button);
  return () => {};
}

function runWithButtonLoading(button, text, task, delay = 450) {
  const done = setButtonLoading(button, true, text);
  window.setTimeout(() => {
    try {
      task();
    } finally {
      done();
    }
  }, delay);
}

// 模态框控制
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

// 通用确认弹窗
function confirmAction(message, onConfirm, title = '确认操作') {
  let modal = document.getElementById('globalConfirmModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'globalConfirmModal';
    modal.innerHTML = `
      <div class="modal" style="max-width:420px;">
        <div class="modal-header">
          <h3 class="modal-title" id="globalConfirmTitle"></h3>
          <button class="modal-close" onclick="closeModal('globalConfirmModal')">×</button>
        </div>
        <div class="modal-body">
          <p id="globalConfirmMessage" style="font-size:14px;color:var(--text-secondary);line-height:1.8;"></p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeModal('globalConfirmModal')">取消</button>
          <button class="btn btn-primary" id="globalConfirmBtn">确认</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById('globalConfirmTitle').textContent = title;
  document.getElementById('globalConfirmMessage').textContent = message;
  document.getElementById('globalConfirmBtn').onclick = () => {
    closeModal('globalConfirmModal');
    if (typeof onConfirm === 'function') onConfirm();
  };
  openModal('globalConfirmModal');
}

// 通用详情弹窗
function showDetailModal(title, html, actionsHtml = '') {
  let modal = document.getElementById('globalDetailModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'globalDetailModal';
    modal.innerHTML = `
      <div class="modal" style="max-width:760px;">
        <div class="modal-header">
          <h3 class="modal-title" id="globalDetailTitle"></h3>
          <button class="modal-close" onclick="closeModal('globalDetailModal')">×</button>
        </div>
        <div class="modal-body" id="globalDetailBody"></div>
        <div class="modal-footer" id="globalDetailFooter"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById('globalDetailTitle').textContent = title;
  document.getElementById('globalDetailBody').innerHTML = html;
  document.getElementById('globalDetailFooter').innerHTML = actionsHtml || `<button class="btn btn-secondary" onclick="closeModal('globalDetailModal')">关闭</button>`;
  openModal('globalDetailModal');
}

function showDocumentPreview(type, plan) {
  const esc = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  const money = value => window.AppStore ? AppStore.money(value) : ('¥' + Number(value || 0).toLocaleString('zh-CN'));
  const docType = String(type || '');
  const isPoster = docType.includes('海报');
  const isQuote = docType.includes('报价');
  const title = isPoster ? '朋友圈海报预览' : isQuote ? '报价单预览' : '行程单 PDF 预览';

  const itinerary = (plan.itinerary || []).slice(0, isPoster ? 4 : 20).map(day => `
    <div style="display:grid;grid-template-columns:58px 1fr;gap:10px;padding:7px 0;border-bottom:1px solid #E2E8F0;">
      <strong style="color:#2563EB;">${esc(day[0])}</strong>
      <span>${esc(day[1])}</span>
    </div>
  `).join('');

  const quoteRows = (plan.quoteItems || []).map(item => `
    <tr>
      <td>${esc(item[0])}</td>
      <td style="text-align:right;font-weight:600;">${money(item[1])}</td>
      <td style="text-align:right;color:#64748B;">${esc(item[2])}</td>
    </tr>
  `).join('');

  const posterHtml = `
    <div style="max-width:420px;margin:auto;border-radius:18px;overflow:hidden;background:#0F172A;color:white;box-shadow:var(--shadow-lg);">
      <div style="height:180px;background:linear-gradient(135deg,#2563EB,#10B981);display:flex;align-items:flex-end;padding:24px;">
        <div>
          <div style="font-size:13px;opacity:.85;">AI智能计调助手 · 精选方案</div>
          <div style="font-size:30px;font-weight:800;line-height:1.15;margin-top:8px;">${esc(plan.title)}</div>
        </div>
      </div>
      <div style="padding:22px;background:white;color:#1E293B;">
        <div style="font-size:13px;color:#64748B;line-height:1.8;margin-bottom:14px;">${esc(plan.summary || '精选定制行程，适合客户当前需求。')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
          <div class="panel-note"><strong>${esc(plan.people || '')}</strong><br>出行人数</div>
          <div class="panel-note"><strong>${esc(plan.days || '')}</strong><br>行程天数</div>
        </div>
        <div style="font-size:24px;font-weight:800;color:#2563EB;">${money(plan.total)}</div>
        <div style="font-size:12px;color:#64748B;">人均 ${money(plan.perPerson)}</div>
      </div>
    </div>
  `;

  const documentHtml = `
    <div style="background:#F8FAFC;padding:18px;border-radius:12px;">
      <div style="background:white;border:1px solid #E2E8F0;border-radius:10px;padding:26px;max-width:680px;margin:auto;box-shadow:var(--shadow-sm);">
        <div style="display:flex;justify-content:space-between;gap:16px;border-bottom:2px solid #2563EB;padding-bottom:16px;margin-bottom:18px;">
          <div>
            <div style="font-size:12px;color:#64748B;">${esc(title)}</div>
            <h2 style="font-size:24px;margin:4px 0 0;">${esc(plan.title)}</h2>
          </div>
          <div style="text-align:right;font-size:12px;color:#64748B;">
            <div>生成时间</div>
            <strong>${new Date().toLocaleString('zh-CN')}</strong>
          </div>
        </div>
        <p style="line-height:1.8;color:#64748B;margin-bottom:18px;">${esc(plan.summary || '')}</p>
        ${isQuote ? '' : `<h3 style="font-size:15px;margin-bottom:8px;">行程安排</h3><div style="margin-bottom:18px;">${itinerary}</div>`}
        <h3 style="font-size:15px;margin-bottom:8px;">费用明细</h3>
        <table style="width:100%;border-collapse:collapse;">${quoteRows}<tr><td style="font-weight:700;">合计</td><td style="text-align:right;font-weight:800;color:#2563EB;">${money(plan.total)}</td><td></td></tr></table>
      </div>
    </div>
  `;

  showDetailModal(title, isPoster ? posterHtml : documentHtml, `
    <button class="btn btn-secondary" onclick="closeModal('globalDetailModal')">关闭</button>
    <button class="btn btn-secondary" onclick="showToast('已复制预览链接（模拟）','success')">复制链接</button>
    <button class="btn btn-primary" onclick="showToast('已下载${esc(title)}（模拟）','success')">下载</button>
  `);
}

// 格式化时间
function formatTime(date) {
  const now = new Date();
  const d = new Date(date);
  const diff = now - d;
  
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前';
  if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前';
  
  return d.getMonth() + 1 + '月' + d.getDate() + '日 ' + 
         d.getHours().toString().padStart(2, '0') + ':' + 
         d.getMinutes().toString().padStart(2, '0');
}

// 格式化金额
function formatMoney(amount) {
  return '¥' + Number(amount).toLocaleString('zh-CN');
}

// 模拟打字效果
function typeWriter(element, text, speed = 30, callback) {
  let i = 0;
  element.textContent = '';
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}
