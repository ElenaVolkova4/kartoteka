import React from "react";
import "./TableHeader.css";

const TableHeader = () => {
  return (
    <thead className="table_header">
      <tr>
        <th>Наименование организации</th>
        <th>ИНН</th>
        <th>Руководитель</th>
        <th>Адрес</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
