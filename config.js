// Supabase 配置文件
// 请将此文件中的值替换为你的 Supabase 项目配置

const SUPABASE_CONFIG = {
  // 你的 Supabase Project URL
  // 格式：https://xxxxx.supabase.co
  URL: 'https://vsygebpobthtxncbndhz.supabase.co',

  // 你的 anon public key
  // 在 Supabase Dashboard → Settings → API 中获取
  ANON_KEY: 'sb_publishable_Jvcb-mzcLyiAygfJL3imVw_tYbq5WWJ'
};

// 管理员配置
const ADMIN_CONFIG = {
  // 管理员登录邮箱（Supabase Authentication 中创建的用户）
  EMAIL: 'lq01282323@cainiao.com',

  // 默认分类列表
  DEFAULT_CATEGORIES: ['技术问题', '功能建议', '投诉', '咨询', '其他'],

  // 优先级选项
  PRIORITY_OPTIONS: ['P0-紧急', 'P1-高', 'P2-中', 'P3-低'],

  // 状态选项
  STATUS_OPTIONS: ['待处理', '处理中', '已解决', '已关闭']
};

// 文件上传配置
const UPLOAD_CONFIG = {
  // 最大文件数量
  MAX_FILES: 5,

  // 单个文件最大大小（字节）- 10MB
  MAX_FILE_SIZE: 10 * 1024 * 1024,

  // 允许的文件类型
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
};
