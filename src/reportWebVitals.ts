/*
 * @Author: wei yin
 * @Date: 2023-02-16 16:40:30
 * @LastEditors: wei yin
 * @LastEditTime: 2023-02-16 17:09:14
 * @Description:
 */
import { type ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if ((onPerfEntry != null) && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    }).catch(() => {})
  }
}

export default reportWebVitals
