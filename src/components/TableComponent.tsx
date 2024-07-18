import React, { useState } from 'react';

import TableRow from './TableRow';

interface Row {
  id: string;
  category: string;
  // other properties
}

interface TableComponentProps {
  rows: Row[];
  months: string[];
  categorizedRows: any;
  expandedRows: Set<string>;
  toggleRow: (id: string) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  rows,
  months,
  categorizedRows,
  expandedRows,
  toggleRow,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="p-2 text-center align-middle column-drag">Drag</th>
          <th className="p-2 text-center align-middle column-expand">Expand</th>
          <th className="p-2 text-center align-middle column-category">Category</th>
          {months.map((month) => (
            <th key={month} className="p-2 text-center align-middle column-month-group" colSpan={2}>
              {month}
            </th>
          ))}
        </tr>
        <tr>
          <th className="p-2 text-center align-middle"></th>
          <th className="p-2 text-center align-middle"></th>
          <th className="p-2 text-center align-middle"></th>
          {months.map((month) => (
            <React.Fragment key={month}>
              <th className="p-2 text-center align-middle">Previsão</th>
              <th className="p-2 text-center align-middle">Realizado</th>
            </React.Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <TableRow
          row={row}
          months={['January', 'February', 'March']}
          category="Category Name"
          isExpanded={false}
          onToggle={() => console.log('Toggle')}
        />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;