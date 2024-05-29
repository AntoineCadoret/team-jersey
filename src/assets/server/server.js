import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Obtenir __dirname en utilisant import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin absolu vers le fichier jerseys.json
const jerseysFilePath = path.join(__dirname, '../jerseys.json');

//route pour obtenir les jerseys
app.get('/api/jerseys', (req, res) => {
    fs.readFile(jerseysFilePath, (err, data)=>{
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(JSON.parse(data));
    });
});

//mettre a jour jerseys
app.post('/api/jerseys', (req, res)=>{
    const updatedJersey = req.body;
    console.log('Received updated jersey:', updatedJersey); 

    fs.readFile(jerseysFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            console.log(err);
            return;
        }
        let jerseys = JSON.parse(data);

        let jerseyIndex = jerseys.jerseys.findIndex(jersey => jersey.id === updatedJersey.id);
        if (jerseyIndex !== -1) {
            jerseys.jerseys[jerseyIndex] = updatedJersey;
            fs.writeFile(jerseysFilePath, JSON.stringify(jerseys, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error writing file');
                    return;
                }
                res.send(jerseys.jerseys[jerseyIndex]);
            });
        } else {
            res.status(404).send('Jersey not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});