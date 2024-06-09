import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [description, setDescription] = useState('');
  const [prescription, setPrescription] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleGenerate = () => {
    axios.post('http://localhost:3000/chat', { prompt: description })
      .then(response => setPrescription(response.data.response))
      .catch(error => console.error(error));
  };

  const handleSave = () => {
    axios.post(`http://localhost:3000/description/${id}`, { description, prescription })
      .then(response => {
        console.log(response.data);
        alert('Descripción y prescripción guardadas exitosamente.');
      })
      .catch(error => console.error(error));
  };

  const handleQuestion = () => {
    axios.post('http://localhost:3000/chat/context', { message: question })
      .then(response => setResponse(response.data.response))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Edad: {user.age}</p>
      <p>Dirección: {user.address}</p>
      <p>Sexo: {user.sexo}</p>
      <p>Dirección: {user.date}</p>

      <h2>Descripción y Prescripción</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe una descripción..."
      />
      <button onClick={handleGenerate}>Generar Ayuda</button>
      <textarea
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
        placeholder="Prescripción generada..."
      />
      <button onClick={handleSave}>Guardar</button>

      <h2>Pregunta Contextualizada</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Haz una pregunta..."
      />
      <button onClick={handleQuestion}>Obtener Respuesta</button>
      <p>Respuesta: {response}</p>
    </div>
  );
};

export default UserDetails;
