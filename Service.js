import React from 'react';

const Service = ({ service, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [updatedService, setUpdatedService] = useState(service);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(updatedService);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(service.id);
  };

  return (
    <li>
      {
      editing ? (
        <form onSubmit={handleUpdate}>
          <label>
            Name:
            <input type="text" value={updatedService.name} onChange={(event) => setUpdatedService({ ...updatedService, name: event.target.value })} />
          </label>
          <label>
            Description:
            <input type="text" value={updatedService.description} onChange={(event) => setUpdatedService({ ...updatedService, description: event.target.value })} />
          </label>
          <label>
            Price:
            <input type="number" value={updatedService.price} onChange={(event) => setUpdatedService({ ...updatedService, price: event.target.value })} />
          </label>
          <button type="submit">Update</button>
        </form>
      ) : (
        <div>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p>Price: {service.price}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
    