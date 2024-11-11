/**
 * @description: 支持监听单个插槽或者一组插槽是否存在
 *
 * @param slotName 单个插槽或插槽列表名称
 * @return computed | reactive 如果是单个插槽名称，则返回一个计算属性，表示该插槽是否存在, 如果是插槽名称数组，则返回一个 reactive 对象，其中的每个属性对应该插槽是否存在
 * */
export function useSlotsExist(slotName: string | string[]) {}
