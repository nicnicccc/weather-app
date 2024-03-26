import './forecast.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({data}) => {
    const dayInaWeek = new Date().getDay()
    const retDays = days.slice(dayInaWeek, days.length).concat(days.slice(0, dayInaWeek))

   return (
       <>
           <label className={'title'}>Daily</label>
           <Accordion allowZeroExpanded={true}>
               {data.list.splice(0, 7).map((item, index) => (
                   <AccordionItem key={index} className={'itemmm'}>
                       <AccordionItemHeading>
                           <AccordionItemButton className={'buttonn'}>
                               <div className={'daily-item'}>
                                   <img alt={'weather'} className={'icon-small'} src={`weather-icons/${item.weather[0].icon}.png`}/>
                                   <label className={'day'}>{retDays[index]}</label>
                                   <label className={'description'}>{item.weather[0].description}</label>
                                   <label className={'minmax'}>{Math.round(item.main.temp_min)}°C - {Math.round(item.main.temp_max)}°C</label>
                               </div>
                           </AccordionItemButton>
                       </AccordionItemHeading>
                       <AccordionItemPanel>
                           <div className={'daily-details'}>
                               <div className={'daily-details-item'}>
                                   <label>Pressure</label>
                                   <label>{item.main.pressure} hPa</label>
                               </div>
                               <div className={'daily-details-item'}>
                                   <label>Humidity</label>
                                   <label>{item.main.humidity}%</label>
                               </div>
                               <div className={'daily-details-item'}>
                                   <label>Clouds</label>
                                   <label>{item.clouds.all}</label>
                               </div>
                               <div className={'daily-details-item'}>
                                   <label>Wind speed</label>
                                   <label>{item.wind.speed} m/s</label>
                               </div>
                               <div className={'daily-details-item'}>
                                   <label>Feels like</label>
                                   <label>{Math.round(item.main.feels_like)}°C</label>
                               </div>

                           </div>
                       </AccordionItemPanel>
                   </AccordionItem>
               ))}
           </Accordion>
       </>
   )
}

export default Forecast