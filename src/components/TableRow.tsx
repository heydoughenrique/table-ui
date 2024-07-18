import { CaretDown, CaretUp, DotsSixVertical } from 'phosphor-react';

import MonthGroup from './MonthGroup';
import React from 'react';
import { useDrag } from 'react-dnd';

interface TableRowProps {
  row: any;
  months: string[];
  category: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, months, category, isExpanded, onToggle }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ROW',
    item: { id: row.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      {/* Main table row */}
      <tr
        ref={drag}
        className={`${isExpanded ? 'bg-gray-100' : ''} ${isDragging ? 'opacity-50' : ''}`}
      >
        {/* Drag handle */}
        <td className="p-2 cursor-move text-center align-middle column-drag">
          <DotsSixVertical />
        </td>
        {/* Expand/collapse toggle */}
        <td className="p-2 text-center align-middle column-expand" onClick={onToggle}>
          {isExpanded ? <CaretUp /> : <CaretDown />}
        </td>
        {/* Category */}
        <td className="p-2 text-center align-middle column-category">
          {category}
        </td>
        {/* Months */}
        {months.map((monthYear, index) => (
          <td key={index} className="p-2 text-center align-middle">
            <MonthGroup monthYear={monthYear} rows={row[monthYear]} />
          </td>
        ))}
      </tr>
      {/* Expanded content */}
      {isExpanded && (
        <tr>
          <td colSpan={months.length + 3} className="p-2">
            {/* Render additional content here */}
            Expanded content for {category}
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;