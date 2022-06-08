
import './App.css';
import React, {useEffect, useState} from 'react'


const App = () => {
    const[fake,setFake] = useState([]);
      console.log(fake);

      useEffect(()=> {
        getAPI();
      },[])

  const getAPI =async () => {
    const response = await fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
    const jsonData = await response.json();
    //console.log(jsonData)
      setFake(jsonData.content)
  }

  return (
    <body>
    <div class="header">
      
      <h3>Dashboard</h3>
      <button className='add'>+</button>
    </div>
    <div class='nav' id='navbar'>
       <ul className='nav-bar'>
         <li><a href='#'>Discover</a></li>
         <li><a href='#'>Fact Check</a></li>
         <li><a href='#'>Rumors</a></li>
         <li><a href='#'>Videos</a></li>
         <li><a href='#'>Discussions</a></li>
       </ul>
    </div>
    <div className='contents'>
      {fake.map((values) => {
        return(
        <>
        <div>
          <img src={values.coverImageUrl} className="images"></img>
        <h4>{values.title}</h4>
     </div>
        </>
        )
      })}
    </div>
 </body>
 )
  }
export default App;
