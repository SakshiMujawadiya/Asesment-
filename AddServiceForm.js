import React, { useState } from 'react';

const AddServiceForm = ({ onAdd }) => {
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newService.name && newService.description && newService.price) {
      onAdd(newService);
      setNewService({
        name: '',
        description: '',
        price: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={newService.name} onChange={(event) => setNewService({ ...newService, name: event.target.value })} />
      </label>
      <label>
        Description:
        <input type="text" value={newService.description} onChange={(event) => setNewService({ ...newService, description: event.target.value })} />
      </label>
      <label>
        Price:
        <input type="number" value={newService.price} onChange={(event) => setNewService({ ...newService, price: event.target.value })} />
      </label>
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;