Page({
  data: {
    category: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    goodsList: [
      {
        name:'商品1',
        id:1,
        detail:'详情描述',
        price:10,
        banner:'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
        detail: [
          {
            thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
           name: 'ss' }, 
          {
            thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg', 
          name: 'ss2' }
          ],
      },
      {
        name: '商品2',
        id: 2,
        detail: '详情描述2',
        price: 10,
        banner: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
        detail: [
          {
            thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
            name: 'ss'
          },
          {
            thumb: 'http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/2018_36/ec148994-862f-4210-a32f-c92878dfd38d_2FAAC0E33E170C4950CC2D30449E928040011A73_w1024_h576.jpg',
            name: 'ss2'
          }
        ],
      }
      ],
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
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }

})