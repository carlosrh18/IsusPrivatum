import React, { Component } from 'react';
import { FaPhone, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
class ContactPage extends Component {
    render() {
        return (
            <div className='contact-page'>
                <h1>Contacto</h1>
                <div className='contact-page__email'>
                    <MdEmail />
                    <p>PrivatumA@gmail.com</p>
                </div>
                <div className='contact-page__phone'>
                    <FaPhone />
                    <p>314 188 7916</p>
                </div>
                <div className='contact-page__address'>
                    <FaMapMarker />
                    <p>Manzanillo,Colima,México</p>
                </div>                
            </div>
        );
    }
}

export default ContactPage;