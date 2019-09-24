import React from "react";
import { bindActionCreators } from 'redux'
// Что бы в counter попали нужные значения из store 
//  Connect это компонент высшего порядка, функция которая создает новый компонент
import { connect } from 'react-redux'
import * as actions from '../actions'

// При клике на кнопкку INC вызовим функцию inc, функция inc вызовет dispatch и передаст в store новый action 
// Функция reducer получит действие и обновит значение в store, благодаря mapStateToProps получи новое состояние
const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
            onClick={dec}
            className="btn btn-primary btn-large">
        DEC
      </button>
      <button
            onClick={inc}
            className="btn btn-primary btn-large">
        INC
      </button>
      <button
            onClick={rnd}
            className="btn btn-primary btn-large">
        RND
      </button>
    </div>
  );
};
// Функция получает текущий state из Redux store, ее задача вернуть те свойства props которые получит в результате counter
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// Берет все actions creator, которые мы импортировали под теми же именами которые мы импортировали
// actionCreator связываются с функцикй dispatch и результирующие свойства присваиваются объекту


// const mapDispatchToProps = (dispatch) => {
//   const {inc,dec,rnd} = bindActionCreators(actions, dispatch)
//   return {
//     inc,
//     dec,
//     rnd
//   }
// }


// Что бы counter умел передавать в store новые действия, новый actions
// const mapDispatchToProps = (dispatch) => {
//    return {
//       inc: () => dispatch(inc()),
//       dec: () => dispatch(dec()),
//       rnd: () => {
//         const RandomValue = Math.floor(Math.random() * 10)
//         dispatch(rnd(RandomValue))
//       }
//    }
// }



// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// Можно сократить код передав вместо mapDispatchToProps объект
export default connect(mapStateToProps, actions)(Counter)
// Мы соединили наш компонент с Redux store благодаря функции connect (функция высшего порядка) 
// Функция создает новый компонент обертку которая отвечает за то, что бы проинтегрировать наш компонент с Redux store
// Для того что бы наш компонент работал, ему нужно знать какие именно значения получить из store и как обработать функцию dispatch
// connect(mapStateToProps, mapDispatchToProps)(Counter)
