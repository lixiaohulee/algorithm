


/**
 * 给出两个字符串，你需要找到缺少的字符串
 * 样例
 * 样例 1:
 * 输入 : str1 = "This is an example", str2 = "is example"
 * 输出 : ["This", "an"]
 * 注意事项
 * 输出时字符串顺序为输入字符串内的顺序
 */


 /**
 * @param str1: a given string
 * @param str2: another given string
 * @return: An array of missing string
 */
const missingString = function (str1, str2) {
    return str1.split(' ').filter(item => {
        return !str2.split(' ').includes(item)
    })
}
