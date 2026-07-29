# 专列运营 ERP 静态原型：页面实施计划

> 来源附件：`/Users/qiu/Downloads/专列页面.docx`
>
> 本文件用于指导当前保留业务页面和最终导航页的分批生成、验收与串联。页面制作仍必须遵守 `AGENTS.md` 中的统一布局、视觉、交互和菜单规范。
>
> 视觉与交互基准：参照 `train_2/railtour-erp-static`，当前项目已复制并适配共享资产到 `assets/styles.css`、`assets/app.js`、`assets/favicon.svg`。后续页面默认使用这些资产生成后台外壳、导航、Modal、Drawer、Toast、Tab 和表格筛选交互。

## 1. 当前核对结论

- 原附件中的页面数量已被当前菜单收敛方案覆盖，项目目标按现有菜单、二级页面和已内联弹窗后的保留页面推进。
- `index.html` 已按最新要求作为经营首页，最终页面地图建议使用 `prototype-map.html` 或 `page-map.html`，避免覆盖经营首页。
- 菜单结构和页面名称以 `assets/app.js` 为准，本文档必须与其保持同步。

## 2. 实施节奏

建议每批生成 3-5 个页面。每批完成后做一次小验收，再进入下一批，避免 100 多个页面后期返工。

1. 运力库存：保留 16 页，沉淀后台通用 Header、Sidebar、筛选栏、表格、Modal、Drawer 风格。
2. 产品定价：保留 13 页，重点统一产品、价格、退改、促销的表单和价格展示。
3. 销售分销：保留 9 页，打通客户、渠道、分销账号等入口。
4. 订单交易：保留 12 页，形成下单、收款、单据、选铺、售后主链路。
5. 计调作业：保留 8 页，覆盖分团、名单、地接、发团和订单变更。
6. 财务管理：保留 16 页，覆盖应收、应付、对账、班期核算、结算关账、发票和财务对接。
7. 数据分析：保留 6 页，客户分析页已按最新要求从菜单和路由移除。
8. 系统管理：做 8 页，覆盖组织、权限、字典、消息、日志、集成和参数。
9. C 端报名端：做 8 页，使用手机端 375px 居中布局，不使用后台 Header + Sidebar。
10. 分销门户：做 6 页，使用轻量 PC 端横向菜单，不使用复杂 Sidebar。
11. 最后生成 `prototype-map.html` 导航页，按当前模块分组列出保留业务页面链接。

每批页面都先按 `assets/styles.css` 的组件类生成，不重新发明页面风格；若需要新组件，优先贴近 train_2 的面板、表格、按钮和状态 Badge 语言。

## 3. 页面清单

### 3.1 运力库存（16 页）

| 文件名 | 页面 |
| --- | --- |
| `stock-traintype-list.html` | 列车车型 |
| `stock-carriage-config.html` | 编组配置（二级页面：列车车型） |
| `stock-cabin-config.html` | 房型包厢 |
| `stock-facility.html` | 设施服务 |
| `stock-schedule-year.html` | 年度班期 |
| `stock-schedule-batch.html` | 系统开班（二级页面） |
| `stock-schedule-list.html` | 班期列表 |
| `stock-overview.html` | 库存总览 |
| `stock-berth-board.html` | 铺位看板（二级页面：库存总览） |
| `stock-log.html` | 库存流水 |
| `stock-display-rule.html` | 展示规则（二级页面：库存总览） |
| `stock-hold-apply.html` | 守仓管理 |
| `stock-hold-expire.html` | 守仓到期（二级页面：守仓管理） |
| `stock-cut-manage.html` | 切位管理 |
| `stock-release-log.html` | 释放记录 |
| `stock-warning.html` | 库存预警 |

### 3.2 产品定价（13 页）

