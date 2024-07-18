import { RowData } from '../types/RowData';

interface MonthGroupProps {
  months?: string[];
  monthYear: string;
  rows?: RowData[];
}

const MonthGroup: React.FC<MonthGroupProps> = ({ months = [], monthYear, rows = [] }) => {
  const totalPrevisaoValor = rows.reduce((sum, row) => sum + row.previsaoValor, 0);
  const totalPrevisaoRealizado = rows.reduce((sum, row) => sum + row.previsaoRealizado, 0);

  return (
    <div className="month-group">
      <div className="month-year">{monthYear}</div>
      <div className="totals">
        <span className="total-previsao-valor">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrevisaoValor)}
        </span>
        <span className="total-previsao-realizado">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrevisaoRealizado)}
        </span>
      </div>
      <div className="rows">
        {rows.map(row => (
          <div className="row" key={row.id}>
            <span className="previsao-valor">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.previsaoValor)}
            </span>
            <span className="previsao-realizado">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.previsaoRealizado)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthGroup;