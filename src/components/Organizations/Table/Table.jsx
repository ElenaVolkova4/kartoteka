import React from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { organizations } from "../list_of_organizations"; //нужно, если слова приходят не с сервераа из файла
// import Loader from "./Loader";
// import ServerError from "./ServerError";
// import { observer, inject } from 'mobx-react';

const Table = () => {
  // inject(['wordsStore'])(
  //   observer(({ wordsStore }) => {
  //     if (wordsStore.serverError) return <ServerError />;
  //     if (wordsStore.isLoading || !wordsStore.words.length) return <Loader />;

  // console.log(wordsStore.words);

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
