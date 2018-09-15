Page({
  data: {
    category: [{
        name: '狗粮',
        id: 'guowei'
      },
      {
        name: '猫粮',
        id: 'shucai'
      },
      {
        name: '狗盆',
        id: 'chaohuo'
      },
      {
        name: '猫盆',
        id: 'dianxin'
      },
      {
        name: '猫砂',
        id: 'cucha'
      },
      {
        name: '狗窝',
        id: 'danfan'
      }
    ],
    goodsDetail: {
      "id": 1,
      banner: "http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg",
      title: "description",
      list: [{
          id: "productId",
          thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
          name: 'ss2',
          price: 1.0
        },
        {
          id: "productId2",
          thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
          name: 'ss2',
          price: 1.0
        },
        {
          id: "productId3",
          thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
          name: 'ss2',
          price: 1.0
        },
        {
          id: "productId4",
          thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
          name: 'ss2',
          price: 1.0
        }
      ]
    },
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  onReady() {
    var self = this;
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // });

  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function() {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      });
      //重新请求获取数据
      self.setData({
        goodsDetail: {
          "id": 1,
          banner: "http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg",
          title: "description",
          list: [{
              id: "productId",
              thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
              name: '刷新',
              price: 1.0
            },
            {
              id: "productId2",
              thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
              name: '刷新',
              price: 2.0
            },
            {
              id: "productId3",
              thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
              name: '刷新',
              price: 1.0
            },
            {
              id: "productId4",
              thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
              name: '刷新',
              price: 1.0
            }
          ]
        }
      })
    }, 0)
    setTimeout(function() {
      self.setData({
        isScroll: false
      })
    }, 1)

  }

})