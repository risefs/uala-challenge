import React from "react";

interface IData {
  imagen: String;
  nombre: String;
  autor: String;
  disponibilidad: Boolean;
  popularidad: Number;
}
interface ITableData extends Array<IData> {}

interface IColumnData {
  id: Number;
  title: String;
}
interface IColumns extends Array<IColumnData> {}

interface ITable {
  data: ITableData;
  columns: IColumns;
  handleAvailable: Function;
}

const Table: React.FC<ITable> = ({ data, columns, handleAvailable }) => {
  return (
    <>
      <table>
        <caption>Bienvenido a la biblioteca Ualá</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record: any) => (
            <tr>
              <td>
                <img width={100} alt={record.nombre} src={record.imagen} />
              </td>
              <td>{record.nombre}</td>
              <td>{record.autor}</td>
              <td>
                <select
                  name="select"
                  value={record.disponibilidad ? "disponible" : "no_disponible"}
                  onChange={() => handleAvailable(record)}
                >
                  <option value="disponible">Disponible</option>
                  <option value="no_disponible">No Disponible</option>
                </select>
              </td>
              <td>{record.popularidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
