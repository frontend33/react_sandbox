***Redux***
Для работы нам понадобится сам Redux
react-redux библиотека которая упрощает интеграцию между React и Redux

***Reducer***
1) Reducer это функция которая получает два значения. Первое значение текущее состояние, второе состояние это action действие которое нужно совершить
```
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    // Если функция не знает тип дейстия вернуть state без изменений
    default: 
      return state
  }
}
```
2) Если тип action неизвестен нужно вернуть state без изменений
 Можно проверить тип и выполнить какое либо действие, если мы получили action действие которого мы не знаем мы не должны трогать state который получили 
3) Если state undefined, то мы должны вернуть первоночальное значение (initial) state

***Redux Store***
Store координирует работу с данными в Redux приложении.
```
const store = createStore(reducer)
// Получать нотификации об изменениях 
store.subscribe(() => /* какая то функция */)
// Обработать новый action:
store.dispatch(action)
```

Для того что бы получить текущий state вызываем store.getState()
Для того что бы обработать какое нибудь действие вызываем store.dispatch передаем туда действие 
И можем подписаться на обновления store используя функцию store.subscribe()


***Чистая функция pure function***
Функция Reducer эта чистая функция

1. Возвращаемое значенике зависит только от аргументов
(a, b) => a > b ? a : b  //чистая функция, что бы вычислить значения результат который возвращаем, используем только аргументы a и b 

(a) => Math.random() * a // не чистая функция, 1 условие нарушено для вычисления результата используется не только аргумент

2. У функции нет побочных эффектов

Любое изменение внешнего состояния функции не является чистой функции (запись значения в какую либо переменную, обновления в DOM дерево, запись в кэш).
Функция может изменять только свое локальное состояние
Не чистая функция

```
const render = () => {
  document
    .getElementById('root')
    .innerHTML = 'hi'
}
```
## Чистая функция не зависит от внешних ресурсов
Удобно тем что если нашли проблемы в логике чистой функции, поиск проблемы ограничен исключетельно самой функцией. Ведь она не зависит ни от чего, кроме аргументов - отказ от побочных эффектов, позволяет вызывать функцию сколько угодно раз функция вернет одно и тоже значение

Если Reducer чистая функция он зависит исключительно от State и action которое он получил

***UI для Redux***
В качестве UI может использоваться любая библиотека или фреймворк
store.dispatch() используется для обновления состояния
store.subscribe() используется для обновления UI

***Действия с параметрами***
Кроме типа, любое действие (action) может содержать дополнительную информацию:
```
store.dispath({
  type: `USER_LOGGED_IN`,
  name: 'test',
  role: 'admin
})
```
Часто дополнительные параметры передаютя в поле payload

***Action Creator***

Action Creator - функция которая создает объекты action (Упрощает код)

```
const userLoggedIn = (name, role) => {
  return { type: 'USER_LOGGED_IN',name,role}
}

store.dispatch(userLoggedIn('Frontend33, 'admin'))
```

***Action Creator***

Структура проекта
Есть несколько подходов к структуре Redux проектов

Один из подходов - вынести reducer функции и action creator функции в отдельные файлы или папки

***bindActionCreators()***
bindActionCreators() - связывает функцию action creator с функцией dispatch()
const { add, remove } = bindActionCreators(actions)
Созданные таким способом функции делают сразу два действия -создание действия (action и отправка в dispatch)

***React и Redux***
React должен знать когда нужно обновлять компоненты (store.subscribe сообщает о том что state обновился)
React компоненты должны быть как можно меньше связаны с Redux

***react-redux и функция connect ()***
react-redux упрощает инетнрацию react + redux 
Provider делает store доступным всему дереву компонентов (через контекст)

```
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,
  document.getElementById("root")
);

```

connect() - компонент высшего порядка, который передает значения из store в компонент 
```
connect mapStateToProps = (state) => {
  return { name: state.name, age: state.age }
}

export default connect(mapStateToProps)(MyComponent)

```

***mapDispatchToProps***

mapDispatchToProps второй аргумент для функции connect()

```
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({type: 'INC'})
  }
}
```
Созданные функции будут переданы в компонент. Таким способом компонент может обновить состояние в store

***mapDispatchToProps как объект***
Action Creator не обязательно должен быть чистой функцией
Если второй аргумент connect() это объект connect(mapStateToProps, actions)(MyComponent)
То результат будет таким же как для кода с функцией
```
connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(ations,dispatch)(MyComponent)
)
```