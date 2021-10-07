import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useSortBy, useGlobalFilter, useRowSelect } from 'react-table'
import { Table } from 'reactstrap';
import SearchComponent from '../SearchComponent'
import Checkbox from './Checkbox'

const TableRender = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const body = await response.json();
      const contacts = body.results;
      console.log(contacts);
      setData(contacts);
    };
    doFetch();
  }, []);

    const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'name.title',
      },
      {
        Header: 'First Name',
        accessor: 'name.first',
      },
      {
        Header: 'Last Name',
        accessor: 'name.last',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'City',
        accessor: 'location.city',
      },
    ],
    []
  );
    

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
      selectedFlatRows
    } = useTable({ columns, data }, useGlobalFilter, useSortBy, useRowSelect, hooks => {
      hooks.visibleColumns.push(colums => {
        return [{
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()}/>
          ) ,
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()}/>
          )
        },
        ...colums
        ]
    })
  })
  
  const {globalFilter} = state
    
  return (
    <>
      <SearchComponent value={globalFilter} onChange={(e) => setGlobalFilter(e.currentTarget.value)}>
        Search for table:
      </SearchComponent>
      
   <Table bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
              <span>
                    {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ' 🔽🔼'}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
        </tbody>
      </Table>

      {/* для наглядности чекбокса */}
      <pre>
          <code>
            {JSON.stringify(
              {
              selectedFlatRows: selectedFlatRows.map(row => row.original)
              },
              null,
              2
            )}
          </code>
        </pre>
      </>
 )
}

export default TableRender