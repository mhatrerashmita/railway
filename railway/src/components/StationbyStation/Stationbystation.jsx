// import React, { useState } from 'react';
// import axios from 'axios';

// const Stationbystation = () => {
//     const [station, setStation] = useState('');
//     const [TrainData, setTrainData] = useState([]);

//     const getTrains = async (e) => {
//         e.preventDefault();
//         try {
//             const options = {
//                 method: 'GET',
//                 url: 'https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation',
//                 params: {
//                     stationCode: station,
//                 },
//                 headers: {
//                     'X-RapidAPI-Key': '914a280eb9msh214f247ae018c11p1bd09bjsn6c12727f89ea',
//                     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
//                 },
//             };

//             try {
                
//                 const response = await axios(options);
//                 console.log(response.data);
//                 setTrainData(response?.data?.data?.passing);
//             } catch (error) {
//                 console.error(error);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={getTrains}>
//                 <input type="text" onChange={(e) => setStation(e.target.value)} />
//                 <button type="submit">Get Trains</button>
//             </form>
//             <div className="card">


//                 {TrainData &&
//                     TrainData?.map((train, i) => (
//                         <div key={i}>
//                             <h5>{train?.arrivalTime}</h5>
//                             <h5>{train?.departureTime}</h5>
//                             <h5>{train?.trainName}</h5>
//                             <h5>{train?.trainNo}</h5>
//                             <div>
//                                 {train?.classes &&
//                                     train?.classes?.map((classItem, j) => (
//                                         <h5 key={j}>{classItem}</h5>
//                                     ))}
//                             </div>
//                         </div>  
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default Stationbystation;
import React, { useState } from 'react';
import axios from 'axios';
import "./Stationby.css"

const Stationbystation = () => {
    const [station, setStation] = useState('');
    const [TrainData, setTrainData] = useState([]);

    const getTrains = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'GET',
                url: 'https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation',
                params: {
                    stationCode: station,
                },
                headers: {
                    //'X-RapidAPI-Key': 'e962c9109emshe5a32014f729af9p164227jsn477086696511',
                    // 'X-RapidAPI-Key': '281db98374msh928e05af80f6f36p14b49ejsn3e407ddb06b9'
                    'X-RapidAPI-Key': '4738d27f30mshdb8e44fc3406e91p13bdc0jsnc0aeb47798ae',
                    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
                },
            };

            try {
                const response = await axios(options);
                console.log(response.data);
                setTrainData(response?.data?.data?.passing);
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h3>Train Name </h3>
            <form onSubmit={getTrains}>
                <input type="text" onChange={(e) => setStation(e.target.value)} />
                <button type="submit" style={{backgroundColor:"purple"}}>Get Trains</button>
            </form>
            
            <div className="card" >
                
                {TrainData &&
                    TrainData?.map((train, i) => (
                        <div key={i} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                            <h5>Arrival Time: {train?.arrivalTime}</h5>
                            <h5>Departure Time: {train?.departureTime}</h5>
                            <h5>Train Name: {train?.trainName}</h5>
                            <h5>Train No: {train?.trainNo}</h5>
                            <div>
                                <h5>Classes:</h5>
                                {train?.classes &&
                                    train?.classes?.map((classItem, j) => (
                                        <span key={j} style={{ marginRight: '5px' }}>{classItem}</span>
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Stationbystation;

