import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from "redux";
import { Provider } from 'react-redux'
import App from './components/app'
import Counter from "./components/counter";
import reducer from "./reducer";


// Компонент Provider из react-redux внутри себя реализует подписку на изменение store, и делает так чтобы наше значение обновлялось

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,
  document.getElementById("root")
);

/*
bindActionCreators позволяет обернуть сразу несколько функций
Вместо первого аргумента, можем передать объект, ключи этого объекта - названия функции 
Функции { inc, dec, rnd } которые мы получили из bindActionCreators, а значит функции автоматически dispath
нужные действия в store. Когда вызываем функцию inc в store попадает событие inc, reducer обновляет внутренний
state в store и компонент получает нужное значение
 */
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// Вызовем функцию каждый раз, когда store обновляется
// const update = () => {

// };
// store.subscribe позволяет получать нотификации если store изменился как watch в vue
// В первый раз отрисуем вручную
// update()
// store.subscribe(update);
