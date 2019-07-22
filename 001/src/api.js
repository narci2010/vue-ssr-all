export default function fetchItem(id) {
  return new Promise(function(resolve, reject) {
    //     let items = []
    //     for (let i = 0; i < 10; i++) {
    //       items.push(i)
    //     }
    let item = {
      title: 'Welcome to Item.'
    }
    resolve(item) // Promise 抛出状态值
  })
}
