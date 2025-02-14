'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import { TfiPlus } from 'react-icons/tfi';

export type Attachments = {
  id: string;
  type: string;
  modified: string;
  name: string;
};

const sampleData: Attachments[] = [
  {
    id: '1',
    type: 'Monitoring Report',
    modified: '14.02.25',
    name: 'Lewis Hamilton',
  },
  {
    id: '2',
    type: 'Monitoring Report',
    modified: '18.02.25',
    name: 'Max Verstappen',
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
    id: 'modified',
    accessorFn: (row) => row.modified,
    header: 'Modified',
  },
];

const EventsAttachments = () => {
  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between'>
        <h2 className='font-medium text-xl'>Attachments</h2>
        <span className='flex items-center gap-1 opacity-70'>
          <TfiPlus />
          <span className='text-xs'>Add</span>
        </span>
      </div>
      <div className='rounded-md border mt-3'>
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
                <TableCell>{row.modified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EventsAttachments;
