import React, { useState, useRef } from 'react'

export default function General() {
    const [Input1, setInput1] = useState("");
    const [Output1, setOutput1] = useState("");
    const outputtxt=useRef(null);

    const convertArrayToString = (array) => {
        return array.join('\n'); // Join array elements with line breaks
      };
    const handleTextAreaChange = (event) => {
        setInput1(event.target.value);
      };


      function createCountryData(countryName, statesArray) {
        const states = statesArray
          .filter(state => state.includes(countryName))
          .map(state => state.split(', ')[0]); // Extract state name
      
        return {
          countryname: countryName,
          states: states
        };
      }
    
    function handleclick() {
        const linesArray = Input1.split('\n');
      

      const locations = [];
      const countries = [];
      
      linesArray.forEach(item => {
        const [location, country] = item.split(', ');
        locations.push(location);
        countries.push(country);
      });

      let allcountries=[...new Set(countries)]
      alert(allcountries.length)

      const countryDataArray = allcountries.map(country => createCountryData(country, linesArray));

      console.log(JSON.stringify(countryDataArray, null, 2));


let result=  allcountries.join('\n');
      setOutput1(result);


    }
    return (

        <div>
            <textarea
                value={Input1}
                onChange={handleTextAreaChange}
                rows={5} // Adjust as needed

            />

            <h1>Result</h1>
            <textarea
                value={Output1}
                onChange={handleTextAreaChange}
                rows={5} // Adjust as needed

            />
            
            <button onClick={handleclick}>Generate</button>
        </div>
    )
}
