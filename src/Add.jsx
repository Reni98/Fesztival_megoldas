import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';



const MyForm = () => {
  const [formData, setFormData] = useState({
    nev:'',
    szuletesi_datum:'',
    telefonszam:'',
    email:'',
    foglalt_napok_szama:'',
    osszeg:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios segítségével küldjük el a form adatait a szervernek
      await axios.post('http://localhost:5001/fesztivalHozzaad', formData);
      console.log('Form data sent successfully');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
   



    <Container style={{width:"700px", backgroundColor:"#007fff", borderRadius:'15px', marginTop:"20px",height:"680px", marginBottom:"20px"}}>
      <h1 style={{textAlign:"center"}}>Adja hozzá a fesztivál jegy vásárláshoz adatait</h1>
    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Név</Form.Label>
        <Form.Control  type="text"
        name="nev"
        id="nev"
        placeholder="Adja meg a nevét"
        value={formData.nev}
        onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Születési dátum</Form.Label>
        <Form.Control  type="date"
        name="szuletesi_datum"
        id=" szuletesi_datum"
        placeholder="Adja meg a születési dátumát"
        value={formData.szuletesi_datum}
        onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefonszám</Form.Label>
        <Form.Control  
       type="text"
       name="telefonszam"
       id=" telefonszam"
       placeholder='Adja meg a telefonszámát'       
       value={formData.telefonszam}
       onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control  
      type="text"
      name="email"
      id="email"     
      placeholder='Adja meg az e-mail címét'  
      value={formData.email}
      onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Foglalt napok száma</Form.Label>
        <Form.Control  
    type="text"
    name="foglalt_napok_szama"
    id="foglalt_napok_szama"
    placeholder='Adja meg a lefoglalt napok számát'      
    value={formData.foglalt_napok_szama}
    onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Összeg</Form.Label>
        <Form.Control  
     type="text"
     name="osszeg"
     id="osszeg" 
     placeholder='Adja meg az összeget'      
     value={formData.osszeg}
     onChange={handleChange} />
      </Form.Group>
      <button type="submit" value="Send" className='mx-auto d-block' style={{width:"300px", backgroundColor:"#00ccff", borderRadius:"25px"}}>Küld</button>
    </Form>
    </Container>
  );
}

export default MyForm;