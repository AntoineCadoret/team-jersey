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
const teamsFilePath = path.join(__dirname, '../teams.json');

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

//get favorites
app.get('/api/favorites', (req, res) => {
    fs.readFile(jerseysFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        const jerseys = JSON.parse(data);
        const favoritesJerseys = [];
        jerseys.jerseys.forEach(jersey => {
            if(jersey.liked){
                favoritesJerseys.push(jersey.id);
            }
        });
        res.send(favoritesJerseys);
    });
});

//get my jerseys
app.get('/api/myjerseys', (req, res) => {
    fs.readFile(jerseysFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        const jerseys = JSON.parse(data);
        const myJerseys = [];
        jerseys.jerseys.forEach(jersey => {
            if(jersey.bought){
                myJerseys.push(jersey.id);
            }
        });
        res.send(myJerseys);
    });
});

//get a jersey info
app.get('/api/jersey', (req, res) => {
    const jerseyId = req.query.id;
    fs.readFile(jerseysFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading jersey file');
            return;
        }
        const jerseys = JSON.parse(data);
        const jersey = jerseys.jerseys.filter(jersey => jersey.id === jerseyId)[0];
        const jerseyInfo = {jersey:{},team:{}}
        jerseyInfo.jersey = jersey;
        fs.readFile(teamsFilePath, (err, data) => {
            if (err) {
                res.status(500).send('Error reading teams file');
                return;
            }
            const teams = JSON.parse(data);
            console.log('in readfile', jerseyInfo.jersey.teamId);
            const team =  teams.teams.filter(team => team.id === jerseyInfo.jersey.teamId)[0];
            jerseyInfo.team = team;
            res.send(jerseyInfo);
        });
        
    });

});

//mettre a jour jerseys
app.post('/api/jerseys', (req, res)=>{
    const updatedJersey = req.body;

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