| 文件名 | 页面 |
| --- | --- |
| `product-list.html` | 产品列表 |
| `product-edit.html` | 产品编辑（二级页面：产品列表） |
| `product-schedule-link.html` | 班期关联（二级页面：产品列表） |
| `price-plan.html` | 价格方案 |
| `price-headcount.html` | 价格方案配置（二级页面：价格方案） |
| `price-calendar.html` | 价格日历 |
| `price-multi-system.html` | 多价体系 |
| `refund-ladder.html` | 阶梯退改 |
| `refund-anti-abuse.html` | 退改风控 |
| `refund-special.html` | 特殊规则 |
| `promo-earlybird.html` | 早鸟团购（促销活动二级页，菜单不单列） |
| `promo-commission.html` | 渠道返佣 |
| `promo-activity-list.html` | 促销活动 |

### 3.3 销售分销（9 页）

| 文件名 | 页面 |
| --- | --- |
| `sale-customer-list.html` | 客户列表 |
| `sale-customer-merge.html` | 客户合并 |
| `sale-customer-tag.html` | 客户标签 |
| `channel-list.html` | 渠道档案 |
| `channel-price.html` | 结算价格（二级页面，由渠道档案列表进入） |
| `channel-reconcile.html` | 返佣对账 |
| `channel-order-log.html` | 渠道订单 |
| `distribution-account.html` | 分销账号 |
| `distribution-audit.html` | 分销审核 |

### 3.4 订单交易（12 页，含售后收敛页）

| 文件名 | 页面 |
| --- | --- |
| `order-list.html` | 订单列表 |
| `order-after-sales.html` | 售后工单 |
| `order-detail.html` | 订单详情（二级页面：订单列表） |
| `order-create.html` | 新建订单（二级页面：订单列表） |
| `order-traveler-list.html` | 旅客名单 |
| `order-ocr.html` | 证件识别（二级页面：旅客名单） |
| `order-doc-check.html` | 证件核验 |
| `order-doc-generate.html` | 单据生成（二级页面：订单列表） |
| `order-berth-assign.html` | 代客选铺（合并选铺工作台：订单队列 / 列车铺位 / 确认信息） |
| `order-berth-log.html` | 换铺记录 |
| `order-payment.html` | 收款记录 |
| `order-online-pay.html` | 在线流水 |

### 3.5 计调作业（8 页）

| 文件名 | 页面 |
| --- | --- |
| `ops-group-list.html` | 团队管理 |
| `ops-group-detail.html` | 团队详情（二级页面：团队管理） |
| `ops-namelist.html` | 团队名单（归属分团管理） |
| `ops-dmc-plan.html` | 接待计划（列表页；下达地接表单为弹窗） |
| `ops-dmc-settle.html` | 地接结算 |
| `ops-dmc-list.html` | 地接档案 |
| `ops-dispatch-board.html` | 发团看板（班期发团总控台：准备度检查 / 团队矩阵 / 最终确认） |
| `ops-change-collab.html` | 订单变更（发团作业下的协同任务入口） |

### 3.6 财务管理（16 页）

| 文件名 | 页面 |
| --- | --- |
| `fin-receivable.html` | 应收账款 |
| `fin-writeoff.html` | 收款核销 |
| `fin-writeoff-detail.html` | 订单核销（收款核销二级页） |
| `fin-aging.html` | 账龄分析 |
| `fin-payable.html` | 应付账款 |
| `fin-payable-other.html` | 其他应付（应付账款二级页） |
| `fin-channel-reconcile.html` | 往来对账 |
| `fin-auto-match.html` | 自动匹配（收款核销二级页） |
| `fin-reconcile-doc.html` | 对账单据（往来对账二级页） |
| `fin-profit.html` | 班期核算 |
| `fin-closeout.html` | 结算关账 |
| `fin-channel-analysis.html` | 渠道毛利 |
| `fin-invoice.html` | 发票管理 |
| `fin-integration.html` | 凭证同步 |
| `fin-integration-log.html` | 接口日志 |
| `fin-integration-config.html` | 接口配置 |

### 3.7 数据分析（6 页）

