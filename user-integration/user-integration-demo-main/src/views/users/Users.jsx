/eslint-disable/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardInfo from "./components/CardInfo";
import PrevDescription from "./components/PrevDescription";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const { id } = useParams();
    const naivgate = useNavigate();

    const [form, setForm] = useState({
        description: '',
        prescription: '',
        nearby: '',
        nearbyAnswer: '',
    });

    const [descriptions, setDescriptions] = useState([]);
    const [user, setUser] = useState({});

    const fetchDescription = async () => {
        const response = await fetch('http://localhost:3000/description/' + id);
        const data = await response.json();
        setDescriptions(data);

        return data;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newForm = {
            ...form,
            [name]: value
        }
        setForm(newForm);
    }

    const fetchUserById = async () => {
        const response = await fetch('http://localhost:3000/users/' + id);
        const data = await response.json();
        setUser(data);
        return data;
    }

    const handleGenerateHelp = async () => {
        const prompt = {
            prompt: form.description,
        }
        const response = await fetch('http://localhost:3000/chat/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prompt),
        });
        const data = await response.json();
        const newForm = {
            ...form,
            ["prescription"]: data.response
        }
        setForm(newForm);
        return data;
    }

    const handleSavePrescription = async () => {
        
        const response = await fetch(`http://localhost:3000/description/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const newDescription = await response.json();
        setDescriptions([...descriptions, newDescription]);
        setForm({ description: '', prescription: '' }); // Limpiar formulario después de guardar
    }

    useEffect(() => {
        fetchUserById();
        fetchDescription();
    }, []);

    const handleNearbyPrompt = async () => {
        const message = {
            message: form.nearby,
        }
        const response = await fetch('http://localhost:3000/chat/context', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
        const data = await response.json();
        const newForm = {
            ...form,
            ["nearbyAnswer"]: data.response
        }
        setForm(newForm);        
        return data;
    }

    return (
        <div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <CardInfo user={user} />
            </div>
            <div>
                <PrevDescription descriptions={descriptions} />
            </div>
        </div>
            <div style={{ display: 'flex'}}>
            <div style={{width:'50%'}}>
                <p>Description</p>
                <textarea
                    style={{
                        resize: 'none',
                        width: '100%',
                    }}
                    label="Description"
                    value={form.description}
                    name="description"
                    onChange={handleInputChange}
                    wrap="soft"
                    rows={10}
                    
                />
                <p>Prescription</p>
                <textarea
                style={{
                    resize: 'none',
                    width: '100%',
                }}
                    label="Prescription"
                    value={form.prescription}
                    name="prescription"
                    onChange={handleInputChange}
                    rows={15}
                    wrap="soft"
                />
                <div>
                    <button style={{
                        height: '50px',
                        width: '200px',
                        backgroundColor: '#399C7E',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderRadius: '5px',
                    }}
                        onClick={handleGenerateHelp}
                    >
                        <p>Generar ayuda</p>
                    </button>
                    <button style={{
                        height: '50px',
                        width: '200px',
                        backgroundColor: '#399C7E',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderRadius: '5px',
                        marginTop: '10px',
                        marginLeft: '10px',
                    }}
                        onClick={handleSavePrescription}
                    >
                        <p>Guardar</p>
                    </button>
                </div>
                
            </div>
                <div style={{width:'50%', marginLeft: '30px'}}>
                <p>Nearby RAG prompt</p>
                <textarea
                    style={{
                        resize: 'none',
                        width: '100%',
                    }}
                    label="Description"
                    value={form.nearby}
                    name="nearby"
                    onChange={handleInputChange}
                    wrap="soft"
                    rows={10}  
                />
                <p>Nearbyy RAG answer</p>
                <textarea
                style={{
                    resize: 'none',
                    width: '100%',
                }}
                    label="Prescription"
                    value={form.nearbyAnswer}
                    name="nearbyAnswer"
                    onChange={handleInputChange}
                    rows={15}
                    wrap="soft"
                />
                <button style={{
                        height: '50px',
                        width: '200px',
                        backgroundColor: '#399C7E',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderRadius: '5px',
                    }}
                        onClick={handleNearbyPrompt}
                    >
                        <p>Nearbyy prompt</p>
                    </button>
                </div>
            </div>
            <button style={{
                        height: '50px',
                        width: '200px',
                        backgroundColor: '#c30010',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderRadius: '5px',
                        marginTop: '30px',
                    }}
                        onClick={() => naivgate('/')}
                    >
                        <p>Regresar</p>
                    </button>
        </div>
    );
}

export default Users;