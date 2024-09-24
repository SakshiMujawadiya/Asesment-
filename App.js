import React, { useState, useEffect } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Service 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Service 2', description: 'Description 2', price: 9.99 },
  ]);

  const handleAdd = (newService) => {
    setServices([...services, { id: services.length + 1, ...newService }]);
  };

  const handleUpdate = (updatedService) => {
    setServices(services.map((service) => (service.id === updatedService.id ? updatedService : service)));
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  useEffect(() => {
    console.log('Services:', services);
  }, [services]);

  return (
    <div>
      <h1>Healthcare Services Manager</h1>
      <AddServiceForm onAdd={handleAdd} />
      <ServiceList services={services} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;