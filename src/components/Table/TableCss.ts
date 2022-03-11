import styled from "styled-components";

export const TableContainer = styled.div`
  .t-title{
    color: blue;
    font-family: system-ui;
  }
  caption{
    margin: 10px;
    padding: 10px;
  }
  }
  table {
    position: relative;
    border-collapse: collapse; 

    display: block;
    height: 500px;
    overflow-y: scroll;
    width: 100%;
  }
  .t-books {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  .t-books thead tr {
    background-color: #ff8125;
    color: #ffffff;
    text-align: left;
    position: sticky;
    top: 0;
  }
  
  .t-books th,
  .t-books td {
    padding: 12px 15px;
  }

  .t-books tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .t-books tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .t-books tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  
  .tableContainer  {
    display: flex;
    justify-content:center:
  }
`;
