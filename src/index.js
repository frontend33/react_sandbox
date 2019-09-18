import { createStore } from "redux"


// const initialState = 0
// Если значение state === undefined значит, что еще нет состояния и функция reducer должна вернуть первоначальное состояние state = 0
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    // Если функция не знает тип дейстия вернуть state без изменений
    default: 
      return state
  }
}
/*
указываем что хотим выполнить действие с типом increment
Когда работаем с redux, actions самый обычный js объект, у него может быть любая структура,
но главное чтобы у этого поля было поля была строка, которая указывает тип действия который мы пытаемся соверщить

let state = reducer(undefined, {})
state = reducer(state, { type: 'INC' })
console.log(state) // 1

state = reducer(state, { type: 'INC' })
console.log(state) // 2
*/ 

const store = createStore(reducer)
// store.subscribe позволяет получать нотификации если store изменился как watch в vue
store.subscribe(()=> {
  // После каждого изменения метод будет вызываться и будем печатать текущее изменение в console
  console.log(store.getState())
})
// Попросим store выполнить одно из действий
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
