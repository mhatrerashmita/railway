import React, { useState } from 'react';
import axios from 'axios';

const TrainBetweenStations = () => {
    const [fromStation, setFromStation] = useState('');
    const [toStation, setToStation] = useState('');
    const [dateOfJourney, setDateOfJourney] = useState('');
    const [trainData, setTrainData] = useState([]);

    const getTrainsBetweenStations = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'GET',
                url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
                params: {
                    fromStationCode: fromStation,
                    toStationCode: toStation,
                    dateOfJourney: dateOfJourney, // Use the selected date
                },
                headers: {
                    //'X-RapidAPI-Key': '6d43ec0449msh752c70590b1ca59p1d4e3djsn3c3ea3163360',
                    // 'X-RapidAPI-Key': '281db98374msh928e05af80f6f36p14b49ejsn3e407ddb06b9'
                    'X-RapidAPI-Key': '4738d27f30mshdb8e44fc3406e91p13bdc0jsnc0aeb47798ae',
                    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
                },
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setTrainData(response?.data?.data);
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{width:"240px"}}>
            <h3>Trainbtwstation</h3>
            <form onSubmit={getTrainsBetweenStations}>
                <label>From Station Code:</label>
                <input type="text" onChange={(e) => setFromStation(e.target.value)} />

                <label>To Station Code:</label>
                <input type="text" onChange={(e) => setToStation(e.target.value)} />

                <label>Date of Journey:</label>
                <input type="date" onChange={(e) => setDateOfJourney(e.target.value)} />

                <button type="submit" style={{backgroundColor:"purple"}}>Get Trains Between Stations</button>
            </form>
            <div className="card" style={{width:"250px",alignItems:"center"}}>
                {trainData &&
                    trainData?.map((train, i) => (
                        <div key={i} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                            <div key={i} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                                <h5>Train Number: {train?.train_number}</h5>
                                <h5>Train Name: {train?.train_name}</h5>
                                <h5>From Station: {train?.from_station_name}</h5>
                                <h5>To Station: {train?.to_station_name}</h5>
                                <h5>Departure Time: {train?.from_std}</h5>
                                <h5>Arrival Time: {train?.to_std}</h5>
                                <h5>Duration: {train?.duration}</h5>
                                <h5>Distance: {train?.distance} km</h5>
                                <h5>Class Types: {train?.class_type.join(', ')}</h5>
                                <h5>Run Days: {train?.run_days.join(', ')}</h5>
                                {/* Add more details as needed */}
                            </div>

                            {/* Add more details as needed */}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TrainBetweenStations;
