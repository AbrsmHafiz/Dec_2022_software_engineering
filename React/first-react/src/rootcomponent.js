import React from 'react';
import Product from './components/product';
import ProductList from './components/productlist';
import ToDoList from './components/toDoList';
import UserList from './components/userList';
import './components/style.css'
import YoutubeList from './components/youtubeList';




function RootComponent() {
  return ( 
    <div style={{
      backgroundColor: "#7dcfb6", // #7dcfb6
      borderRadius: "5px",
      padding: "5px", 
    }}>

      <h1 className='yellow centre ' >My Root Component</h1> 
      {/* this is called JSX , not html */}
      <ProductList></ProductList>
      <UserList></UserList>
      <ToDoList></ToDoList>
      <YoutubeList></YoutubeList>
     

    </div>


   );
}

export default RootComponent;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