| 文件名 | 页面 |
| --- | --- |
| `bi-overview.html` | 经营总览 |
| `bi-sales.html` | 销售分析 |
| `bi-direct.html` | 直客分析 |
| `bi-stock.html` | 库存分析 |
| `bi-refund.html` | 退改分析 |
| `bi-report.html` | 报表中心 |

### 3.8 系统管理（8 页）

| 文件名 | 页面 |
| --- | --- |
| `sys-dept.html` | 部门管理 |
| `sys-user.html` | 员工账号 |
| `sys-role.html` | 角色权限 |
| `sys-dict.html` | 数据字典 |
| `sys-msg-template.html` | 消息模板 |
| `sys-log.html` | 操作日志 |
| `sys-integration.html` | 接口集成 |
| `sys-params.html` | 参数设置 |

### 3.9 C 端报名端（8 页）

| 文件名 | 页面 |
| --- | --- |
| `c-home.html` | 产品首页 |
| `c-product-detail.html` | 产品详情 |
| `c-schedule.html` | 班期查询 |
| `c-booking.html` | 在线报名 |
| `c-pay.html` | 在线支付 |
| `c-berth-select.html` | 付款选铺 |
| `c-my-orders.html` | 我的订单 |
| `c-service.html` | 在线客服 |

### 3.10 分销门户（6 页）

| 文件名 | 页面 |
| --- | --- |
| `d-home.html` | 渠道首页 |
| `d-search.html` | 查价查位 |
| `d-order-create.html` | 在线下单 |
| `d-my-orders.html` | 我的订单 |
| `d-settlement.html` | 结算查看 |
| `d-reconcile.html` | 对账中心 |

## 4. 每批页面验收清单

每批完成后必须检查：

1. 文件名与清单完全一致。
2. 每个 HTML 都是完整独立文件，包含 `<!DOCTYPE html>`、Tailwind CDN、完整 `body`、内联原生 JS。
3. 每个 HTML 必须引用 `assets/styles.css`、`assets/app.js` 和 `assets/favicon.svg`；后台页由共享 JS 注入 Sidebar、Topbar 和面包屑。
4. 后台页 `body` 必须写 `data-page="文件名去掉 .html"`；分销门户写 `data-shell="channel"`；C 端写 `data-shell="mobile"`。
5. 当前一级菜单高亮正确，面包屑与页面模块一致。
6. 列表页具备筛选、新建按钮、操作列和分页。
7. 详情使用 Drawer；新建、编辑、确认使用 Modal；默认隐藏，按钮可演示。
8. 字段、示例数据、行数严格来自附件指令；未给足时按同业务风格补齐。
9. C 端页面必须是 375px 手机端布局，库存只显示模糊状态。
10. 分销门户页面必须使用轻量 PC 横向菜单，只显示渠道结算价和模糊库存。
11. 每批结束后记录已完成文件，最后用 `prototype-map.html` 串联全部业务页。

## 5. 导航页 `prototype-map.html` 要求

最后生成一个原型导航页 `prototype-map.html`：

- 按 10 个模块分组：运力库存、产品定价、销售分销、订单交易、计调作业、财务管理、数据分析、系统管理、C 端报名端、分销门户。
- 每个页面一个卡片链接，卡片显示页面中文名和文件名。
- 每个模块显示页数统计。
- 对“待补设计页”可显示小标签，等页面完成后移除。
- 页面整体仍用 Tailwind CDN + 原生 JS，可独立打开。
- 所有链接使用相对路径，便于直接打开本地文件夹演示。

## 5.1 V1.1 菜单收敛改造记录

### 运力库存

运力库存当前菜单只保留主页面，二级页面通过主页面动作进入：

- 列车资源：列车车型 / 房型包厢 / 设施服务；编组配置由列车车型进入，铺位规则已收敛到房型包厢页内 Tab。
- 班期计划：年度班期 / 班期列表；系统开班由班期列表进入，年度班期也提供入口。
- 库存管理：库存总览 / 库存流水 / 库存预警；铺位看板、展示规则由库存总览进入，预警规则由库存预警页内弹窗进入。
- 守仓切位：守仓管理 / 切位管理 / 释放记录；守仓到期由守仓管理进入。

