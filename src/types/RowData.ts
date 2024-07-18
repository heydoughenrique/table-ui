// RowData.ts

export interface RowData {
  id: string;
  category: string;
  monthYear: string; // or the appropriate type for monthYear
  rows: any[]; 
  previsaoValor: number;
  previsaoRealizado: number;
  setPrevisaoValor: (value: number) => void;
}

// Example data
export const rows: RowData[] = [
  {
    id: '1',
    category: 'Category 1',
    monthYear: '2023-01', // Example monthYear value
    rows: [], // Example rows value, replace with actual data if available
    previsaoValor: 1000,
    previsaoRealizado: 800,
    setPrevisaoValor: (value: number) => {
      // Implement the logic to update previsaoValor
      console.log(`Updated previsaoValor to ${value} for row with id 1`);
    },
  },
  {
    id: '2',
    category: 'Category 2',
    monthYear: '2023-02', // Example monthYear value
    rows: [], // Example rows value, replace with actual data if available
    previsaoValor: 2000,
    previsaoRealizado: 1800,
    setPrevisaoValor: (value: number) => {
      // Implement the logic to update previsaoValor
      console.log(`Updated previsaoValor to ${value} for row with id 2`);
    },
  },
  // Add more rows as needed
];