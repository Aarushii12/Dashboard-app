import { React, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, LineChart, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, Colorpicker, ColorMapping, Editor } from './pages';

import { useStateContext } from './Contexts/ContextProvider';
import './App.css'
const App = () => {


  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>

      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg min-h-screen">
        {/* Your other content here */}
        
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            style={{ backgroundColor: currentColor, borderRadius: '50%' }}
            onClick={() => setThemeSettings(true)}
            className="fixed right-4 bottom-4 text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings className="text-gray-600" />
          </button>
        </TooltipComponent>

</div>

        {activeMenu ? (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          < Sidebar />

        </div>) :
          <div>
          </div>}


        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '

              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '

          }

        >
          {/* making navbar: */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          {themeSettings && <ThemeSettings />}
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

            <Route path="/line" element={<LineChart />} />
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