import React from 'react';
import Layout from '../../components/Layout';
import ProductsGrid from './ProductsGrid';
import styles from './index.css';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1 >Big Wheels</h1>
                    <p>your dream car at your doorstep.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;