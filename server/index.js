import express from 'express';

const https = require('https');

const deezerAPIURL = 'https://api.deezer.com';
// Deezer endpoints
// https://api.deezer.com/chart/0/playlists
// https://developers.deezer.com/api/explorer?url=playlist/:id

export default (app) => {
  app.use(express.json());
  
  app.get('/playlists', (req, res) => {
    https.get(`${deezerAPIURL}/chart/0/playlists`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.json(JSON.parse(data).data);
      });
    }).on("error", (err) => {
      console.log(`Error: ${err.message}`);
    });
  });
  
  app.get('/playlists/:id', (req, res) => {
    https.get(`${deezerAPIURL}/playlist/${req.params.id}`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.json(JSON.parse(data));
      });
    }).on("error", (err) => {
      console.log(`Error: ${err.message}`);
    });
  });
}
