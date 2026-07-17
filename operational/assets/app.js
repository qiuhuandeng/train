(function () {
  "use strict";

  var menuTree = [
    { id: "index", label: "经营", pageLabel: "经营", icon: "dashboard", file: "index.html" },
    { label: "运力库存", icon: "train", sections: [
      { label: "列车资源", items: [
        { id: "stock-traintype-list", label: "列车车型", file: "stock-traintype-list.html" },
        { id: "stock-cabin-config", label: "房型包厢", file: "stock-cabin-config.html" },
        { id: "stock-facility", label: "设施服务", file: "stock-facility.html" }
      ]},
      { label: "班期计划", items: [
        { id: "stock-schedule-year", label: "年度班期", file: "stock-schedule-year.html" },
        { id: "stock-schedule-list", label: "班期列表", file: "stock-schedule-list.html" }
      ]},
      { label: "库存管理", items: [
        { id: "stock-overview", label: "库存总览", file: "stock-overview.html" },
        { id: "stock-log", label: "库存流水", file: "stock-log.html" },
        { id: "stock-warning", label: "库存预警", file: "stock-warning.html" }
      ]},
      { label: "守仓切位", items: [
        { id: "stock-hold-apply", label: "守仓管理", file: "stock-hold-apply.html" },
        { id: "stock-cut-manage", label: "切位管理", file: "stock-cut-manage.html" },
        { id: "stock-release-log", label: "释放记录", file: "stock-release-log.html" }
      ]},
    ]},
    { label: "产品定价", icon: "package", sections: [
      { label: "定价管理", items: [
        { id: "product-list", label: "产品列表", file: "product-list.html" },
        { id: "price-plan", label: "价格方案", file: "price-plan.html" },
        { id: "price-calendar", label: "价格日历", file: "price-calendar.html" },
        { id: "price-multi-system", label: "多价体系", file: "price-multi-system.html" }
      ]},
      { label: "退改策略", items: [
        { id: "refund-ladder", label: "阶梯退改", file: "refund-ladder.html" },
        { id: "refund-anti-abuse", label: "退改风控", file: "refund-anti-abuse.html" },
        { id: "refund-special", label: "特殊规则", file: "refund-special.html" }
      ]},
      { label: "促销政策", items: [
        { id: "promo-activity-list", label: "促销活动", file: "promo-activity-list.html" },
        { id: "promo-commission", label: "渠道返佣", file: "promo-commission.html" }
      ]}
    ]},
    { label: "销售分销", icon: "customers", sections: [
      { label: "客户管理", items: [
        { id: "sale-customer-list", label: "客户列表", file: "sale-customer-list.html" },
        { id: "sale-customer-merge", label: "客户合并", file: "sale-customer-merge.html" },
        { id: "sale-customer-tag", label: "客户标签", file: "sale-customer-tag.html" }
      ]},
      { label: "渠道管理", items: [
        { id: "channel-list", label: "渠道档案", file: "channel-list.html" },
        { id: "channel-reconcile", label: "返佣对账", file: "channel-reconcile.html" },
        { id: "channel-order-log", label: "渠道订单", file: "channel-order-log.html" }
      ]},
      { label: "分销管理", items: [
        { id: "distribution-account", label: "分销账号", file: "distribution-account.html" },
        { id: "distribution-audit", label: "分销审核", file: "distribution-audit.html" }
      ]}
    ]},
    { label: "订单交易", icon: "orders", sections: [
      { label: "订单管理", items: [
        { id: "order-list", label: "订单列表", file: "order-list.html" },
        { id: "order-after-sales", label: "售后工单", file: "order-after-sales.html" }
      ]},
      { label: "旅客资料", items: [
        { id: "order-traveler-list", label: "旅客名单", file: "order-traveler-list.html" },
        { id: "order-doc-check", label: "证件核验", file: "order-doc-check.html" }
      ]},
      { label: "选铺管理", items: [
        { id: "order-berth-assign", label: "代客选铺", file: "order-berth-assign.html" },
        { id: "order-berth-log", label: "换铺记录", file: "order-berth-log.html" }
      ]},
      { label: "收款管理", items: [
        { id: "order-payment", label: "收款记录", file: "order-payment.html" },
        { id: "order-online-pay", label: "在线流水", file: "order-online-pay.html" }
      ]}
    ]},
    { label: "计调作业", icon: "fulfillment", sections: [
      { label: "分团管理", items: [
        { id: "ops-group-list", label: "团队管理", file: "ops-group-list.html" },
        { id: "ops-namelist", label: "团队名单", file: "ops-namelist.html" }
      ]},
      { label: "地接计划", items: [
        { id: "ops-dmc-plan", label: "接待计划", file: "ops-dmc-plan.html" },
        { id: "ops-dmc-settle", label: "地接结算", file: "ops-dmc-settle.html" },
        { id: "ops-dmc-list", label: "地接档案", file: "ops-dmc-list.html" }
      ]},
      { label: "发团作业", items: [
        { id: "ops-dispatch-board", label: "发团看板", file: "ops-dispatch-board.html" },
        { id: "ops-change-collab", label: "订单变更", file: "ops-change-collab.html" }
      ]}
    ]},
    { label: "财务管理", icon: "finance", sections: [
      { label: "应收管理", items: [
        { id: "fin-receivable", label: "应收账款", file: "fin-receivable.html" },
        { id: "fin-writeoff", label: "收款核销", file: "fin-writeoff.html" },
        { id: "fin-aging", label: "账龄分析", file: "fin-aging.html" }
      ]},
      { label: "应付管理", items: [
        { id: "fin-payable", label: "应付账款", file: "fin-payable.html" }
      ]},
      { label: "对账管理", items: [
        { id: "fin-channel-reconcile", label: "往来对账", file: "fin-channel-reconcile.html" }
      ]},
      { label: "班期财务", items: [
        { id: "fin-profit", label: "班期核算", file: "fin-profit.html" },
        { id: "fin-closeout", label: "结算关账", file: "fin-closeout.html" },
        { id: "fin-channel-analysis", label: "渠道毛利", file: "fin-channel-analysis.html" }
      ]},
      { label: "发票管理", hideTitle: true, items: [
        { id: "fin-invoice", label: "发票管理", file: "fin-invoice.html" }
      ]},
      { label: "财务对接", items: [
        { id: "fin-integration", label: "凭证同步", file: "fin-integration.html" },
        { id: "fin-integration-log", label: "接口日志", file: "fin-integration-log.html" },
        { id: "fin-integration-config", label: "接口配置", file: "fin-integration-config.html" }
      ]}
    ]},
    { label: "数据分析", icon: "chart", sections: [
      { label: "数据分析", hideTitle: true, items: [
        { id: "bi-overview", label: "经营总览", file: "bi-overview.html" },
        { id: "bi-sales", label: "销售分析", file: "bi-sales.html" },
        { id: "bi-direct", label: "直客分析", file: "bi-direct.html" },
        { id: "bi-stock", label: "库存分析", file: "bi-stock.html" },
        { id: "bi-refund", label: "退改分析", file: "bi-refund.html" },
        { id: "bi-report", label: "报表中心", file: "bi-report.html" }
      ]}
    ]},
    { label: "系统管理", icon: "settings", sections: [
      { label: "组织人员", items: [
        { id: "sys-dept", label: "部门管理", file: "sys-dept.html" },
        { id: "sys-user", label: "员工账号", file: "sys-user.html" }
      ]},
      { label: "基础配置", hideTitle: true, items: [
        { id: "sys-role", label: "角色权限", file: "sys-role.html" },
        { id: "sys-dict", label: "数据字典", file: "sys-dict.html" },
        { id: "sys-msg-template", label: "消息模板", file: "sys-msg-template.html" },
        { id: "sys-log", label: "操作日志", file: "sys-log.html" },
        { id: "sys-integration", label: "接口集成", file: "sys-integration.html" },
        { id: "sys-params", label: "参数设置", file: "sys-params.html" }
      ]}
    ]}
  ];

  var secondaryRoutes = {
    "stock-carriage-config": {
      id: "stock-carriage-config",
      label: "编组配置",
      file: "stock-carriage-config.html",
      parentId: "stock-traintype-list",
      path: ["运力库存", "列车资源", "列车车型"]
    },
    "stock-schedule-batch": {
      id: "stock-schedule-batch",
      label: "系统开班",
      file: "stock-schedule-batch.html",
      parentId: "stock-schedule-list",
      path: ["运力库存", "班期计划", "班期列表"]
    },
    "stock-berth-board": {
      id: "stock-berth-board",
      label: "铺位看板",
      file: "stock-berth-board.html",
      parentId: "stock-overview",
      path: ["运力库存", "库存管理", "库存总览"]
    },
    "stock-display-rule": {
      id: "stock-display-rule",
      label: "展示规则",
      file: "stock-display-rule.html",
      parentId: "stock-overview",
      path: ["运力库存", "库存管理", "库存总览"]
    },
    "stock-hold-expire": {
      id: "stock-hold-expire",
      label: "守仓到期",
      file: "stock-hold-expire.html",
      parentId: "stock-hold-apply",
      path: ["运力库存", "守仓切位", "守仓管理"]
    },
    "product-edit": {
      id: "product-edit",
      label: "产品编辑",
      file: "product-edit.html",
      parentId: "product-list",
      path: ["产品定价", "定价管理", "产品列表"]
    },
    "product-schedule-link": {
      id: "product-schedule-link",
      label: "班期关联",
      file: "product-schedule-link.html",
      parentId: "product-list",
      path: ["产品定价", "定价管理", "产品列表"]
    },
    "price-headcount": {
      id: "price-headcount",
      label: "价格方案配置",
      file: "price-headcount.html",
      parentId: "price-plan",
      path: ["产品定价", "定价管理", "价格方案"]
    },
    "promo-earlybird": {
      id: "promo-earlybird",
      label: "早鸟团购",
      file: "promo-earlybird.html",
      parentId: "promo-activity-list",
      path: ["产品定价", "促销政策", "促销活动"]
    },
    "channel-price": {
      id: "channel-price",
      label: "结算价格",
      file: "channel-price.html",
      parentId: "channel-list",
      path: ["销售分销", "渠道管理", "渠道档案"]
    },
    "order-detail": {
      id: "order-detail",
      label: "订单详情",
      file: "order-detail.html",
      parentId: "order-list",
      path: ["订单交易", "订单管理", "订单列表"]
    },
    "order-create": {
      id: "order-create",
      label: "新建订单",
      file: "order-create.html",
      parentId: "order-list",
      path: ["订单交易", "订单管理", "订单列表"]
    },
    "order-doc-generate": {
      id: "order-doc-generate",
      label: "单据生成",
      file: "order-doc-generate.html",
      parentId: "order-list",
      path: ["订单交易", "订单管理", "订单列表"]
    },
    "order-ocr": {
      id: "order-ocr",
      label: "证件识别",
      file: "order-ocr.html",
      parentId: "order-traveler-list",
      path: ["订单交易", "旅客资料", "旅客名单"]
    },
    "ops-group-detail": {
      id: "ops-group-detail",
      label: "团队详情",
      file: "ops-group-detail.html",
      parentId: "ops-group-list",
      path: ["计调作业", "分团管理", "团队管理"]
    },
    "fin-payable-other": {
      id: "fin-payable-other",
      label: "其他应付",
      file: "fin-payable-other.html",
      parentId: "fin-payable",
      path: ["财务管理", "应付管理", "应付账款"]
    },
    "fin-auto-match": {
      id: "fin-auto-match",
      label: "自动匹配",
      file: "fin-auto-match.html",
      parentId: "fin-writeoff",
      path: ["财务管理", "应收管理", "收款核销"]
    },
    "fin-writeoff-detail": {
      id: "fin-writeoff-detail",
      label: "订单核销",
      file: "fin-writeoff-detail.html",
      parentId: "fin-writeoff",
      path: ["财务管理", "应收管理", "收款核销"]
    },
    "fin-reconcile-doc": {
      id: "fin-reconcile-doc",
      label: "对账单据",
      file: "fin-reconcile-doc.html",
      parentId: "fin-channel-reconcile",
      path: ["财务管理", "对账管理", "往来对账"]
    }
  };

  var channelPages = [
    { id: "d-home", label: "渠道首页", file: "d-home.html" },
    { id: "d-search", label: "查价查位", file: "d-search.html" },
    { id: "d-order-create", label: "在线下单", file: "d-order-create.html" },
    { id: "d-my-orders", label: "我的订单", file: "d-my-orders.html" },
    { id: "d-settlement", label: "结算查看", file: "d-settlement.html" },
    { id: "d-reconcile", label: "对账中心", file: "d-reconcile.html" }
  ];

  var navIcons = {
    dashboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.2 12 4l8 7.2v8.2a1.6 1.6 0 0 1-1.6 1.6h-4.2v-5.2H9.8V21H5.6A1.6 1.6 0 0 1 4 19.4Z"/></svg>',
    train: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 21l2-3M16 18l2 3"/></svg>',
    package: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4.5 8 7.5 4.1L19.5 8M12 20.2V12.1"/><path d="M5 8.2 12 4l7 4.2v7.6L12 20 5 15.8Z"/></svg>',
    customers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 11.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM3.8 19.5c.7-3.3 2.8-5 5.7-5s5 1.7 5.7 5"/><path d="M16 10.8a2.8 2.8 0 1 0 0-5.6M16.5 14.3c2.1.4 3.4 2.1 3.9 4.6"/></svg>',
    orders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 0 1 2 2v14l-3-1.8-3 1.8-3-1.8L7 20V6a2 2 0 0 1 2-2Z"/><path d="M9 9h6M9 13h6"/></svg>',
    fulfillment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15.5h14M7 15.5l-1.7-5.8A2 2 0 0 1 7.2 7h9.6a2 2 0 0 1 1.9 2.7L17 15.5"/><path d="M8 19.5h.1M16 19.5h.1M9 11h6"/></svg>',
    finance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5h14v11H5z"/><path d="M8 7.5V5h8v2.5M8 12h8M8 15h5"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V5M5 19h14"/><path d="m8 15 3-4 3 2 4-6"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.2 13.2.1-2.4-2.3-.7-.8-1.8 1.1-2.1-1.7-1.7-2.1 1.1-1.9-.7L11 2.6H8.6L8 4.9l-1.8.8-2.1-1.1-1.7 1.7 1.1 2.1-.7 1.8-2.3.7.1 2.4 2.2.6.8 1.9-1 2.1 1.7 1.7 2-1.1 1.9.8.6 2.2h2.4l.6-2.2 1.9-.8 2 1.1 1.7-1.7-1-2.1.8-1.9Z"/></svg>'
  };

  var noticeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Z"/><path d="M9.5 20a2.5 2.5 0 0 0 5 0"/></svg>';
  var brandTrainIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 4h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 21l2-3M16 18l2 3"/></svg>';

  function ensureFavicon() {
    if (document.querySelector('link[rel~="icon"]')) return;
    var link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "assets/favicon.svg";
    document.head.appendChild(link);
  }

  function renderNavIcon(name) {
    return '<span class="nav-primary-icon">' + (navIcons[name] || navIcons.dashboard) + '</span>';
  }

  function activePageId(pageId) {
    return secondaryRoutes[pageId] ? secondaryRoutes[pageId].parentId : pageId;
  }

  function findMenuItem(pageId) {
    if (secondaryRoutes[pageId]) return secondaryRoutes[pageId];
    var found = null;
    menuTree.forEach(function (domain) {
      if (domain.id === pageId) {
        found = {
          id: domain.id,
          label: domain.pageLabel || domain.label,
          file: domain.file,
          path: [domain.label]
        };
      }
      (domain.sections || []).forEach(function (section) {
        section.items.forEach(function (item) {
          if (item.id === pageId) {
            found = {
              id: item.id,
              label: item.label,
              file: item.file,
              path: item.path || (section.hideTitle ? [domain.label] : [domain.label, section.label]),
              parentId: item.parentId
            };
          }
        });
      });
    });
    return found || { id: "index", label: "原型导航", file: "index.html", path: ["经营"] };
  }

  function branchHasActive(domain, pageId) {
    var activeId = activePageId(pageId);
    if (domain.id === activeId) return true;
    return (domain.sections || []).some(function (section) {
      return section.items.some(function (item) { return item.id === activeId; });
    });
  }

  function defaultFileForDomain(domain) {
    if (domain.file) return domain.file;
    var firstVisible = null;
    domain.sections.some(function (section) {
      firstVisible = section.items.find(function (item) { return !item.hidden; });
      return Boolean(firstVisible);
    });
    return (firstVisible || domain.sections[0].items[0]).file;
  }

  function sectionHasActive(section, pageId) {
    var activeId = activePageId(pageId);
    return section.items.some(function (item) { return item.id === activeId; });
  }

  function domainShortLabel(label) {
    var map = {
      "经营": "经营",
      "运力库存": "运力",
      "产品定价": "定价",
      "销售分销": "销售",
      "订单交易": "订单",
      "计调作业": "计调",
      "财务管理": "财务",
      "数据分析": "数据",
      "系统管理": "系统"
    };
    return map[label] || label;
  }

  function buildSidebar(pageId) {
    var activeDomain = menuTree.find(function (domain) { return branchHasActive(domain, pageId); }) || menuTree[0];
    var activeItem = findMenuItem(pageId);
    var hasSecondary = Boolean(activeDomain.sections && activeDomain.sections.length);
    var primaryNav = menuTree.map(function (domain) {
      var active = branchHasActive(domain, pageId) ? " active" : "";
      return '<a class="nav-primary-item' + active + '" href="' + defaultFileForDomain(domain) + '" title="' + domain.label + '">' +
        renderNavIcon(domain.icon) + '<span class="nav-primary-label">' + domainShortLabel(domain.label) + '</span></a>';
    }).join("");
    var secondaryNav = hasSecondary ? activeDomain.sections.map(function (section) {
      var sectionActive = sectionHasActive(section, pageId) ? " active" : "";
      var links = section.items.filter(function (item) { return !item.hidden; }).map(function (item) {
        var active = item.id === pageId || item.id === activeItem.parentId ? " active" : "";
        return '<a class="nav-link nav-link-level3' + active + '" href="' + item.file + '">' +
          '<span class="nav-link-label">' + item.label + '</span></a>';
      }).join("");
      var title = section.hideTitle ? "" : '<div class="nav-section-title">' + section.label + '</div>';
      return '<div class="nav-section' + sectionActive + '">' + title + links + '</div>';
    }).join("") : "";

    return '<aside class="app-sidebar app-sidebar-split' + (hasSecondary ? "" : " sidebar-primary-only") + '">' +
      '<div class="sidebar-rail">' +
      '<a class="rail-brand" href="index.html" aria-label="专列ERP"><span class="brand-mark">' + brandTrainIcon + '</span></a>' +
      '<nav class="primary-nav">' + primaryNav + '</nav></div>' +
      (hasSecondary ?
      '<div class="sidebar-panel">' +
      '<div class="sidebar-panel-head module-only"><small>' + activeDomain.label + '</small></div>' +
      '<nav class="side-nav">' + secondaryNav + '</nav></div>' : "") +
      '</aside>';
  }

  function buildCrumbs(item, displayTitle) {
    var path = item.path.slice();
    if (path[path.length - 1] !== displayTitle) path.push(displayTitle);
    return path.map(function (part, index) {
      return index === path.length - 1 ? '<b>' + part + '</b>' : '<span>' + part + '</span>';
    }).join('<i>/</i>');
  }

  function buildTopbar(item, displayTitle) {
    return '<header class="app-topbar">' +
      '<div class="crumbs">' + buildCrumbs(item, displayTitle) + '</div>' +
      '<div class="top-tools">' +
      '<select class="departure-picker" id="globalDeparture" aria-label="当前班期">' +
      '<option>2026-09-25 · 环云南9天</option>' +
      '<option>2026-10-17 · 环云南9天</option>' +
      '<option>2026-11-14 · 环云南9天</option>' +
      '<option>2026-12-19 · 环云南9天</option>' +
      '<option>2026-12-28 · 环云南9天</option>' +
      '</select>' +
      '<button class="top-icon" type="button" data-toast="暂时没有新的系统通知" aria-label="通知">' + noticeIcon + '</button>' +
      '<span class="avatar" title="张经理">张</span><span class="user-name">张经理</span>' +
      '</div></header>';
  }

  function buildChannelShell(activeId, displayTitle, content) {
    var nav = channelPages.map(function (item) {
      return '<a class="channel-nav-link' + (item.id === activeId ? " active" : "") + '" href="' + item.file + '">' + item.label + '</a>';
    }).join("");
    return '<div class="channel-shell">' +
      '<header class="channel-topbar">' +
      '<a class="channel-brand" href="d-home.html"><span class="brand-mark">' + brandTrainIcon + '</span><b>专列ERP分销门户</b></a>' +
      '<nav class="channel-nav">' + nav + '</nav>' +
      '<div class="top-tools"><button class="top-icon" type="button" data-toast="没有新的渠道通知" aria-label="通知">' + noticeIcon + '</button><span class="avatar" title="康辉旅行社">康</span><span class="user-name">康辉旅行社</span></div>' +
      '</header>' +
      '<main class="page-content channel-content"><div class="crumbs channel-crumbs">分销门户<i>/</i><b>' + displayTitle + '</b></div>' + content + '</main>' +
      '<div class="toast" id="globalToast" role="status" aria-live="polite"><i>✓</i><span></span></div>' +
      '</div>';
  }

  function injectShell() {
    var body = document.body;
    var shell = body.getAttribute("data-shell") || "internal";
    var pageId = body.getAttribute("data-page") || "index";
    var item = findMenuItem(pageId);
    var displayTitle = body.getAttribute("data-title") || item.label;
    var content = body.innerHTML;

    if (shell === "mobile") {
      body.insertAdjacentHTML("beforeend", '<div class="toast" id="globalToast" role="status" aria-live="polite"><i>✓</i><span></span></div>');
      return;
    }

    if (shell === "channel") {
      body.innerHTML = buildChannelShell(body.getAttribute("data-channel-page") || pageId, displayTitle, content);
      return;
    }

    body.innerHTML = buildSidebar(pageId) +
      '<div class="app-main">' + buildTopbar(item, displayTitle) +
      '<main class="page-content">' + content + '</main></div>' +
      '<div class="toast" id="globalToast" role="status" aria-live="polite"><i>✓</i><span></span></div>';
  }

  var toastTimer = 0;
  function showToast(message) {
    var toast = document.getElementById("globalToast");
    if (!toast) return;
    toast.querySelector("span").textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2300);
  }

  function getTableBySelector(selector) {
    if (!selector) return null;
    try {
      return document.querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function getActiveStatus(table) {
    var status = "";
    document.querySelectorAll("[data-status-tabs]").forEach(function (tabs) {
      if (getTableBySelector(tabs.getAttribute("data-target")) !== table) return;
      var active = tabs.querySelector("button.active");
      var value = active ? active.getAttribute("data-status") : "";
      if (value && value !== "all") status = value;
    });
    return status;
  }

  function resetStatusTabs(table) {
    document.querySelectorAll("[data-status-tabs]").forEach(function (tabs) {
      if (getTableBySelector(tabs.getAttribute("data-target")) !== table) return;
      tabs.querySelectorAll("button").forEach(function (button) {
        button.classList.toggle("active", button.getAttribute("data-status") === "all");
      });
    });
  }

  function applyTableFilters(table) {
    if (!table) return;
    var activeStatus = getActiveStatus(table).toLowerCase();
    var terms = [];
    var filters = [];
    document.querySelectorAll("[data-table-search]").forEach(function (input) {
      if (getTableBySelector(input.getAttribute("data-table-search")) !== table) return;
      var term = input.value.trim().toLowerCase();
      if (term) terms.push(term);
    });
    document.querySelectorAll("[data-table-filter]").forEach(function (control) {
      if (getTableBySelector(control.getAttribute("data-table-filter")) !== table) return;
      var value = control.value.trim().toLowerCase();
      var key = control.getAttribute("data-filter-key");
      if (value && key) filters.push({ key: key, value: value });
    });
    table.querySelectorAll("tbody tr").forEach(function (row) {
      var visible = true;
      if (activeStatus && (row.getAttribute("data-status") || "").toLowerCase() !== activeStatus) visible = false;
      terms.forEach(function (term) {
        if (row.textContent.toLowerCase().indexOf(term) === -1) visible = false;
      });
      filters.forEach(function (filter) {
        if ((row.getAttribute("data-" + filter.key) || "").toLowerCase() !== filter.value) visible = false;
      });
      row.hidden = !visible;
    });
  }

  function bindToasts() {
    document.querySelectorAll("[data-toast]").forEach(function (element) {
      element.addEventListener("click", function () {
        showToast(element.getAttribute("data-toast") || "操作已完成");
      });
    });
  }

  function bindConfirmations() {
    document.querySelectorAll("[data-confirm]").forEach(function (button) {
      button.addEventListener("click", function () {
        var message = button.getAttribute("data-confirm") || "确认执行此操作？";
        if (window.confirm(message)) showToast(button.getAttribute("data-confirm-success") || "操作已确认");
      });
    });
  }

  function bindModals() {
    var lastFocusedElement = null;
    var focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    function openModal(modal, trigger) {
      lastFocusedElement = trigger || document.activeElement;
      modal.hidden = false;
      if (!modal.getAttribute("role")) modal.setAttribute("role", "dialog");
      if (!modal.getAttribute("aria-modal")) modal.setAttribute("aria-modal", "true");
      window.setTimeout(function () {
        var focusable = modal.querySelector(focusableSelector);
        if (focusable) focusable.focus();
      }, 0);
    }
    function closeModal(modal) {
      modal.hidden = true;
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
    }
    document.querySelectorAll("[data-modal-open]").forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = document.getElementById(button.getAttribute("data-modal-open"));
        if (modal) openModal(modal, button);
      });
    });
    document.querySelectorAll("[data-modal-close]").forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = button.closest(".modal");
        if (modal) closeModal(modal);
      });
    });
    document.querySelectorAll(".modal").forEach(function (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal && !modal.hasAttribute("data-modal-static")) closeModal(modal);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        var openModals = Array.prototype.slice.call(document.querySelectorAll(".modal:not([hidden])"));
        if (!openModals.length) return;
        var topModal = openModals[openModals.length - 1];
        if (!topModal.hasAttribute("data-modal-static")) closeModal(topModal);
      }
      if (event.key === "Tab") {
        var modal = document.querySelector(".modal:not([hidden])");
        if (!modal) return;
        var focusable = Array.prototype.slice.call(modal.querySelectorAll(focusableSelector)).filter(function (item) {
          return item.offsetParent !== null;
        });
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function bindTabs() {
    function syncTabActions(tabs, name) {
      var host = tabs.closest(".toolbar, .panel-header") || tabs.parentElement;
      if (!host) return;
      var actions = host.querySelector(".toolbar-actions");
      if (!actions) return;
      actions.querySelectorAll("[data-tab-action]").forEach(function (action) {
        action.hidden = action.getAttribute("data-tab-action") !== name;
      });
    }
    document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
      var scopeSelector = tabs.getAttribute("data-scope");
      var scope = scopeSelector ? document.querySelector(scopeSelector) : document;
      var initial = tabs.querySelector("[data-tab].active") || tabs.querySelector("[data-tab]");
      if (initial) syncTabActions(tabs, initial.getAttribute("data-tab"));
      tabs.querySelectorAll("[data-tab]").forEach(function (button) {
        button.addEventListener("click", function () {
          var name = button.getAttribute("data-tab");
          tabs.querySelectorAll("[data-tab]").forEach(function (item) { item.classList.remove("active"); });
          button.classList.add("active");
          scope.querySelectorAll("[data-tab-panel]").forEach(function (panel) {
            panel.hidden = panel.getAttribute("data-tab-panel") !== name;
          });
          syncTabActions(tabs, name);
        });
      });
    });
  }

  function bindViewSwitches() {
    document.querySelectorAll("[data-view-switch]").forEach(function (switcher) {
      var scopeSelector = switcher.getAttribute("data-scope");
      var scope = scopeSelector ? document.querySelector(scopeSelector) : document;
      switcher.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
          var view = button.getAttribute("data-view");
          switcher.querySelectorAll("button").forEach(function (item) { item.classList.remove("active"); });
          button.classList.add("active");
          scope.querySelectorAll("[data-view-panel]").forEach(function (panel) {
            panel.hidden = panel.getAttribute("data-view-panel") !== view;
          });
        });
      });
    });
  }

  function bindTables() {
    document.querySelectorAll(".data-table.selectable tbody tr").forEach(function (row) {
      row.addEventListener("click", function (event) {
        if (event.target.closest("button, a, input, select")) return;
        row.parentElement.querySelectorAll("tr").forEach(function (item) { item.classList.remove("selected"); });
        row.classList.add("selected");
      });
    });
    document.querySelectorAll("[data-table-search]").forEach(function (input) {
      input.addEventListener("input", function () {
        applyTableFilters(getTableBySelector(input.getAttribute("data-table-search")));
      });
    });
    document.querySelectorAll("[data-table-filter]").forEach(function (control) {
      control.addEventListener("change", function () {
        applyTableFilters(getTableBySelector(control.getAttribute("data-table-filter")));
      });
    });
    document.querySelectorAll("[data-apply-filters]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyTableFilters(getTableBySelector(button.getAttribute("data-apply-filters")));
        showToast("筛选完成");
      });
    });
    document.querySelectorAll("[data-status-tabs]").forEach(function (tabs) {
      tabs.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
          tabs.querySelectorAll("button").forEach(function (item) { item.classList.remove("active"); });
          button.classList.add("active");
          applyTableFilters(getTableBySelector(tabs.getAttribute("data-target")));
        });
      });
    });
    document.querySelectorAll("[data-reset-filters]").forEach(function (button) {
      button.addEventListener("click", function () {
        var scope = button.closest("[data-filter-scope]") || button.closest(".panel") || document;
        scope.querySelectorAll("input").forEach(function (input) { input.value = ""; });
        scope.querySelectorAll("select").forEach(function (select) { select.selectedIndex = 0; });
        document.querySelectorAll(".data-table").forEach(function (table) {
          resetStatusTabs(table);
          applyTableFilters(table);
        });
        showToast("筛选条件已重置");
      });
    });
  }

  function bindForms() {
    document.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        showToast(form.getAttribute("data-success") || "信息已保存");
        var modal = form.closest(".modal");
        if (modal) modal.hidden = true;
      });
    });
  }

  function bindMenus() {
    document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        var menu = button.parentElement.querySelector(".action-menu");
        if (!menu) return;
        menu.hidden = !menu.hidden;
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".action-menu").forEach(function (menu) { menu.hidden = true; });
    });
  }

  function setFieldValue(control, value) {
    if (!control) return;
    if (control.tagName === "SELECT") {
      var hasOption = Array.prototype.some.call(control.options, function (option) {
        return option.value === value || option.textContent === value;
      });
      if (!hasOption) {
        var option = document.createElement("option");
        option.textContent = value;
        control.appendChild(option);
      }
    }
    control.value = value;
  }

  function badgeTone(kind, name) {
    if ((kind || "").indexOf("住宿") !== -1 && (name || "").indexOf("尊享") !== -1) return "orange";
    if ((kind || "").indexOf("住宿") !== -1) return "blue";
    if ((kind || "").indexOf("餐饮") !== -1) return "green";
    if ((kind || "").indexOf("保障") !== -1) return "";
    return "purple";
  }

  function berthItems(count) {
    if (count === 3) {
      return [
        { label: "A 双人床", className: "main" },
        { label: "B 上铺", className: "upper" },
        { label: "C 沙发", className: "sofa" }
      ];
    }
    return Array.from({ length: count }, function (_, index) {
      var letter = String.fromCharCode(65 + index);
      var upper = index % 2 === 1;
      return { label: letter + (upper ? " 上铺" : " 下铺"), className: upper ? "upper" : "main" };
    });
  }

  function renderSleeperPlan(button) {
    var car = button.getAttribute("data-car") || "";
    var name = button.getAttribute("data-name") || "";
    var cabinCount = Number(button.getAttribute("data-cabins")) || 0;
    var berthCount = Number(button.getAttribute("data-berths-per-cabin")) || 0;
    var berths = berthItems(berthCount);
    var cards = [];
    for (var index = 1; index <= cabinCount; index += 1) {
      var cabinNo = car + "-" + String(index).padStart(2, "0");
      cards.push('<article class="cabin-plan-card">' +
        '<div class="cabin-plan-head"><b>' + cabinNo + '</b><span class="badge ' + (name.indexOf("尊享") !== -1 ? "orange" : "blue") + '">' + name + '</span></div>' +
        '<div class="berth-plan">' + berths.map(function (item) {
          return '<span class="berth-chip ' + item.className + '">' + item.label + '</span>';
        }).join("") + '</div>' +
      '</article>');
    }
    return '<div class="cabin-plan-grid">' + cards.join("") + '</div>' +
      '<div class="plan-corridor">过道 / 服务呼叫 / 行李架 / 卫浴动线</div>';
  }

  function renderFunctionPlan(button) {
    var name = button.getAttribute("data-name") || "功能车";
    var zones = (button.getAttribute("data-zones") || "服务台,设备区,储藏区,通道").split(",");
    return '<div class="function-zone-grid">' + zones.map(function (zone, index) {
      var badge = index === 0 ? "green" : index === 1 ? "blue" : index === 2 ? "orange" : "";
      return '<article class="function-zone"><div><b>' + zone + '</b><small>' + name + '的' + zone + '模块，可维护面积、容量、设备和运营说明。</small></div><span class="badge ' + badge + '">功能区</span></article>';
    }).join("") + '</div>' +
      '<div class="plan-corridor">通道 / 设备检修 / 运营动线</div>';
  }

  function updateCarriageWorkbench(button) {
    var scope = button.closest("[data-composition-workbench]") || document;
    var car = button.getAttribute("data-car") || "";
    var name = button.getAttribute("data-name") || (button.querySelector("b") ? button.querySelector("b").textContent : "");
    var kind = button.getAttribute("data-kind") || "";
    var cabins = button.getAttribute("data-cabins") || "0";
    var berthsPerCabin = button.getAttribute("data-berths-per-cabin") || "0";
    var total = button.getAttribute("data-total") || "0";
    var layout = button.getAttribute("data-layout") || "sleeper";
    var title = scope.querySelector("[data-car-title]");
    if (title) title.textContent = car + "车 · " + name;
    var kindBadge = scope.querySelector("[data-car-kind]");
    if (kindBadge) {
      kindBadge.textContent = kind;
      kindBadge.className = "badge " + badgeTone(kind, name);
    }
    var fields = {
      car: car,
      name: name,
      cabins: cabins,
      berthsPerCabin: berthsPerCabin,
      sale: button.getAttribute("data-sale") || "",
      bath: button.getAttribute("data-bath") || "",
      desc: button.getAttribute("data-desc") || ""
    };
    Object.keys(fields).forEach(function (key) {
      setFieldValue(scope.querySelector('[data-car-field="' + key + '"]'), fields[key]);
    });
    var previewTitle = scope.querySelector("[data-preview-title]");
    if (previewTitle) previewTitle.textContent = car + "车内部结构";
    var previewCount = scope.querySelector("[data-preview-count]");
    if (previewCount) {
      if (layout === "function") {
        var zoneCount = (button.getAttribute("data-zones") || "").split(",").filter(Boolean).length;
        previewCount.textContent = total !== "0" ? total + "资源位" : zoneCount + "个功能区";
      } else {
        previewCount.textContent = cabins + "间 · " + total + "席";
      }
    }
    var preview = scope.querySelector("[data-cabin-preview]");
    if (preview) preview.innerHTML = layout === "function" ? renderFunctionPlan(button) : renderSleeperPlan(button);
    var drawerTitle = document.getElementById("berthDrawerTitle");
    if (drawerTitle) drawerTitle.textContent = car + "车包厢与铺位明细";
  }

  function bindCarriages() {
    document.querySelectorAll("[data-composition-workbench]").forEach(function (workbench) {
      var active = workbench.querySelector(".carriage[data-car].active") || workbench.querySelector(".carriage[data-car]");
      if (active) updateCarriageWorkbench(active);
    });
    document.querySelectorAll(".carriage[data-car]").forEach(function (button) {
      button.addEventListener("click", function () {
        document.querySelectorAll(".carriage[data-car]").forEach(function (item) { item.classList.remove("active"); });
        button.classList.add("active");
        var title = document.querySelector("[data-car-title]");
        if (title && button.querySelector("b")) title.textContent = button.getAttribute("data-car") + "车 · " + button.querySelector("b").textContent;
        updateCarriageWorkbench(button);
        showToast("已切换至" + button.getAttribute("data-car") + "车");
      });
    });
  }

  function bindDeparture() {
    var picker = document.getElementById("globalDeparture");
    if (!picker) return;
    try {
      var saved = window.localStorage.getItem("railtour-departure");
      if (saved) picker.value = saved;
      picker.addEventListener("change", function () {
        window.localStorage.setItem("railtour-departure", picker.value);
        showToast("当前班期已切换");
      });
    } catch (error) {
      picker.addEventListener("change", function () { showToast("当前班期已切换"); });
    }
  }

  ensureFavicon();
  injectShell();
  bindMenus();
  bindToasts();
  bindConfirmations();
  bindViewSwitches();
  bindTabs();
  bindModals();
  bindTables();
  bindCarriages();
  bindForms();
  bindDeparture();

  window.RailtourERP = { showToast: showToast, applyTableFilters: applyTableFilters };
}());
