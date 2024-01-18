import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    // Définir les options de la requête POST
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Spécifier le type de contenu JSON
        // Autres en-têtes si nécessaire
      },
      // Le corps de la requête, ici vous pouvez mettre les données que vous souhaitez envoyer
      body: JSON.stringify({
        // Vos données à envoyer
      }),
    };

    fetch('/users', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);


  const handleDelete = (userId) => {
    fetch(`http://127.0.0.1:8000/users/${userId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) =>
        console.error("Erreur", error)
      );
  };

  return (
    <div className=''>
      <h1 className=''><strong>All users</strong></h1>
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`} className="">
                  {user.id}{' '}
                </Link>
              </td>
              <td>{user.name}</td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.tel}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Supprimer
                </button>
              </td>
            </tr>
           ))}
         </tbody>
      </table>
    </div>
  );
          };

export default User;