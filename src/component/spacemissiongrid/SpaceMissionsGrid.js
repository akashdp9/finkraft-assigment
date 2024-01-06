import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Pie } from 'react-chartjs-2';

import { ChartWrapper, DashboardWrapper } from './SpaceMissionsGrid.styled';


import { Chart, ArcElement, Legend } from 'chart.js'
Chart.register(ArcElement, Legend);


const SpaceMissionsGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [missionSuccessData, setMissionSuccessData] = useState(null);
  const [columnDefs] = useState([
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'time' },
    { field: 'rocket' },
    { field: 'price' },
    {field: 'successful'}
  ]);
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then(result => result.json())
      .then(data => {
        setRowData(data);
        updateMissionSuccessData(data);
      })

      .catch(err => console.error(err));
  }, []);

  const updateMissionSuccessData = (data) => {
    let successCount = 0;
    let failureCount = 0;

    data.forEach(item => {
      if (item.successful) {
        successCount++;
      } else {
        failureCount++;
      }
    });

    setMissionSuccessData({
      labels: ['Successful Missions', 'Unsuccessful Missions'],
      datasets: [
        {
          data: [successCount, failureCount],
          backgroundColor: ['#22bb33', '#bb2124'],
          hoverBackgroundColor: ['#a6d96a', '	#d7191c']
        }
      ]
    });

  };

  return (
    <DashboardWrapper>
      <div className="ag-theme-quartz" style={{ height: 400, width: "50%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}>
        </AgGridReact>

      </div>
      <ChartWrapper>
        {missionSuccessData && <Pie data={missionSuccessData} />}

      </ChartWrapper>
    </DashboardWrapper>

  );
};

export default SpaceMissionsGrid;
