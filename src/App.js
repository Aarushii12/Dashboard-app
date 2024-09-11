import { React, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, Colorpicker, ColorMapping, Editor } from './pages';

import { useStateContext } from './Contexts/ContextProvider';
import './App.css'
const App = () => {


  const { activeMenu } = useStateContext();

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
          < Sidebar />

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
          making navbar:
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          <Routes>


            <Route path="/" element={(<Ecommerce />)} />
            <Route path="/ecommerce" element={(<Ecommerce />)} />


            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />


=            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<Colorpicker />} />

            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />



          </Routes>


        </div>
      </BrowserRouter>


    </div>
  )
}

export default App