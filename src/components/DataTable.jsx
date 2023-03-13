
import React, { useState, useEffect } from 'react';
import { DataTable as DataTablePrime } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const DataTable=()=> {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTablePrime value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTablePrime>
        </div>
    );
}

export {DataTable}
        