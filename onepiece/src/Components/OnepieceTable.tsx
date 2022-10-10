import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import Data from '../Data.json'
import { Columns } from './Columns'

// type Colx = {
//   id?: number
//   name?: string
//   title?: string
//   bounty?: number
//   attack?: string
//   bestattack?: string
// }

// type Props = {
//   Data: Colx[]
// }

function Table() {
  const columns: any = useMemo(() => Columns, [])

  const data: any = useMemo(() => Data, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope='col'>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
