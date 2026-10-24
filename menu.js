/* ===== CONFIG-START  菜品数据（网页后台 / 桌面后台通用，二者保存格式一致）===== */
/* ╔══════════════════════════════════════════════════════════╗
   ║  ★★★  店 家 配 置 区（用"后台桌面版"或"MenuAdmin.exe"修改）★★★  ║
   ╚══════════════════════════════════════════════════════════╝ */

/* 一、店铺信息 */
var SHOP = {
  name: "小资家餐馆",
  notice: "选好菜后点底部【确认点菜】→【一键复制点菜菜单】，回到微信对话框粘贴发给我就预订成功啦～",
  showTotal: true
};

/* 二、菜品分类（id 只能英文字母/数字且不重复） */
var CATEGORIES = [
  { id: "tese", name: "特色菜", icon: "👑" },
  { id: "recai", name: "热菜", icon: "🍲" },
  { id: "shucai", name: "蔬菜", icon: "🥦" },
  { id: "liang", name: "凉菜", icon: "🥬" },
  { id: "tang", name: "汤", icon: "🥣" },
  { id: "tianpin", name: "甜品", icon: "🍕" },
  { id: "zhushi", name: "主食", icon: "🍚" },
];

/* 三、菜品列表（一行一道菜） */
var DISHES = [
  { name: "小资家红烧肉", price: 58, cat: "tese", desc: "", tags: ["招牌"], img: "小资家红烧肉.jpg" },
  { name: "蜜汁山药排骨", price: 88, cat: "tese", desc: "", tags: ["招牌"], img: "蜜汁山药排骨.jpg" },
  { name: "金牌肘子", price: 88, cat: "tese", desc: "", tags: ["招牌"], img: "金牌肘子.jpg" },
  { name: "风味手把羊排", cat: "tese", desc: "", tags: ["招牌"], img: "风味手把羊排小份.jpg", specs: [{ label: "小份", price: 98.0, img: "风味手把羊排小份.jpg" }, { label: "大份", price: 178.0, img: "风味手把羊排.jpg" }] },
  { name: "澳门芥辣双色虾球", price: 78, cat: "tese", desc: "", tags: ["招牌"], img: "澳门芥辣双色虾球.jpg" },
  { name: "爆鱼", price: 78, cat: "tese", desc: "", tags: ["新品"], img: "爆鱼.jpg", suspended: true },
  { name: "剁椒鱼头", price: 178, cat: "tese", desc: "", tags: ["新品"], img: "剁椒鱼头.jpg", suspended: true },
  { name: "石锅黑椒碟鱼头", price: 178, cat: "tese", desc: "", tags: ["招牌"], img: "石锅黑椒碟鱼头.jpg" },
  { name: "清蒸深海鲽鱼", price: 228, cat: "tese", desc: "", tags: ["招牌"], img: "清蒸深海鲽鱼.jpg" },
  { name: "臭鳜鱼", price: 298, cat: "tese", desc: "", tags: ["招牌"], img: "臭鳜鱼.jpg" },
  { name: "清蒸虎斑鱼", price: 298, cat: "tese", desc: "", tags: ["招牌"], img: "清蒸虎斑鱼.jpg" },
  { name: "白灼基围虾", price: 398, cat: "tese", desc: "", tags: [], img: "白灼基围虾.jpg" },
  { name: "葱烧辽参", price: 68, cat: "recai", desc: "", tags: [], img: "葱烧辽参.jpg" },
  { name: "油爆河虾", price: 68, cat: "recai", desc: "", tags: [], img: "油爆河虾.jpg" },
  { name: "麻辣扇贝", price: 68, cat: "recai", desc: "", tags: ["辣"], img: "麻辣扇贝.jpg" },
  { name: "芝士大虾", price: 88, cat: "recai", desc: "", tags: [], img: "芝士大虾.jpg" },
  { name: "干锅酥嘴辣鸭头", price: 58, cat: "recai", desc: "", tags: ["辣"], img: "干锅酥嘴辣鸭头.jpg" },
  { name: "麻辣鸭脖", price: 58, cat: "recai", desc: "", tags: [], img: "香辣鸭脖.jpg" },
  { name: "辣子鸡", price: 68, cat: "recai", desc: "", tags: ["辣"], img: "辣子鸡.jpg" },
  { name: "酥香肉丸子", price: 68, cat: "recai", desc: "", tags: [], img: "酥香肉丸子.jpg" },
  { name: "水爆肚", price: 68, cat: "recai", desc: "", tags: [], img: "水爆肚.jpg" },
  { name: "酱油肥肠", price: 68, cat: "recai", desc: "", tags: [], img: "酱油肥肠.jpg" },
  { name: "腊八蒜炒心管", price: 78, cat: "recai", desc: "", tags: [], img: "腊八蒜炒心管.jpg" },
  { name: "虫草花炒鸡蛋", price: 39, cat: "shucai", desc: "", tags: [], img: "虫草花炒鸡蛋.jpg", suspended: true },
  { name: "白灼西生菜", price: 38, cat: "shucai", desc: "", tags: [], img: "白灼西生菜.jpg" },
  { name: "蒜蓉西兰花", price: 38, cat: "shucai", desc: "", tags: [], img: "蒜蓉西兰花.jpg" },
  { name: "油焖春笋", price: 46, cat: "shucai", desc: "", tags: [], img: "油焖春笋.jpg" },
  { name: "芦笋鲜百合", price: 48, cat: "shucai", desc: "", tags: [], img: "芦笋鲜百合.jpg" },
  { name: "芦笋鲜虾仁", price: 58, cat: "shucai", desc: "", tags: [], img: "芦笋鲜虾仁.jpg" },
  { name: "五花肉螺丝椒", price: 58, cat: "shucai", desc: "", tags: [], img: "五花肉螺丝椒.jpg" },
  { name: "香煎酸菜五花肉", price: 58, cat: "shucai", desc: "", tags: [], img: "香煎酸菜五花肉_v2.jpg" },
  { name: "肉末酸豆角", price: 42, cat: "shucai", desc: "", tags: [], img: "肉末酸豆角.jpg" },
  { name: "蓝莓山药", price: 38, cat: "tianpin", desc: "", tags: [], img: "蓝莓山药.jpg" },
  { name: "冰糕", price: 6, cat: "tianpin", desc: "", tags: [], img: "香菜冰糕.jpg" },
  { name: "秘制家常凉菜", price: 42, cat: "liang", desc: "", tags: [], img: "家常凉菜.jpg" },
  { name: "蔬菜沙拉", price: 38, cat: "liang", desc: "", tags: [], img: "蔬菜沙拉.jpg" },
  { name: "金枪鱼沙拉", price: 58, cat: "liang", desc: "", tags: [], img: "金枪鱼沙拉.jpg" },
  { name: "香辣板筋", price: 48, cat: "liang", desc: "", tags: [], img: "香辣板筋.jpg" },
  { name: "原汁牛肉", cat: "tang", desc: "", tags: ["招牌"], img: "原汁牛肉.jpg", specs: [{ label: "小份", price: 68.0, img: "" }, { label: "大份", price: 128.0, img: "" }] },
  { name: "脊骨炖酸菜", price: 78, cat: "tang", desc: "", tags: [], img: "脊骨炖酸菜_v2.jpg" },
  { name: "米饭", price: 3, cat: "zhushi", desc: "", tags: [], img: "米饭.jpg" },
  { name: "糯米芝麻球", price: 32, cat: "zhushi", desc: "", tags: [], img: "糯米芝麻球.jpg" },
  { name: "酱油炒饭", price: 36, cat: "zhushi", desc: "", tags: [], img: "酱油炒饭.jpg" },
  { name: "扬州炒饭", price: 42, cat: "zhushi", desc: "", tags: [], img: "扬州炒饭.jpg" },
  { name: "海参四鲜水饺", price: 58, cat: "zhushi", desc: "", tags: [], img: "海参四鲜水饺.jpg" },
  { name: "鸡蛋柿子面", price: 18, cat: "zhushi", desc: "", tags: [], img: "鸡蛋柿子面.jpg" },
];

/* ===== CONFIG-END ===== */
