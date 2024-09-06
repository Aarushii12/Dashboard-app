import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'
const App = () => {

  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>

        <div className="flex relative dark:bg-main-dark-bg"></div>
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        </div>




        <TooltipComponent content="Setting" position='Top'>
          <button
            type="button"
            style={{ backgroundColor: 'white', borderRadius: '50%' }}

            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings className="text-gray-600" />

          </button>

        </TooltipComponent>



        {activeMenu ? (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          Sidebar
        </div>) :
          <div>
            sidebar-wo</div>}


        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '

          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          </div>
        </div>





      </BrowserRouter>


    </div>
  )
}

export default App
