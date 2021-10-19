import React, { useMemo, useState, useEffect, Fragment } from 'react'
import { useTable, useSortBy, useGlobalFilter, useRowSelect, useFilters, useExpanded} from 'react-table'
import SearchComponent from '../SearchComponent'
import Checkbox from './Checkbox'
// import FilterColumn from './FilterColumn'
import { renderRowSubComponent } from './renderRowSubComponent'
// import {Styles} from './TableStyles'
import styles from './TableRender.module.css'

const TableRender = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const body = await response.json();
      const contacts = body.results;
      setData(contacts);
    };
    doFetch();
  }, []);

    const columns = useMemo(
      () => [
      {
        Header: 'NDID',
        accessor: 'id.name',
      },
      {
        Header: 'Title',
        accessor: 'name.title',
        expandSubRows: true,
      },
      {
        Header: 'First Name',
        accessor: 'name.first',
        },
      
      {
        Header: 'Last Name',
        accessor: 'name.last',
        disableGlobalFilter: true,
      },
      {
        Header: 'Email',
        accessor: 'email',
        disableGlobalFilter: true,
        disableSortBy: true
      },
      {
        Header: 'City',
        accessor: 'location.city',
        disableGlobalFilter: true,
        disableSortBy: true,
        },
      {
        Header: 'State',
        accessor: 'location.state',
        disableGlobalFilter: true,
        disableSortBy: true,
        },
      {
        Header: 'Gender',
        accessor: 'gender',
        disableGlobalFilter: true,
        disableSortBy: true,
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
      selectedFlatRows,
      visibleColumns
    } = useTable({ columns, data }, useGlobalFilter, useFilters, useSortBy, useExpanded, useRowSelect, hooks => {
      hooks.visibleColumns.push(column => {
        return [{
          id: 'selection',
          disableSortBy: true,
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()}/>
          ),
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()}/>
          )
        },
          ...column,
         
        ]
    })
  })
  
  const {globalFilter} = state

  return (
    <>
      <SearchComponent value={globalFilter} onChange={(e) => setGlobalFilter(e.currentTarget.value)} />

      <div bordered hover {...getTableProps()} className={styles.table}>
          <div className={styles.tableHeader}>
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className={styles.rowHeader}>
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps(column.getSortByToggleProps())} className={styles.cellHeader}>
                    {column.render("Header")}
                    <span style={{fontSize: 10}}>
                      {column.isSorted ? column.isSortedDesc ? '▼' : '▲' : column.disableSortBy ? '' : '▲▼'}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div {...getTableBodyProps()} className={styles.tableBody}>
            {rows.map((row) => {
              prepareRow(row);
              return (
              <Fragment key={row.getRowProps().key}>
                <div className={styles.rowBody}>
                  {row.cells.map(cell => {
                    return <div {...cell.getCellProps()} {...row.getToggleRowExpandedProps()} className={styles.cellBody}>{cell.render("Cell")}</div>
                  })}
                </div>
                {row.isExpanded && (
                  <div>
                    <div colSpan={visibleColumns.length}>{renderRowSubComponent(row)}</div>
                  </div>
                )}
              </Fragment>
              );
            })}
            </div>
        </div>

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