export const inc = () => ({type: 'INC'})
export const dec = () => ({type: 'DEC'})
// export const rnd = (payload) => ({type: 'RND', payload})

// Только Reducer обязан быть чистой функцией на actionCreator это ограничение не накладывается
export const rnd = (payload) => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random()* 10)
    }
}