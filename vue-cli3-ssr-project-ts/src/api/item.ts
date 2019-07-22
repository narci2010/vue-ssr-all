const items = [
  { title: '天涯歌女', content: 'Lock, Stock and Two Smoking Barrels' },
  { title: '笑傲江湖', content: 'The Transporter' },
  { title: '三少爷的剑', content: 'Meg' }
]

const items2 = [
  { title: '天涯歌女2', content: 'Lock, Stock and Two Smoking Barrels' },
  { title: '笑傲江湖2', content: 'The Transporter' },
  { title: '三少爷的剑2', content: 'Meg' }
]
export default {
  fetchItems(itemId: string) {
    console.log('store.items:' + itemId)
    let tmp: any = []
    if (itemId === '1') {
      tmp = items
    } else {
      tmp = items2
    }
    return new Promise((resolve, reject) => {
      // 3秒待ってから返す
      setTimeout(() => {
        resolve(tmp)
      }, 1000)
    })
  }
}