### 产品定价

产品定价当前菜单只保留主页面，二级页面通过主页面动作进入：

- 定价管理：产品列表 / 价格方案 / 价格日历 / 多价体系。
- 产品编辑、班期关联由产品列表进入；产品上架已收敛为产品列表抽屉。
- 价格方案配置由价格方案进入；铺位定价、单房差价已收敛到价格方案配置。
- 退改策略：阶梯退改 / 退改风控 / 特殊规则。
- 促销政策：促销活动 / 渠道返佣；早鸟团购收敛为促销活动内的客户优惠规则配置。

### 销售分销

本模块按当前销售分销菜单保留主入口，弹窗承接轻量配置：

- 客户管理：客户列表 / 客户合并 / 客户标签。
- 渠道管理：渠道档案 / 返佣对账 / 渠道订单；授信在渠道档案列表弹窗维护，结算价格由渠道档案列表进入二级页。
- 分销管理：分销账号 / 分销审核；分销权限在分销账号列表通过“授权”弹窗维护。

### 订单交易

本模块按订单主链路收敛：订单列表负责订单入口，售后工单负责退订退款、改期换房、加减人、投诉和财务退款节点，旧退改三页已删除。

- 订单管理：订单列表 / 售后工单；订单详情、新建订单由订单列表进入，订单变更在订单列表弹窗处理。
- 旅客资料：旅客名单 / 证件核验；证件识别由旅客名单或订单录入中的证件上传入口进入。
- 单据生成：由订单列表行操作进入，确认件 / 收款单 / 发团通知书 / 分团单在同页 Tab。
- 选铺管理：代客选铺 / 换铺记录；待选铺订单已收敛为代客选铺页左侧订单队列。
- 收款管理：收款记录 / 在线流水；订单列表行操作“收款”直接打开登记收款弹窗，支付配置放在在线流水页弹窗维护。
- 售后工单：统一承接售后申请、审核处理、费用计算和财务退款。

已撤销的聚合页 `order-berth-manage.html` 不再保留；订单列表中的“单据”进入二级页面，“变更”在列表弹窗内处理；退改申请、违约计算、退款处理、收款提醒旧页已删除，对应能力收敛到售后工单、订单列表和收款记录。

### 计调作业

计调作业当前菜单只保留主列表入口，配置动作通过列表行操作或弹窗进入：

- 分团管理：团队管理 / 团队名单；团队详情由团队管理进入，后置分团调整作为列表行操作，名单导出收敛为团队名单弹窗且不再展示预览表。
- 地接计划：接待计划 / 地接结算 / 地接档案；下达地接表单在接待计划列表中以弹窗打开。
- 发团作业：发团看板 / 订单变更；行前提醒和证件复核收敛为看板内的客服通知、名单证件检查抽屉，最终发团必须经过准备度检查和确认弹窗。

## 6. 建议主演示动线

最终演示时优先串这几条主流程：

1. 库存建模：列车车型 → 编组配置 → 房型包厢 → 库存总览 → 铺位看板。
2. 产品售卖：产品列表 → 产品编辑 → 班期关联 → 价格方案 → 产品列表上架抽屉。
3. 销售下单：新建订单 → 订单列表收款弹窗 → 收款记录 → 代客选铺。
4. 客户自助：C 端首页 → 产品详情 → 班期查询 → 在线报名 → 在线支付 → 付款选铺 → 我的订单。
5. 渠道自助：分销门户首页 → 查价查位 → 在线下单 → 我的订单 → 结算查看 → 对账中心。
6. 履约计调：团队管理 → 团队名单 → 接待计划 → 发团看板准备度检查 → 最终发团确认。
7. 财务闭环：应收账款 → 收款核销 → 往来对账 → 应付账款 → 班期核算 → 结算关账 → 凭证同步。
8. 经营汇报：经营总览 → 销售分析 → 直客分析 → 库存分析 → 渠道毛利 → 报表中心。
