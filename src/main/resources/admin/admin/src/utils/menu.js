const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},{"child":[{"buttons":["新增","查看","修改","删除","卫生","缴费"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"维修人员","menuJump":"列表","tableName":"weixiurenyuan"}],"menu":"维修人员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商家","menuJump":"列表","tableName":"shangjia"}],"menu":"商家管理"},{"child":[{"buttons":["新增","查看","修改","删除","安排"],"menu":"宿舍信息","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"宿舍安排","menuJump":"列表","tableName":"susheanpai"}],"menu":"宿舍安排管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"报修处理","menuJump":"列表","tableName":"baoxiuchuli"}],"menu":"报修处理管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"假期留宿","menuJump":"列表","tableName":"jiaqiliusu"}],"menu":"假期留宿管理"},{"child":[{"buttons":["查看","修改","删除","报表","文明宿舍"],"menu":"卫生检查","menuJump":"列表","tableName":"weishengjiancha"}],"menu":"卫生检查管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"文明宿舍","menuJump":"列表","tableName":"wenmingsushe"}],"menu":"文明宿舍管理"},{"child":[{"buttons":["查看","修改","删除","导出"],"menu":"缴费信息","menuJump":"列表","tableName":"jiaofeixinxi"}],"menu":"缴费信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"桶装水品牌","menuJump":"列表","tableName":"tongzhuangshuipinpai"}],"menu":"桶装水品牌管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"桶装水","menuJump":"列表","tableName":"tongzhuangshui"}],"menu":"桶装水管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"桶装水预订","menuJump":"列表","tableName":"tongzhuangshuiyuding"}],"menu":"桶装水预订管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"物品类别","menuJump":"列表","tableName":"wupinleibie"}],"menu":"物品类别管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"失物信息","menuJump":"列表","tableName":"shiwuxinxi"}],"menu":"失物信息管理"},{"child":[{"buttons":["删除","修改","查看"],"menu":"招领信息","menuJump":"列表","tableName":"zhaolingxinxi"}],"menu":"招领信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"宿舍公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"桶装水列表","menuJump":"列表","tableName":"tongzhuangshui"}],"menu":"桶装水模块"},{"child":[{"buttons":["查看"],"menu":"失物信息列表","menuJump":"列表","tableName":"shiwuxinxi"}],"menu":"失物信息模块"},{"child":[{"buttons":["查看"],"menu":"招领信息列表","menuJump":"列表","tableName":"zhaolingxinxi"}],"menu":"招领信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"宿舍安排","menuJump":"列表","tableName":"susheanpai"}],"menu":"宿舍安排管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"buttons":["查看"],"menu":"报修处理","menuJump":"列表","tableName":"baoxiuchuli"}],"menu":"报修处理管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"假期留宿","menuJump":"列表","tableName":"jiaqiliusu"}],"menu":"假期留宿管理"},{"child":[{"buttons":["查看"],"menu":"卫生检查","menuJump":"列表","tableName":"weishengjiancha"}],"menu":"卫生检查管理"},{"child":[{"buttons":["查看"],"menu":"文明宿舍","menuJump":"列表","tableName":"wenmingsushe"}],"menu":"文明宿舍管理"},{"child":[{"buttons":["查看","支付"],"menu":"缴费信息","menuJump":"列表","tableName":"jiaofeixinxi"}],"menu":"缴费信息管理"},{"child":[{"buttons":["查看","删除","支付"],"menu":"桶装水预订","menuJump":"列表","tableName":"tongzhuangshuiyuding"}],"menu":"桶装水预订管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"失物信息","menuJump":"列表","tableName":"shiwuxinxi"}],"menu":"失物信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"招领信息","menuJump":"列表","tableName":"zhaolingxinxi"}],"menu":"招领信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"桶装水列表","menuJump":"列表","tableName":"tongzhuangshui"}],"menu":"桶装水模块"},{"child":[{"buttons":["查看"],"menu":"失物信息列表","menuJump":"列表","tableName":"shiwuxinxi"}],"menu":"失物信息模块"},{"child":[{"buttons":["查看"],"menu":"招领信息列表","menuJump":"列表","tableName":"zhaolingxinxi"}],"menu":"招领信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看","审核","处理"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"报修处理","menuJump":"列表","tableName":"baoxiuchuli"}],"menu":"报修处理管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"桶装水列表","menuJump":"列表","tableName":"tongzhuangshui"}],"menu":"桶装水模块"},{"child":[{"buttons":["查看"],"menu":"失物信息列表","menuJump":"列表","tableName":"shiwuxinxi"}],"menu":"失物信息模块"},{"child":[{"buttons":["查看"],"menu":"招领信息列表","menuJump":"列表","tableName":"zhaolingxinxi"}],"menu":"招领信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"维修人员","tableName":"weixiurenyuan"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"桶装水","menuJump":"列表","tableName":"tongzhuangshui"}],"menu":"桶装水管理"},{"child":[{"buttons":["查看","审核"],"menu":"桶装水预订","menuJump":"列表","tableName":"tongzhuangshuiyuding"}],"menu":"桶装水预订管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"桶装水列表","menuJump":"列表","tableName":"tongzhuangshui"}],"menu":"桶装水模块"},{"child":[{"buttons":["查看"],"menu":"失物信息列表","menuJump":"列表","tableName":"shiwuxinxi"}],"menu":"失物信息模块"},{"child":[{"buttons":["查看"],"menu":"招领信息列表","menuJump":"列表","tableName":"zhaolingxinxi"}],"menu":"招领信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"商家","tableName":"shangjia"}]
    }
}
export default menu;