import React, { useState } from 'react';

import { DndProvider } from 'react-dnd'; // Ensure DndProvider is imported
import { HTML5Backend } from 'react-dnd-html5-backend';
import TableComponent from '../src/components/TableComponent'; // Adjust the import path as necessary

// Example data
const rows = [
  { id: '1', category: 'Category 1', data: 'Data 1' },
  { id: '2', category: 'Category 2', data: 'Data 2' },
  // Add more rows as needed
];

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const categorizedRows = {
  'Category 1': [rows[0]],
  'Category 2': [rows[1]],
  // Add more categorized rows as needed
};

const App: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (rowId: string) => {
    setExpandedRows(prevExpandedRows => {
      const newExpandedRows = new Set(prevExpandedRows);
      if (newExpandedRows.has(rowId)) {
        newExpandedRows.delete(rowId);
      } else {
        newExpandedRows.add(rowId);
      }
      return newExpandedRows;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>hello</h1>
      <div className="App">
        <TableComponent 
          rows={rows} 
          months={months} 
          categorizedRows={categorizedRows} 
          expandedRows={expandedRows} 
          toggleRow={toggleRow} 
        />
      </div>
    </DndProvider>
  );
};

export default App;