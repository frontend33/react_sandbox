// const initialState = 0
// Если значение state === undefined значит, что еще нет состояния и функция reducer должна вернуть первоначальное состояние state = 0
const reducer = (state = 15, action) => {
    switch (action.type) {
      case 'INC':
        return state + 1
      case 'DEC':
        return state - 1
      
      case 'RND':
        // Чистая функция поэтому random number получаем из payload
          return state + action.payload
      // Если функция не знает тип дейстия вернуть state без изменений
      default: 
        return state
    }
  }

  export default reducer