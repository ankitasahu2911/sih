import React, { useState } from 'react';
import './DroneData.css';

const DroneData = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [statistics, setStatistics] = useState(null);

  const states = [
    { name: 'Odisha', districts: ['Khordha', 'Cuttack', 'Ganjam', 'Sundargarh'] },
    // Add more states and districts here
  ];

  const cities = {
    Khordha: ['Bhubaneswar', 'Jatani'],
    Cuttack: ['Cuttack City', 'Choudwar'],
    Ganjam: ['Brahmapur', 'Chatrapur'],
    Sundargarh: ['Rourkela', 'Sundargarh Town'],
    // Add more cities here
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setDistrict('');
    setCity('');
    setStatistics(null);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setCity('');
    setStatistics(null);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setStatistics({
      buildings: 120,
      roads: 50,
      waterBodies: 10,
      // Add more statistics here
    });
  };

  const handleDownload = (format) => {
    const data = {
      state,
      district,
      city,
      statistics,
    };
    const fileName = `${city}_data.${format}`;
    const fileContent = format === 'json'
      ? JSON.stringify(data, null, 2)
      : Object.keys(data).map(key => `${key},${data[key]}`).join('\n');

    const blob = new Blob([fileContent], { type: format === 'json' ? 'application/json' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="drone-data-container">
      <h2>Select Location</h2>
      <div className="filter-group">
        <label htmlFor="state">State:</label>
        <select id="state" value={state} onChange={handleStateChange}>
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s.name} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>

      {state && (
        <div className="filter-group">
          <label htmlFor="district">District:</label>
          <select id="district" value={district} onChange={handleDistrictChange}>
            <option value="">Select District</option>
            {states.find((s) => s.name === state)?.districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      )}

      {district && (
        <div className="filter-group">
          <label htmlFor="city">City/Village:</label>
          <select id="city" value={city} onChange={handleCityChange}>
            <option value="">Select City/Village</option>
            {cities[district]?.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      )}

      {statistics && (
        <div className="statistics">
          <h2>Statistics for {city}</h2>
          <p>Buildings: {statistics.buildings}</p>
          <p>Roads: {statistics.roads}</p>
          <p>Water Bodies: {statistics.waterBodies}</p>
          {/* Add more statistics here */}
          <div className="download-buttons">
            <button onClick={() => handleDownload('csv')}>Download CSV</button>
            <button onClick={() => handleDownload('json')}>Download JSON</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DroneData;
