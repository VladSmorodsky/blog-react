import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Fragment} from "react";

export const Table = ({columns, data, templateClass}) => {
    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            {table.getHeaderGroups().map(headerGroup => (
                <div key={headerGroup.id} className={`${templateClass} text-gray-700 uppercase bg-gray-200`}>
                    {headerGroup.headers.map(header => (
                        <div key={header.id} className={'px-1 py-2 truncate'}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                        </div>
                    ))}
                </div>
            ))}
            {table.getRowModel().rows.map(row => (
                <div key={row.id} className={`${templateClass} px-1 py-2 hover:bg-gray-100`}>
                    {row.getVisibleCells().map(cell => (
                        <Fragment key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Fragment>
                    ))}
                </div>
            ))}
        </>
    );
}