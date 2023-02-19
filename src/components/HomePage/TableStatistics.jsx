import "./TableStatistics.css";

const TableStatistics = () => {
  return (
    <table className="table_statistics">
      <thead className="table_statistics_header">
        <tr>
          <th>2020 год</th>
          <th>2019 год</th>
          <th>2018 год</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table_statistics_row">
          <td>123 000 000₽</td>
          <td>90 568 668₽</td>
          <td>200 568 666₽</td>
        </tr>
        <tr className="table_statistics_row">
          <td>123 587 569₽</td>
          <td>123 587 569₽</td>
          <td>123 587 569₽</td>
        </tr>
        <tr className="table_statistics_row">
          <td>258 654 588₽</td>
          <td>258 654 588₽</td>
          <td>258 654 588₽</td>
        </tr>
      </tbody>
    </table>
  );
};
export default TableStatistics;
