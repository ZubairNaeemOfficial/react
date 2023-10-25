import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import itemService from './services/services';
import ItemList from './home';

const ItemForm = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const item = await itemService.getItemById(id);
          setFormData(item);
          setIsUpdateMode(true);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdateMode) {
        await itemService.updateItem(id, formData);
      } else {
        await itemService.createItem(formData);
      }
      // Redirect to the list page after successful update or creation
      navigate('/');
    } catch (error) {
      setError('Error updating item. Please try again.'); // Set error message if update fails
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          password:
          <input
            type="text"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </label>
      </div>
      {id && <div>ID: {id}</div>}
      {isUpdateMode ? ( 
        <button type="submit">Update</button>
      ) : (
        <button type="submit">Add</button>
      )}
      {error && <div>{error}</div>} 
    </form>
    <ItemList/>
    </>
  );
};

export default ItemForm;
