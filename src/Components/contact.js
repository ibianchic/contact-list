import React from 'react';

const ContactForm = () => {
  return (
    <div className="container">
      <h1>Formulario de Contacto</h1>
      <form id="contactForm">
        <div className="form-group">
          <label htmlFor="fullName">Nombre Completo</label>
          <input type="text" className="form-control" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" className="form-control" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input type="text" className="form-control" id="address" name="address" required />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default ContactForm;