"use client"

import { useState, useEffect } from 'react';

export default function beer() {

    const [data, setData] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://random-data-api.com/api/v2/beers?size=20");
            const beerDetails = await response.json();
            setData(beerDetails);
        };
        fetchData();
    }, []);

    const handleBeerChange = async (event) => {
        const selectedBeerName = event.target.value;
        const selectedBeerDetails = data.find((beer) => beer.name === selectedBeerName);
    
        if (selectedBeerDetails) {
          const response = await fetch(`https://random-data-api.com/api/v2/beers?size=20${selectedBeerDetails.id}`);
          const beerDetails = await response.json();
    
          setSelectedBeer({ ...selectedBeerDetails, ...beerDetails });
        } else {
          setSelectedBeer(null);
        }
    };

    
    return (
        <div>
            <div className="beer-container" >
                <p className='text'>
                    Here's an API to fetch 20 beers:
                    <a href={"https://random-data-api.com/api/v2/beers?size=20"}>https://random-data-api.com/api/v2/beers?size=20</a>
                </p>
                <p>Choose your favorite one to see its details.</p>
                <select onChange={handleBeerChange}>
                    <option value="">Select a beer</option>
                    {Array.isArray(data) &&
                        data.map((beer) => (
                            <option key={beer.id} value={beer.name}>
                                {beer.name}
                            </option>
                        ))}
                </select>
                {selectedBeer && (
                    <div>
                        <table className="beer-table">
                            <tbody>
                                <tr className="key-table">
                                    {Object.keys(selectedBeer).map((key) => (
                                        key !== 'message' && (
                                            <td key={key}>{key}</td>
                                        )
                                    ))}
                                </tr>
                                <tr>
                                    {Object.values(selectedBeer).map((value, index) => ( index !== Object.keys(selectedBeer).indexOf('message') && (
                                        <td key={value}>{value}</td>
                                    )
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}