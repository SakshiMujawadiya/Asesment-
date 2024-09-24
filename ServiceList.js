import React from 'react';
import Service from './Service';

const ServiceList = ({ services, onDelete, onUpdate }) => {
  return (
    <ul>
      {services.map((service) => (
        <Service key={service.id} service={service} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
};

export default ServiceList;