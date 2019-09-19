import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from "redux";
import Counter from "./counter";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

/*
bindActionCreators позволяет обернуть сразу несколько функций
Вместо первого аргумента, можем передать объект, ключи этого объекта - названия функции 
Функции { inc, dec, rnd } которые мы получили из bindActionCreators, а значит функции автоматически dispath
нужные действия в store. Когда вызываем функцию inc в store попадает событие inc, reducer обновляет внутренний
state в store и компонент получает нужное значение
 */
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// Вызовем функцию каждый раз, когда store обновляется
const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />,
    document.getElementById("root")
  );
};
// store.subscribe позволяет получать нотификации если store изменился как watch в vue
// В первый раз отрисуем вручную
update()
store.subscribe(update);
