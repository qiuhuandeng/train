/* ============================================
   AI智能计调助手 - 全局公共脚本
   ============================================ */

// 导航栏渲染
function renderNavbar(activePage) {
  const store = window.AppStore ? window.AppStore.all() : null;
  const reviewCount = store ? store.segments.filter(item => item.status === 'review').length : 0;
  const priceAlertCount = store ? store.prices.filter(item => item.status === 'expiring' || item.status === 'expired').length : 0;
  const navPages = [
    { id: 'chat', label: 'AI对话', icon: '💬', href: 'chat.html' },
    { id: 'knowledge', label: '知识库', icon: '📚', href: 'knowledge.html', badge: reviewCount },
    { id: 'pricing', label: '价格库', icon: '💰', href: 'pricing.html', badge: priceAlertCount },
    { id: 'upload', label: '文件管理', icon: '📁', href: 'upload.html', badge: reviewCount },
    { id: 'plans', label: '方案管理', icon: '📋', href: 'plans.html' }
  ];

  const navHtml = `
    <nav class="navbar">
      <a class="navbar-brand" href="chat.html">
        <span class="brand-icon">✈</span>
        <span>AI计调助手</span>
      </a>
      <ul class="navbar-nav">
        ${navPages.map(p => `
          <li class="nav-item">
            <a class="nav-link ${p.id === activePage ? 'active' : ''}" href="${p.href}">
              <span>${p.icon}</span>
              <span>${p.label}</span>
              ${p.badge ? `<span class="nav-badge">${p.badge}</span>` : ''}
            </a>
          </li>
        `).join('')}
      </ul>
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
}

function refreshNavBadges() {
  if (!window.AppStore) return;
  const store = window.AppStore.all();
  const badgeMap = {
    'knowledge.html': store.segments.filter(item => item.status === 'review').length,
    'upload.html': store.segments.filter(item => item.status === 'review').length,
    'pricing.html': store.prices.filter(item => item.status === 'expiring' || item.status === 'expired').length
  };

  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.querySelector('.nav-badge')?.remove();
    const href = link.getAttribute('href');
    const count = badgeMap[href] || 0;
    if (count) {
      link.insertAdjacentHTML('beforeend', `<span class="nav-badge">${count}</span>`);
    }
  });
}

// Toast 通知
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌' };
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
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
