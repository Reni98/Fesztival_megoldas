// React oldal
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


const Tables = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        // Axios segítségével lekérjük az adatokat a szerverről
        axios.get('http://localhost:5001/fesztivalKiir')
            .then(response => {
                console.log(response.data); // Új sor
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching form data:', error);
            });
    }, []);


    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/fesztivaltorol/${id}`)
            .then(response => {
                console.log(response.data); // Sikeres törlés esetén logoljuk
                // Frissítjük az állapotot, hogy az új adatokat jelenítse meg
                setFormData(formData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error deleting fesztival:', error);
            });
    };
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Adatbázis tartalom</h1>
            <Container style={{width:"900px"}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Születési dátum</th>
                        <th>Telefonszám</th>
                        <th>Email</th>
                        <th>Foglalt napok száma</th>
                        <th>Összeg</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map(data => (
                        <tr key={data.id}>
                            <td>{data.nev}</td>
                            <td>{data.szuletesi_datum}</td>
                            <td>{data.telefonszam}</td>
                            <td>{data.email}</td>
                            <td>{data.foglalt_napok_szama}</td>
                            <td>{data.osszeg}</td>
                            <td>
                                <button  className="btn btn-primary" onClick={() => handleDelete(data.id)}>Törlés</button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default Tables;