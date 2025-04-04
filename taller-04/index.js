const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = JSON.parse(fs.readFileSync('data/datos.json', 'utf-8'));

// PUNTO 1
app.get('/users/hobby', (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) {
        return res.status(400).json({ error: "Se requiere el parámetro 'hobby'" });
    }

    const usersWithHobby = users.filter(user => 
        user.hobbies.map(h => h.toLowerCase()).includes(hobby.toLowerCase())
    );

    res.json(usersWithHobby);
});

// PUNTO 2
app.get('/users/exists', (req, res) => {
    const codigo = req.query.codigo;
    if (!codigo) {
        return res.status(400).json({ error: "Se requiere el parámetro 'codigo'" });
    }

    const exists = users.some(user => user.codigo === codigo);
    res.json({ exists });
});

// PUNTO 3
app.get('/users/hobby/count', (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) {
        return res.status(400).json({ error: "Se requiere el parámetro 'hobby'" });
    }

    const count = users.filter(user => 
        user.hobbies.map(h => h.toLowerCase()).includes(hobby.toLowerCase())
    ).length;

    res.json({ count });
});

// PUNTO 4
app.get('/users/is-free', (req, res) => {
    const freeUsers = users.filter(user => user.hobbies.length < 3);
    res.json(freeUsers);
});

// PUNTO 5
app.post('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body;
    if (!codigo || !hobby) {
        return res.status(400).json({ error: "Se requieren los parámetros 'codigo' y 'hobby'" });
    }

    const userIndex = users.findIndex(user => user.codigo === codigo);
    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (users[userIndex].hobbies.length >= 3) {
        return res.status(400).json({ error: "El usuario ya tiene 3 hobbies, no se puede agregar más" });
    }

    if (users[userIndex].hobbies.includes(hobby)) {
        return res.status(400).json({ error: "El usuario ya tiene este hobby" });
    }

    users[userIndex].hobbies.push(hobby);
    
    fs.writeFileSync('24-taller-04-datos.json', JSON.stringify(users, null, 2));
    
    res.json(users[userIndex]);
});

// PUNTO 6
app.post('/users', (req, res) => {
    const { codigo, nombre, apellido, hobbies } = req.body;
    
    if (!codigo || !nombre || !apellido || !hobbies) {
        return res.status(400).json({ error: "Todos los campos son requeridos: codigo, nombre, apellido, hobbies" });
    }
    
    if (hobbies.length < 2) {
        return res.status(400).json({ error: "Debe tener al menos 2 hobbies" });
    }
    
    if (users.some(user => user.codigo === codigo)) {
        return res.status(400).json({ error: "El código ya está registrado" });
    }
    
    const newUser = {
        codigo,
        nombre: nombre.toUpperCase(),
        apellido: apellido.toUpperCase(),
        hobbies
    };
    
    users.push(newUser);
    
    fs.writeFileSync('24-taller-04-datos.json', JSON.stringify(users, null, 2));
    
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});