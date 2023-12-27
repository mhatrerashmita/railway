import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {format} from "date-fns";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import SearchItem1 from "../../components/searchItem/searchItem1";
import SearchItem2 from "../../components/searchItem/searchItem2";
import SearchItem3 from "../../components/searchItem/searchItem3";
import SearchItem4 from "../../components/searchItem/searchItem4";
import SearchItem5 from "../../components/searchItem/searchItem5";
import SearchItem6 from "../../components/searchItem/searchItem6";
const List = () => {

const location = useLocation();
const [destination, setDestination] = useState(location.state.destination);
const [date, setDate] = useState(location.state.date);
const [openDate, setOpenDate] = useState(false);
const [options, setOptions] = useState(location.state.options);


    return (
        <div><Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="listTitle">Search</h1>
                    <div className="listItem">
                        <label>Destination</label>
                        <input type="text" style={{margin:"0 px"}}
                        placeholder={destination}
                        />
                    </div>
                    <div className="listItem">
                        <label>Check-in Date</label>
                        <span onClick={() => setOpenDate(!openDate) }>{`${format(
                date[0].startDate, "dd/mm/yy")} 
            to ${format(date[0].endDate, "dd/mm/yy")}`}</span>
            {openDate && <DateRange 
            onChange={(item) => setDate([item.selection])}
            minDate = {new Date()}
            ranges={date}
            />
            }
                    </div>
                    <div className="listItem">
                        <label>Options</label>
                        <div className="listOptions">
                        <div className="listOptionItem">
                            <span className="listOptionText">Min price <small>per night</small>
                            </span>
                        <input type="number" className="listOptionInput" />
                        </div>
                        <div className="listOptionItem">
                            <span className="listOptionText">Max price <small>per night</small>
                            </span>
                        <input type="number" className="listOptionInput" />
                        </div>
                        <div className="listOptionItem">
                            <span className="listOptionText">Adult 
                            </span>
                        <input type="number" min={1} className="listOptionInput" placeholder={options.adult}/>
                        </div>
                        <div className="listOptionItem">
                            <span className="listOptionText">Children
                            </span>
                        <input type="number" min={0} className="listOptionInput" placeholder={options.children}/>
                        </div>
                        <div className="listOptionItem">
                            <span className="listOptionText">Room
                            </span>
                         <input type="number" min={1} className="listOptionInput" placeholder={options.room}/>
                        </div>
                     </div>
                    </div>
                     <button>Search</button>
                 </div>
                <div className="listResult">
                    <SearchItem />
                    <SearchItem1 />
                    <SearchItem2 />
                    <SearchItem3 />
                    <SearchItem4 />
                    <SearchItem5 />
                    <SearchItem6 />
                
                </div>

            </div>
        </div>
        </div>
    )
}

export default List;