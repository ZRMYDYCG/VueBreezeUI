/**
 * 生成一个唯一的UID（唯一标识符）
 * @returns {number} 返回生成的唯一UID
 */
export const getRandomUid = (): number => {
  // 获取当前时间戳
  const time = Date.now()
  // 生成随机数
  const random = Math.floor(Math.random() * 10000)
  // 生成唯一 uid
  return parseInt(`${time}${random}`, 10)
}
