//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/image/1.png',
      '/image/2.png',
      '/image/3.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    tel: function () {
      wx.makePhoneCall({
        phoneNumber: '158XXXXXXXX',
      })
    },
    awx:function () {
        wx.makePhoneCall({
          phoneNumber: '158XXXXXXXX',
        })
      }
  }
});

  