// const update = () => {
//     ReactDOM.render(
//       <Counter
//         counter={store.getState()}
//         inc={inc}
//         dec={dec}
//         rnd={() => {
//           const value = Math.floor(Math.random() * 10);
//           rnd(value);
//         }}
//       />,
//       document.getElementById("root")
//     );
//   };

import React from 'react'
import Counter from './counter'

const App = () => {
    return <Counter />
}

export default App