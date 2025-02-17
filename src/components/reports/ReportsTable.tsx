'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

export type Attachments = {
  id: string;
  type: string;
  modified: string;
  name: string;
  status: string;
  project: string;
};

const sampleData: Attachments[] = [
  {
    id: '1',
    type: 'Monitoring Report',
    modified: '14.02.25',
    name: 'Lewis Hamilton',
    status: 'Draft',
    project: 'Project A',
  },
  {
    id: '2',
    type: 'Monitoring Report',
    modified: '18.02.25',
    name: 'Max Verstappen',
    status: 'Approved',
    project: 'Project B',
  },
];

export const columns: ColumnDef<Attachments>[] = [
  {
    id: 'name',
    accessorFn: (row) => row.name,
    header: 'Name',
  },
  {
    id: 'type',
    accessorFn: (row) => row.type,
    header: 'Type',
  },
  {
    id: 'status',
    accessorFn: (row) => row.status,
    header: 'Status',
  },
  {
    id: 'project',
    accessorFn: (row) => row.project,
    header: 'Project',
  },
  {
    id: 'modified',
    accessorFn: (row) => row.modified,
    header: 'Modified',
  },
];

const ReportsTable = () => {
  return (
    <div className='p-4 w-full'>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id}>{typeof column.header === 'function' ? column.header({} as any) : column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.modified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReportsTable;
