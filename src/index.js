import { createStore, bindActionCreators } from "redux"
import reducer from './reducer'
import * as actions from './actions'

const store = createStore(reducer)
const { dispatch } = store


// bindActionCreators Похожа на нашу функцию
// const bindActionCreator = (creator,dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// bindActionCreators позволяет обернуть сразу несколько функций
// Вместо первого аргумента, можем передать объект, ключи этого объекта - названия функции 
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd
// }, dispatch)

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

// const incDispatch = () => bindActionCreators(inc,dispatch)
// const decDispatch = () => bindActionCreators(dec,dispatch)
// const rndDispatch = (payload) => bindActionCreators(rnd, dispatch)

document
  .getElementById('inc')
  .addEventListener('click', inc)

document
  .getElementById('dec')
  .addEventListener('click', dec)

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = + Math.floor(Math.random()*10)
    rnd(payload)
  })

  // Вызовем функцию каждый раз, когда store обновляется
  const update = () => {
    document
      .getElementById('counter')
      .innerHTML = store.getState()
      console.log(store.getState())
  }
// store.subscribe позволяет получать нотификации если store изменился как watch в vue
  store.subscribe(update)


/*

// store.subscribe позволяет получать нотификации если store изменился как watch в vue
store.subscribe(()=> {
  // После каждого изменения метод будет вызываться и будем печатать текущее изменение в console
  console.log(store.getState())
})
// Попросим store выполнить одно из действий
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
*/
