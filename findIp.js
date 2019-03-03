
/**
 * 给定一个字符串数组lines, 每一个元素代表一个IP地址，找到出现频率最高的IP。
 * 样例
 * 样例1:
 * 输入 = ["192.168.1.1","192.118.2.1","192.168.1.1"]
 * 输出  "192.168.1.1"
 */


const highestFrequency = function (ipLines) {
  // Write your code here
  if (!Array.isArray(ipLines)) {
      return new TypeError('expected an array')
  }
  
  if (ipLines.length === 0) {
      return null
  }
  
  if (ipLines.length === 1) {
      return ipLines[0]
  }
  
  ipLines = ipLines.map(ip => {
     return {
         ip,
         ipNum: 1
     }
  })
  
  const ipTemp = []
  for(let index in ipLines) {
      const isExists = ipTemp.findIndex(ipObj => ipObj.ip === ipLines[index].ip)
      if (isExists === -1) {
          ipTemp.push(ipLines[index])
      }else {
          ipTemp[isExists].ipNum++
      }
  }
  
  ipTemp.sort((pre, next) => {
      return pre.ipNum - next.ipNum
  })
  
  return ipTemp[ipTemp.length - 1].ip
  
}


const ipLines = ["211.253.56.94","137.146.172.106","211.205.113.199","227.242.103.82","137.146.172.106","30.147.114.139","170.34.209.231","145.174.193.236","133.55.158.175","95.155.235.70","92.44.234.28","180.67.197.242","137.146.172.106","27.67.218.217","237.181.177.254","25.51.213.45","105.145.158.172","80.105.131.156","184.12.220.191","137.146.172.106","152.107.96.18","105.75.61.254","183.211.147.225"]

console.log(highestFrequency(ipLines))