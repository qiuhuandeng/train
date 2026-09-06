/* ============================================
   AI智能计调助手 - 纯前端模拟数据层
   ============================================ */

(function() {
  const STORAGE_KEY = 'aiTravelAssistant.workspace.v1';

  function uid(prefix) {
    return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function todayText() {
    return '今天 ' + new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  }

  const initialData = {
    conversations: [],
    plans: [
      {
        id: 'plan-zhang-rf',
        conversationId: 'zhang-family',
        title: '张先生一家 - 瑞士法国10日游',
        route: ['上海', '苏黎世', '卢塞恩', '因特拉肯', '蒙特勒', '巴黎', '上海'],
        status: 'pending',
        statusText: '待客户确认',
        people: '2大1小',
        days: '10天9晚',
        hotel: '四星以上',
        createdAt: '今天 09:36',
        total: 50300,
        perPerson: 16767,
        summary: '亲子友好、低换城频率，巴黎保留迪士尼整日。',
        itinerary: [
          ['Day1', '上海 → 苏黎世，抵达休息'],
          ['Day2', '苏黎世 → 卢塞恩，老城与湖边游船'],
          ['Day3', '卢塞恩 → 因特拉肯，少女峰'],
          ['Day4', '因特拉肯自由活动'],
          ['Day5', '金色快车 → 蒙特勒'],
          ['Day6-7', 'TGV 前往巴黎，塞纳河与铁塔'],
          ['Day8', '卢浮宫 + 蒙马特'],
          ['Day9', '巴黎迪士尼亲子日'],
          ['Day10', '巴黎 → 上海']
        ],
        quoteItems: [
          ['机票', 21600, '实时'],
          ['酒店', 9900, '协议价'],
          ['交通', 4200, '协议价'],
          ['门票', 5800, '协议价'],
          ['餐费', 6300, '估算'],
          ['导游', 2400, '协议价']
        ],
        documents: ['报价单草稿']
      },
      {
        id: 'plan-li-maldives',
        conversationId: 'li-honeymoon',
        title: '李女士蜜月 - 马代6晚',
        route: ['广州', '马累', '莉莉岛', '广州'],
        status: 'draft',
        statusText: '草稿',
        people: '2成人',
        days: '6晚8天',
        hotel: '2沙4水',
        createdAt: '今天 09:11',
        total: 43800,
        perPerson: 21900,
        summary: '一价全包主推，房型库存待确认。',
        itinerary: [
          ['Day1', '广州 → 马累，水飞上岛'],
          ['Day2-3', '沙屋入住，浮潜与蜜月布置'],
          ['Day4-6', '水屋入住，自由活动与海上项目'],
          ['Day7-8', '离岛返程']
        ],
        quoteItems: [
          ['国际机票', 9600, '实时'],
          ['莉莉岛套餐', 31800, '待确认'],
          ['水飞交通', 2400, '估算']
        ],
        documents: []
      },
      {
        id: 'plan-wang-japan',
        conversationId: 'wang-business',
        title: '王总商务团 - 日本5日',
        route: ['北京', '东京', '箱根', '北京'],
        status: 'pending',
        statusText: '报价待确认',
        people: '18人',
        days: '5天4晚',
        hotel: '五星商务酒店',
        createdAt: '昨天 16:30',
        total: 206400,
        perPerson: 11467,
        summary: '会议室、接送机和企业付款资料待确认。',
        itinerary: [
          ['Day1', '北京 → 东京，专车接机'],
          ['Day2', '客户拜访 + 商务接待'],
          ['Day3', '会议室半日 + 晚宴'],
          ['Day4', '箱根轻团建'],
          ['Day5', '返程送机']
        ],
        quoteItems: [
          ['国际机票', 81000, '实时'],
          ['五星酒店', 64800, '协议价'],
          ['专车与司导', 24600, '协议价'],
          ['会议室半日', 8000, '待确认'],
          ['餐饮与晚宴', 23000, '协议价'],
          ['保险与杂费', 5000, '估算']
        ],
        documents: ['内部报价单']
      },
      {
        id: 'plan-zhao-singapore',
        conversationId: 'zhao-rework',
        title: '赵女士亲子 - 新加坡7日',
        route: ['杭州', '新加坡', '圣淘沙', '杭州'],
        status: 'confirmed',
        statusText: '已确认',
        people: '2大2小',
        days: '7天6晚',
        hotel: '市区4晚 + 圣淘沙2晚',
        createdAt: '昨天 18:31',
        total: 58900,
        perPerson: 14725,
        summary: '第3版已确认，环球影城替换为动物园组合。',
        itinerary: [
          ['Day1', '杭州 → 新加坡'],
          ['Day2', '滨海湾轻松游 + 午休'],
          ['Day3', '动物园 + 夜间野生动物园'],
          ['Day4', '圣淘沙入住 + 海洋馆'],
          ['Day5', '圣淘沙自由活动'],
          ['Day6', 'Jewel + 亲子购物'],
          ['Day7', '返程']
        ],
        quoteItems: [
          ['机票', 18400, '实时'],
          ['酒店', 25200, '协议价'],
          ['亲子门票', 6900, '协议价'],
          ['接送与用车', 4600, '协议价'],
          ['餐费', 3800, '估算']
        ],
        documents: ['第3版行程单']
      },
      {
        id: 'plan-thai-team',
        conversationId: 'thai-done',
        title: '公司团建 - 普吉岛',
        route: ['深圳', '普吉岛', '深圳'],
        status: 'archived',
        statusText: '已归档',
        people: '32人',
        days: '5天4晚',
        hotel: '海边五星会议酒店',
        createdAt: '3天前',
        total: 288000,
        perPerson: 9000,
        summary: '已完成出团，可复制为企业团建模板。',
        itinerary: [
          ['Day1', '深圳 → 普吉岛，分批接机'],
          ['Day2', '上午会议，下午沙滩团建'],
          ['Day3', '皮皮岛一日游'],
          ['Day4', '自由活动 + 海边晚宴'],
          ['Day5', '返程送机']
        ],
        quoteItems: [
          ['机票', 108800, '已确认'],
          ['酒店', 96000, '已确认'],
          ['地接与用车', 31200, '已确认'],
          ['团建活动', 28000, '已确认'],
          ['晚宴', 24000, '已确认']
        ],
        documents: ['行程单PDF', '报价单XLS', '供应商确认单']
      }
    ],
    segments: [
      {
        id: 'seg-japan-business-5d',
        region: 'asia',
        status: 'approved',
        from: '东京商务团',
        to: '东京 + 箱根',
        transport: '整段组件',
        componentType: '商务团整段组件',
        duration: '5天4晚',
        season: '10-4月最佳',
        audience: '商务/团建',
        desc: '上海出发，东京商务拜访、酒店会议室、专车接送机和箱根温泉轻团建，适合18人左右企业商务团。',
        tags: ['商务', '会议', '团建', '温泉'],
        source: '日本商务团资源表.xlsx · 已入库',
        original: 'Tokyo business group 5D4N: hotel 4 nights, guide 5 days, private coach 5 days, meeting room half day, dinner, flight and insurance.',
        requiredResources: [
          { key: 'flight', resource: '机票', category: '机票', city: '上海-东京', label: '国际机票', quoteGroup: '国际机票', quantity: 18, unit: '人', pricingQuantity: 18, pricingUnit: '人/往返', priceId: 'price-sha-tyo-flight', status: '实时', detailLabel: '18人往返经济舱' },
          { key: 'hotel', resource: '酒店', category: '酒店', city: '东京', label: '五星酒店', quoteGroup: '五星酒店', quantity: 4, unit: '晚', pricingQuantity: 36, pricingUnit: '间夜', priceId: 'price-tokyo-business-hotel', status: '协议价', detailLabel: '酒店4晚，18人按9间核算' },
          { key: 'guide', resource: '司导', category: '导游', city: '东京', label: '中文司导', quoteGroup: '专车与司导', quantity: 5, unit: '天', pricingQuantity: 5, pricingUnit: '天', priceId: 'price-japan-guide', status: '协议价', detailLabel: '5天中文商务司导' },
          { key: 'vehicle', resource: '专车', category: '用车', city: '东京', label: '商务车', quoteGroup: '专车与司导', quantity: 5, unit: '天', pricingQuantity: 5, pricingUnit: '车/天', priceId: 'price-tokyo-business-car', status: '协议价', adjustment: -4400, adjustmentLabel: '地接打包减免', detailLabel: '专车5天，18座商务车' },
          { key: 'meeting', resource: '会议室', category: '会议室', city: '东京', label: '会议室半日', quoteGroup: '会议室半日', quantity: 1, unit: '半日', pricingQuantity: 1, pricingUnit: '半日', priceId: 'price-tokyo-meeting-room', status: '待确认', detailLabel: '会议室半日，U型桌、投影、基础茶水' },
          { key: 'dinner', resource: '晚宴', category: '餐费', city: '东京', label: '团队晚宴', quoteGroup: '餐饮与晚宴', quantity: 1, unit: '餐', pricingQuantity: 18, pricingUnit: '人/餐', priceId: 'price-tokyo-team-dinner', status: '协议价', detailLabel: '团队晚宴1餐，18人' },
          { key: 'meal-package', resource: '商务餐饮包', category: '餐费', city: '东京', label: '商务接待餐饮包', quoteGroup: '餐饮与晚宴', quantity: 1, unit: '团', pricingQuantity: 1, pricingUnit: '团', priceId: 'price-tokyo-business-meal-package', status: '协议价', detailLabel: '商务接待餐饮补充包' },
          { key: 'insurance', resource: '保险', category: '保险', city: '日本', label: '保险与杂费', quoteGroup: '保险与杂费', quantity: 18, unit: '人', pricingQuantity: 1, pricingUnit: '团', priceId: 'price-japan-insurance-service', status: '估算', detailLabel: '18人保险与杂费打包' }
        ]
      },
      {
        id: 'seg-paris-nice',
        region: 'europe',
        status: 'approved',
        from: '巴黎',
        to: '尼斯',
        transport: '🚂 TGV高铁',
        duration: '1天',
        season: '6-9月最佳',
        audience: '蜜月/摄影',
        desc: '从巴黎乘坐 TGV 前往尼斯，沿途可衔接普罗旺斯薰衣草田、蔚蓝海岸和南法小镇体验。',
        tags: ['蜜月', '摄影', '夏季'],
        source: '欧洲部2024秋季线路.pdf · P18',
        original: '巴黎-尼斯段适合夏季摄影和蜜月客群，可安排普罗旺斯中停。'
      },
      {
        id: 'seg-zurich-lucerne',
        region: 'europe',
        status: 'approved',
        from: '苏黎世',
        to: '卢塞恩',
        transport: '🚆 瑞铁',
        duration: '1天',
        season: '全年',
        audience: '亲子/首次欧洲',
        desc: '火车约1小时，适合抵达后轻松衔接。安排老城漫步、狮子纪念碑和卢塞恩湖游船。',
        tags: ['亲子', '轻松', '湖区'],
        source: '瑞士亲子线路库.pdf · P6',
        original: '苏黎世进、卢塞恩住一晚，可有效降低第一天疲劳。'
      },
      {
        id: 'seg-tokyo-hakone',
        region: 'asia',
        status: 'approved',
        from: '东京',
        to: '箱根',
        transport: '🚄 小田急',
        duration: '1-2天',
        season: '10-4月最佳',
        audience: '商务/团建',
        desc: '东京出发前往箱根，适合商务团做轻团建。可安排温泉酒店、芦之湖和富士山观景。',
        tags: ['温泉', '富士山', '团建'],
        source: '日本精选线路.pdf · P22',
        original: '商务团如需放松，可加箱根一晚，不建议继续拉到关西。'
      },
      {
        id: 'seg-singapore-zoo',
        region: 'asia',
        status: 'approved',
        from: '新加坡市区',
        to: '新加坡动物园',
        transport: '🚐 包车',
        duration: '1天',
        season: '全年',
        audience: '亲子',
        desc: '适合低龄亲子家庭，可与夜间野生动物园组合，但中间需安排午休或酒店休整。',
        tags: ['亲子', '动物园', '低龄友好'],
        source: '新加坡亲子玩法.xlsx · 行12',
        original: '动物园和夜间动物园可同日安排，但低龄儿童必须加休息窗口。'
      },
      {
        id: 'seg-review-montreux',
        region: 'europe',
        status: 'approved',
        from: '因特拉肯',
        to: '蒙特勒',
        transport: '🚆 金色快车',
        duration: '1天',
        season: '5-10月最佳',
        audience: '亲子/摄影',
        desc: '金色山口快车衔接瑞士湖区，沿途风景好，适合从少女峰区域平稳过渡到法语区。',
        tags: ['火车景观', '瑞士'],
        source: '瑞士火车专题.pdf · P14',
        original: 'GoldenPass Express: Interlaken to Montreux, scenic rail route, recommended for family and photography itineraries.'
      },
      {
        id: 'seg-review-lily',
        region: 'asia',
        status: 'approved',
        from: '马累',
        to: '莉莉岛',
        transport: '✈️ 水飞',
        duration: '6晚',
        season: '9-11月性价比高',
        audience: '蜜月',
        desc: '一价全包岛，浮潜条件稳定，适合重视性价比和水下环境的蜜月客户。',
        tags: ['蜜月', '海岛'],
        source: '马代岛屿资料.docx · P3',
        original: 'Lily Beach: all inclusive, strong reef, honeymoon friendly, high demand for 2BV+4WV package.'
      }
    ],
    prices: [
      { id: 'price-paris-marriott', category: '酒店', city: '巴黎', name: '万豪香榭丽舍 标准间', supplier: '万豪直连', price: 1200, unit: '间/晚', period: '2026.03 - 2026.09', source: '手工', status: 'valid' },
      { id: 'price-sha-par-flight', category: '机票', city: '上海-巴黎', name: '东航直飞经济舱', supplier: '中航信', price: 6500, unit: '人/单程', period: '实时', source: 'API', status: 'realtime' },
      { id: 'price-louvre', category: '门票', city: '巴黎', name: '卢浮宫团队票', supplier: 'Local DMC', price: 150, unit: '人/次', period: '2026.01 - 2026.12', source: '手工', status: 'valid' },
      { id: 'price-zurich-hotel', category: '酒店', city: '苏黎世', name: '市区四星酒店 标准间', supplier: '瑞士地接', price: 1350, unit: '间/晚', period: '2026.04 - 2026.08', source: '手工', status: 'expiring' },
      { id: 'price-tgv-par-nice', category: '火车', city: '巴黎-尼斯', name: 'TGV 二等座', supplier: 'SNCF', price: 450, unit: '人/单程', period: '2025.06 - 2025.12', source: '手工', status: 'expired' },
      { id: 'price-sha-tyo-flight', category: '机票', city: '上海-东京', name: '上海东京往返经济舱', supplier: '中航信', price: 4500, unit: '人/往返', period: '实时', source: 'API', status: 'realtime', condition: '按人/往返报价，税费和舱位以实时接口为准。', formula: '人数 × 往返票价', markup: '实时成本 + 服务费' },
      { id: 'price-tokyo-business-hotel', category: '酒店', city: '东京', name: '东京五星商务酒店 标准间', supplier: '东京地接社', price: 1800, unit: '间/晚', period: '2026.08 - 2027.03', source: '手工', status: 'valid', condition: '双人入住标准间，含早，需确认入住日期、房型和取消规则。', formula: '间数 × 晚数 × 间夜价', markup: '成本价 + 8%-12%' },
      { id: 'price-japan-guide', category: '导游', city: '东京', name: '中文商务司导 10小时', supplier: '东京地接社', price: 2200, unit: '天', period: '2026.01 - 2026.12', source: '手工', status: 'valid', condition: '10小时/天，含中文司导服务，不含超时和小费。', formula: '服务天数 × 日服务费', markup: '成本价 + 10%' },
      { id: 'price-tokyo-business-car', category: '用车', city: '东京', name: '商务车 18座 全天', supplier: '东京车队A', price: 3600, unit: '车/天', period: '2026.08 - 2027.03', source: '手工', status: 'valid', condition: '10小时/天，停车、高速和超时另计；商务团可走地接打包减免。', formula: '用车天数 × 日车价 + 超时/停车/高速', markup: '成本价 + 10%' },
      { id: 'price-tokyo-meeting-room', category: '会议室', city: '东京', name: '东京商务酒店会议室 半日', supplier: '东京地接社', price: 8000, unit: '半日', period: '2026.08 - 2027.03', source: '手工', status: 'valid', condition: 'U型桌、投影、基础茶水，茶歇另计，需按酒店库存二次确认。', formula: '场次 × 半日价 + 茶歇/设备费用', markup: '成本价 + 10%' },
      { id: 'price-tokyo-team-dinner', category: '餐费', city: '东京', name: '团队晚宴 商务标准', supplier: '东京餐饮联盟', price: 300, unit: '人/餐', period: '2026.08 - 2027.03', source: '手工', status: 'valid', condition: '团队晚宴餐标，18人起订，酒水和包间费另计。', formula: '人数 × 餐数 × 餐标', markup: '成本价 + 8%-10%' },
      { id: 'price-tokyo-business-meal-package', category: '餐费', city: '东京', name: '商务接待餐饮包', supplier: '东京餐饮联盟', price: 17600, unit: '团', period: '2026.08 - 2027.03', source: '手工', status: 'valid', condition: '含商务接待餐、茶歇预留和团队用餐调剂，按团报价。', formula: '团费固定金额', markup: '成本价 + 8%-10%' },
      { id: 'price-japan-insurance-service', category: '保险', city: '日本', name: '日本团体保险与杂费', supplier: '内部结算', price: 5000, unit: '团', period: '长期有效', source: '手工', status: 'valid', condition: '18人团体保险、材料和杂费打包估算。', formula: '按团固定金额', markup: '成本价 + 服务费' },
      { id: 'price-lily-package', category: '酒店', city: '马尔代夫', name: '莉莉岛 2沙4水套餐', supplier: '海岛批发商A', price: 31800, unit: '2人/套', period: '2026.09 - 2026.11', source: '手工', status: 'expiring' }
    ],
    uploadTasks: [
      {
        id: 'task-europe',
        fileName: '欧洲深度游2026秋季.pdf',
        size: '87MB',
        pages: '52页',
        uploadedAt: '今天 09:20',
        status: 'completed',
        statusText: '已解析',
        progress: 100,
        recognized: 38,
        pending: 0,
        original: 'Page 14: GoldenPass Express from Interlaken to Montreux. Scenic rail route suitable for family and photography itineraries.',
        extracted: ['seg-review-montreux']
      },
      {
        id: 'task-maldives',
        fileName: '马代岛屿资料.docx',
        size: '14MB',
        pages: '18页',
        uploadedAt: '今天 08:40',
        status: 'completed',
        statusText: '已解析',
        progress: 100,
        recognized: 12,
        pending: 0,
        original: 'Lily Beach all inclusive package: 2 Beach Villa + 4 Water Villa, strong reef, honeymoon friendly.',
        extracted: ['seg-review-lily']
      },
      {
        id: 'task-japan',
        fileName: '日本商务团资源表.xlsx',
        size: '3MB',
        pages: '8个Sheet',
        uploadedAt: '昨天 17:30',
        status: 'completed',
        statusText: '已入库',
        progress: 100,
        recognized: 9,
        pending: 0,
        original: '东京商务司导和箱根温泉段已入库。',
        extracted: []
      },
      {
        id: 'task-bad',
        fileName: '扫描版欧洲小册子.pdf',
        size: '126MB',
        pages: '86页',
        uploadedAt: '昨天 11:12',
        status: 'error',
        statusText: '解析失败',
        progress: 34,
        recognized: 0,
        pending: 0,
        original: 'OCR 质量过低，建议启用增强 OCR 重新解析。',
        extracted: []
      }
    ],
    notifications: [
      { id: 'notice-review', type: 'info', text: '新资料解析后会自动同步到资源库' },
      { id: 'notice-price', type: 'warning', text: '2 条价格即将过期' }
    ],
    logs: []
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function upsertDefaultsById(target, defaults, refreshIds = []) {
    const refreshSet = new Set(refreshIds);
    defaults.forEach(defaultItem => {
      const existing = target.find(item => item.id === defaultItem.id);
      if (!existing) {
        target.push(clone(defaultItem));
      } else if (refreshSet.has(defaultItem.id)) {
        Object.assign(existing, clone(defaultItem));
      }
    });
  }

  function parsePeriodEnd(period) {
    if (!period || period === '实时' || period === '长期有效') return null;
    const parts = String(period).split(/\s*-\s*/);
    const end = parts[parts.length - 1];
    const dateParts = String(end).split(/[./-]/).map(Number);
    if (dateParts.length >= 3) return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    if (dateParts.length >= 2) return new Date(dateParts[0], dateParts[1], 0);
    return null;
  }

  function priceStatus(price) {
    if (!price) return 'missing';
    if (price.source === 'API' || price.period === '实时') return 'realtime';
    const end = parsePeriodEnd(price.period);
    if (!end) return price.status || 'valid';
    const days = Math.ceil((end - new Date()) / 86400000);
    if (days < 0) return 'expired';
    if (days <= 30) return 'expiring';
    return 'valid';
  }

  function inferRequirementNames(seg) {
    const haystack = [seg.from, seg.to, seg.transport, seg.desc, seg.audience, ...(seg.tags || [])].join(' ');
    const resources = new Set();
    if (/商务|会议/.test(haystack)) ['酒店', '用车', '司导', '会议室', '餐食'].forEach(item => resources.add(item));
    if (/团建/.test(haystack)) ['酒店', '用车', '司导', '门票/活动', '餐食'].forEach(item => resources.add(item));
    if (/亲子|蜜月|摄影|老年/.test(haystack)) ['酒店', '门票/活动'].forEach(item => resources.add(item));
    if (/火车|TGV|瑞铁|小田急|JR|快车/.test(haystack)) resources.add('区间交通');
    if (/包车|大巴|自驾|用车/.test(haystack)) resources.add('用车');
    if (/飞机|水飞|航班/.test(haystack)) resources.add('机票/内陆交通');
    if (/游船|动物园|卢浮宫|少女峰|迪士尼|体验|景点|温泉|海洋馆/.test(haystack)) resources.add('门票/活动');
    if (!resources.size) ['酒店', '用车', '门票/活动'].forEach(item => resources.add(item));
    return Array.from(resources);
  }

  function categoryForRequirement(resource) {
    return {
      司导: '导游',
      专车: '用车',
      晚宴: '餐费',
      餐食: '餐费',
      商务餐饮包: '餐费',
      '门票/活动': '门票',
      区间交通: '火车',
      '机票/内陆交通': '机票'
    }[resource] || resource;
  }

  function componentNeeds(component) {
    if (!component) return [];
    if (Array.isArray(component.requiredResources) && component.requiredResources.length) {
      return clone(component.requiredResources).map((rawNeed, index) => {
        const need = typeof rawNeed === 'string' ? { resource: rawNeed } : rawNeed;
        return {
          key: need.key || ('need-' + index),
          resource: need.resource || need.category || '资源',
          category: need.category || categoryForRequirement(need.resource),
          city: need.city || component.to || component.from || '',
          label: need.label || need.resource || need.category || '资源',
          quoteGroup: need.quoteGroup || need.label || need.resource || need.category || '资源',
          quantity: Number(need.quantity || 1),
          unit: need.unit || '项',
          pricingQuantity: Number(need.pricingQuantity || need.quantity || 1),
          pricingUnit: need.pricingUnit || need.unit || '项',
          status: need.status || '',
          adjustment: Number(need.adjustment || 0),
          adjustmentLabel: need.adjustmentLabel || '',
          detailLabel: need.detailLabel || '',
          priceId: need.priceId || '',
          matchKeywords: need.matchKeywords || []
        };
      });
    }
    return inferRequirementNames(component).map(name => ({
      key: name,
      resource: name,
      category: categoryForRequirement(name),
      city: component.to || component.from || '',
      label: name,
      quoteGroup: name,
      quantity: 1,
      unit: '项',
      pricingQuantity: 1,
      pricingUnit: '项',
      status: ''
    }));
  }

  function priceMatchesNeed(price, need, component) {
    if (!price || !need) return false;
    if (need.priceId && price.id === need.priceId) return true;
    const category = need.category || categoryForRequirement(need.resource);
    const categoryMatched = String(price.category || '').includes(category) ||
      String(price.name || '').includes(category) ||
      (category === '用车' && /车|接送/.test(String(price.name || ''))) ||
      (category === '会议室' && /会议/.test(String(price.name || '')));
    if (!categoryMatched) return false;

    const cityWords = [need.city, component?.from, component?.to]
      .filter(Boolean)
      .flatMap(value => String(value).split(/[+\s/→-]+/))
      .filter(Boolean);
    const haystack = [price.city, price.name, price.supplier].join(' ');
    const cityMatched = !cityWords.length || cityWords.some(word => haystack.includes(word));
    const keywordMatched = !(need.matchKeywords || []).length || need.matchKeywords.some(word => haystack.includes(word));
    return cityMatched && keywordMatched;
  }

  function matchPricesForNeed(need, component, prices) {
    return (prices || []).filter(price => priceMatchesNeed(price, need, component)).sort((a, b) => {
      if (need.priceId && a.id === need.priceId) return -1;
      if (need.priceId && b.id === need.priceId) return 1;
      return Number(a.price || 0) - Number(b.price || 0);
    });
  }

  function needStatus(need, price) {
    if (!price) return '缺价';
    if (need.status) return need.status;
    const status = priceStatus(price);
    if (status === 'realtime') return '实时';
    if (status === 'expiring' || status === 'expired') return '待确认';
    return '协议价';
  }

  function calculateNeedLine(need, price) {
    const quoteQuantity = Number(need.pricingQuantity || need.quantity || 1);
    const quoteUnit = need.pricingUnit || need.unit || '项';
    const base = price ? Number(price.price || 0) * quoteQuantity : 0;
    const adjustment = Number(need.adjustment || 0);
    return {
      need,
      price: price || null,
      amount: base + adjustment,
      baseAmount: base,
      quoteQuantity,
      quoteUnit,
      adjustment,
      status: needStatus(need, price),
      matched: Boolean(price),
      detail: price
        ? `${need.detailLabel || need.label}：${price.name} ${formatMoney(price.price)} × ${quoteQuantity}${quoteUnit}${adjustment ? `，${need.adjustmentLabel || '调整'} ${formatMoney(adjustment)}` : ''}`
        : `${need.label || need.resource}：缺少可用价格`
    };
  }

  function quoteStatusForLines(lines) {
    if (lines.some(line => !line.matched)) return '待确认';
    const statuses = lines.map(line => line.status).filter(Boolean);
    if (statuses.length && statuses.every(status => status === statuses[0])) return statuses[0];
    if (lines.some(line => /待确认|缺价/.test(line.status))) return '待确认';
    if (lines.some(line => /估算/.test(line.status))) return '估算';
    if (lines.some(line => line.status === '实时')) return '实时';
    return '协议价';
  }

  function quoteSourceType(status) {
    if (status === '实时') return 'api';
    if (/待确认|估算|缺价/.test(status)) return 'warning';
    return 'local';
  }

  function buildQuoteForComponent(componentOrId, options = {}) {
    const data = options.data || load();
    const component = typeof componentOrId === 'string'
      ? data.segments.find(item => item.id === componentOrId)
      : componentOrId;
    if (!component) {
      return { component: null, needs: [], lines: [], items: [], total: 0, perPerson: 0, missing: [], matchedCount: 0, totalNeeds: 0 };
    }

    const needs = componentNeeds(component);
    const lines = needs.map(need => {
      const price = matchPricesForNeed(need, component, data.prices)[0];
      return calculateNeedLine(need, price);
    });
    const groups = new Map();
    lines.forEach(line => {
      const name = line.need.quoteGroup || line.need.label || line.need.resource;
      if (!groups.has(name)) groups.set(name, { name, amount: 0, lines: [] });
      const group = groups.get(name);
      group.amount += line.amount;
      group.lines.push(line);
    });

    const items = Array.from(groups.values()).map(group => {
      const status = quoteStatusForLines(group.lines);
      return {
        name: group.name,
        amount: Math.round(group.amount),
        status,
        sourceType: quoteSourceType(status),
        details: group.lines.map(line => line.detail),
        missing: group.lines.filter(line => !line.matched).map(line => line.need.resource)
      };
    });
    const total = items.reduce((sum, item) => sum + item.amount, 0);
    const people = Number(options.people || component.people || 18);
    const missing = lines.filter(line => !line.matched).map(line => line.need);
    return {
      component: clone(component),
      needs,
      lines,
      items,
      total,
      perPerson: people ? Math.round(total / people) : total,
      people,
      missing,
      matchedCount: lines.filter(line => line.matched).length,
      totalNeeds: lines.length
    };
  }

  function formatMoney(amount) {
    const num = Number(amount || 0);
    return (num < 0 ? '-¥' : '¥') + Math.abs(num).toLocaleString('zh-CN');
  }

  function snapshotPlan(plan, label, reason) {
    return {
      id: uid('ver'),
      label,
      reason: reason || '方案快照',
      time: todayText(),
      summary: plan.summary,
      route: clone(plan.route || []),
      itinerary: clone(plan.itinerary || []),
      quoteItems: clone(plan.quoteItems || []),
      total: plan.total || 0,
      perPerson: plan.perPerson || 0,
      status: plan.status,
      statusText: plan.statusText
    };
  }

  function ensurePlanVersions(plan) {
    if (!Array.isArray(plan.versions) || !plan.versions.length) {
      const version = snapshotPlan(plan, 'V1 初版', '系统初始方案');
      version.time = plan.createdAt || version.time;
      plan.versions = [version];
      plan.currentVersionId = version.id;
    }
    if (!plan.currentVersionId && plan.versions[0]) {
      plan.currentVersionId = plan.versions[plan.versions.length - 1].id;
    }
    if (!Array.isArray(plan.documents)) {
      plan.documents = [];
    }
  }

  function normalizeData(data) {
    if (!Array.isArray(data.conversations)) data.conversations = [];
    if (!Array.isArray(data.plans)) data.plans = clone(initialData.plans);
    if (!Array.isArray(data.segments)) data.segments = clone(initialData.segments);
    if (!Array.isArray(data.prices)) data.prices = clone(initialData.prices);
    if (!Array.isArray(data.uploadTasks)) data.uploadTasks = clone(initialData.uploadTasks);
    if (!Array.isArray(data.notifications)) data.notifications = clone(initialData.notifications);
    if (!Array.isArray(data.logs)) data.logs = [];

    const quoteSegmentIds = ['seg-japan-business-5d'];
    const quotePriceIds = [
      'price-sha-tyo-flight',
      'price-tokyo-business-hotel',
      'price-japan-guide',
      'price-tokyo-business-car',
      'price-tokyo-meeting-room',
      'price-tokyo-team-dinner',
      'price-tokyo-business-meal-package',
      'price-japan-insurance-service'
    ];
    upsertDefaultsById(data.segments, initialData.segments.filter(item => quoteSegmentIds.includes(item.id)), quoteSegmentIds);
    upsertDefaultsById(data.prices, initialData.prices.filter(item => quotePriceIds.includes(item.id)), quotePriceIds);

    data.plans.forEach(ensurePlanVersions);
    data.version = 1;
    return data;
  }

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.version === 1) {
        const normalized = normalizeData(saved);
        save(normalized);
        return normalized;
      }
    } catch (e) {}
    const fresh = normalizeData(clone(initialData));
    save(fresh);
    return fresh;
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function mutate(fn) {
    const data = load();
    const result = fn(data);
    save(data);
    return result;
  }

  function addLog(action, detail) {
    mutate(data => {
      data.logs.unshift({
        id: uid('log'),
        time: todayText(),
        action,
        detail
      });
      data.logs = data.logs.slice(0, 80);
    });
  }

  window.AppStore = {
    uid,
    todayText,
    componentNeeds,
    categoryForRequirement,
    matchPricesForNeed,
    priceStatus,
    buildQuoteForComponent,
    quoteSourceType,
    japanBusinessQuote(options = {}) {
      return buildQuoteForComponent('seg-japan-business-5d', { people: 18, ...options });
    },
    money(amount) {
      if (typeof amount === 'string') return amount;
      return '¥' + Number(amount || 0).toLocaleString('zh-CN');
    },
    all() {
      return load();
    },
    reset() {
      localStorage.removeItem(STORAGE_KEY);
      return load();
    },
    addPlan(plan) {
      return mutate(data => {
        const next = { ...plan, id: plan.id || uid('plan'), createdAt: plan.createdAt || todayText(), documents: plan.documents || [] };
        ensurePlanVersions(next);
        data.plans.unshift(next);
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '创建方案', detail: next.title });
        return next;
      });
    },
    updatePlan(id, patch) {
      return mutate(data => {
        const plan = data.plans.find(item => item.id === id);
        if (plan) Object.assign(plan, patch);
        return plan;
      });
    },
    duplicatePlan(id) {
      return mutate(data => {
        const plan = data.plans.find(item => item.id === id);
        if (!plan) return null;
        const copy = clone(plan);
        copy.id = uid('plan');
        copy.title = plan.title + '（复制）';
        copy.status = 'draft';
        copy.statusText = '草稿';
        copy.createdAt = todayText();
        copy.documents = [];
        copy.versions = [snapshotPlan(copy, 'V1 复制草稿', '从 ' + plan.title + ' 复制')];
        copy.currentVersionId = copy.versions[0].id;
        data.plans.unshift(copy);
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '复制方案', detail: copy.title });
        return copy;
      });
    },
    setConversations(conversations) {
      return mutate(data => {
        data.conversations = clone(conversations || []);
        return data.conversations;
      });
    },
    updateConversation(id, patch) {
      return mutate(data => {
        const conversation = data.conversations.find(item => item.id === id);
        if (conversation) Object.assign(conversation, patch);
        return conversation;
      });
    },
    capturePlanVersion(id, label, reason) {
      return mutate(data => {
        const plan = data.plans.find(item => item.id === id);
        if (!plan) return null;
        ensurePlanVersions(plan);
        const version = snapshotPlan(plan, label || ('V' + (plan.versions.length + 1)), reason);
        plan.versions.push(version);
        plan.currentVersionId = version.id;
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '保存方案版本', detail: plan.title + ' · ' + version.label });
        return version;
      });
    },
    restorePlanVersion(id, versionId) {
      return mutate(data => {
        const plan = data.plans.find(item => item.id === id);
        if (!plan) return null;
        ensurePlanVersions(plan);
        const version = plan.versions.find(item => item.id === versionId);
        if (!version) return null;
        Object.assign(plan, {
          summary: version.summary,
          route: clone(version.route),
          itinerary: clone(version.itinerary),
          quoteItems: clone(version.quoteItems),
          total: version.total,
          perPerson: version.perPerson,
          status: version.status,
          statusText: version.statusText,
          currentVersionId: version.id
        });
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '恢复方案版本', detail: plan.title + ' · ' + version.label });
        return plan;
      });
    },
    addDocumentToPlan(id, doc) {
      return mutate(data => {
        const plan = data.plans.find(item => item.id === id);
        if (!plan) return null;
        ensurePlanVersions(plan);
        const index = plan.documents.findIndex(item => typeof item === 'string' ? item === doc.name : item.name === doc.name);
        if (index >= 0) {
          plan.documents[index] = { id: uid('doc'), time: todayText(), ...doc };
        } else {
          plan.documents.push({ id: uid('doc'), time: todayText(), ...doc });
        }
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '生成文档', detail: plan.title + ' · ' + doc.name });
        return plan;
      });
    },
    addSegment(segment) {
      return mutate(data => {
        const next = { ...segment, id: segment.id || uid('seg'), status: segment.status || 'approved' };
        data.segments.unshift(next);
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '切段入库', detail: next.from + ' → ' + next.to });
        return next;
      });
    },
    updateSegment(id, patch) {
      return mutate(data => {
        const segment = data.segments.find(item => item.id === id);
        if (segment) Object.assign(segment, patch);
        return segment;
      });
    },
    deleteSegment(id) {
      return mutate(data => {
        const index = data.segments.findIndex(item => item.id === id);
        if (index >= 0) return data.segments.splice(index, 1)[0];
        return null;
      });
    },
    approveSegment(id) {
      return mutate(data => {
        const segment = data.segments.find(item => item.id === id);
        if (segment) {
          segment.status = 'approved';
          segment.tags = (segment.tags || []).filter(tag => tag !== '待审核');
          data.uploadTasks.forEach(task => {
            if ((task.extracted || []).includes(id)) {
              task.pending = Math.max(0, (task.pending || 0) - 1);
              task.status = task.pending ? 'pending' : 'completed';
              task.statusText = '已解析';
            }
          });
          data.logs.unshift({ id: uid('log'), time: todayText(), action: '审核通过', detail: segment.from + ' → ' + segment.to });
        }
        return segment;
      });
    },
    rejectSegment(id) {
      return mutate(data => {
        const segment = data.segments.find(item => item.id === id);
        if (segment) {
          segment.status = 'rejected';
          data.logs.unshift({ id: uid('log'), time: todayText(), action: '拒绝切段', detail: segment.from + ' → ' + segment.to });
        }
        return segment;
      });
    },
    addPrice(price) {
      return mutate(data => {
        const next = { ...price, id: price.id || uid('price'), status: price.status || 'valid' };
        data.prices.unshift(next);
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '添加价格', detail: next.city + ' · ' + next.name });
        return next;
      });
    },
    updatePrice(id, patch) {
      return mutate(data => {
        const price = data.prices.find(item => item.id === id);
        if (price) Object.assign(price, patch);
        return price;
      });
    },
    deletePrice(id) {
      return mutate(data => {
        const index = data.prices.findIndex(item => item.id === id);
        if (index >= 0) return data.prices.splice(index, 1)[0];
        return null;
      });
    },
    addUploadTask(file) {
      return mutate(data => {
        const isPrice = /\.(xlsx|xls|csv)$/i.test(file.name || '');
        const task = {
          id: uid('task'),
          fileName: file.name || '未命名文件.pdf',
          size: file.size ? Math.max(1, Math.round(file.size / 1024 / 1024)) + 'MB' : '模拟文件',
          pages: isPrice ? '待识别Sheet' : '待识别页数',
          uploadedAt: todayText(),
          status: 'processing',
          statusText: '解析中',
          progress: 12,
          recognized: 0,
          pending: 0,
          original: '新上传文件正在解析，完成后将在这里展示原文片段和结构化结果。',
          extracted: []
        };
        data.uploadTasks.unshift(task);
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '上传文件', detail: task.fileName });
        return task;
      });
    },
    updateUploadTask(id, patch) {
      return mutate(data => {
        const task = data.uploadTasks.find(item => item.id === id);
        if (task) Object.assign(task, patch);
        return task;
      });
    },
    deleteUploadTask(id) {
      return mutate(data => {
        const index = data.uploadTasks.findIndex(item => item.id === id);
        if (index >= 0) return data.uploadTasks.splice(index, 1)[0];
        return null;
      });
    },
    completeUploadTask(id) {
      return mutate(data => {
        const task = data.uploadTasks.find(item => item.id === id);
        if (!task) return null;
        const segment = {
          id: uid('seg'),
          region: 'europe',
          status: 'approved',
          from: '米兰',
          to: '卢塞恩',
          transport: '🚆 火车',
          duration: '1天',
          season: '5-10月最佳',
          audience: '亲子/轻奢',
          desc: '从意大利北部进入瑞士湖区，适合意瑞连线产品，建议控制当天活动强度。',
          tags: ['意瑞连线', '湖区'],
          source: task.fileName + ' · AI解析',
          original: 'Milano to Lucerne rail connection, scenic lake arrival, suitable for family groups.'
        };
        data.segments.unshift(segment);
        task.progress = 100;
        task.status = 'completed';
        task.statusText = '已解析';
        task.recognized = 1;
        task.pending = 0;
        task.extracted = [segment.id];
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '解析完成', detail: task.fileName });
        return task;
      });
    },
    addImportedPrices() {
      return mutate(data => {
        const imports = [
          { id: uid('price'), category: '餐费', city: '苏黎世', name: '瑞士团队简餐', supplier: 'Swiss DMC', price: 180, unit: '人/餐', period: '2026.08 - 2026.12', source: '手工', status: 'valid' },
          { id: uid('price'), category: '门票', city: '新加坡', name: '夜间野生动物园团队票', supplier: 'SG Partner', price: 280, unit: '人/次', period: '2026.01 - 2026.12', source: '手工', status: 'valid' }
        ];
        data.prices.unshift(...imports);
        data.logs.unshift({ id: uid('log'), time: todayText(), action: '导入价格表', detail: '新增 ' + imports.length + ' 条价格' });
        return imports;
      });
    },
    addLog
  };
})();
