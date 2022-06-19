//weather card for city....
import React from 'react'
import { useState } from 'react';
import Daily from './timePeriodComponents/Daily'
import Hourly from './timePeriodComponents/Hourly'
import Minutely from './timePeriodComponents/Minutely'
import '../styles/cityWeathercard.css'


function CityWeatherCard(props) {

const [currentTab, setCurrentTab] = useState('1');
const tabs = [
    {
        id: 1,
        tabTitle: 'Week',
        title: 'Title 1',
        content: <Daily data={props.data}/>
    },
    {
        id: 2,
        tabTitle: 'Hourly',
        title: 'Title 2',
        content: <Hourly/>
    },
    {
        id: 3,
        tabTitle: 'Minutely',
        title: 'Title 3',
        content: <Minutely/>
    },
    
];

const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
}

  return (
    <div className='dataContainer'>

 
    <div className='tabs'>
                    {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                    </div>
                )}
            </div> 
  
    </div>
  )
}  

export default CityWeatherCard