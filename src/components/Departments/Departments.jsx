import React from 'react';
import './Departments.css';

const Departments = () => {
  const departments = [
    { name: 'AIDS', count: 120 },
    { name: 'ECE', count: 150 },
    { name: 'AI & IoT', count: 110 },
    { name: 'Medical Electronic', count: 110 },
    { name: 'BME', count: 110 },
    { name: 'EEE', count: 100 },
    { name: 'MECH', count: 130 },
    { name: 'EIE', count: 90 },
    { name: 'AIML', count: 110 },
    { name: 'AICS', count: 80 },
    { name: 'CSE', count: 200 },
  ];

  return (
    <div className="departments-container">
      <h2>Departments</h2>
      <table className="departments-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>{dept.name}</td>
              <td>{dept.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
