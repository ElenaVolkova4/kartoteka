import React from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { organizations } from "../../../list_of_organizations";

const Table = () => {
  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {organizations.map((organization, i) => (
          <TableRow
            key={organization.inn}
            icon={organization.icon}
            name={organization.name}
            inn={organization.inn}
            director={organization.director}
            address={organization.address}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
