import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from './footer.scss';

const Footer = () =>
        <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
            <Link to="/impressum">Impressum</Link>
        </footer>;

export default Footer;
