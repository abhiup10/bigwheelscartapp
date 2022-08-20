import React from 'react';
import styles from './footer.module.scss';
const Footer = () => {
    return ( 
        <footer className={`${styles.footer}  mt-5 p-3 `}>
            <div className='copyright'> 2022 &copy; abhiup10</div>
             
        </footer>
     );
}
 
export default Footer;