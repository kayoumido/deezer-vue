import express from 'express';

const axios = require('axios');

const deezerAPIURL = 'https://api.deezer.com';
// Deezer endpoints
// https://api.deezer.com/chart/0/playlists
// https://developers.deezer.com/api/explorer?url=playlist/:id

export default (app) => {
  app.use(express.json());
  
  app.get('/playlists', (req, res) => {
    axios.get(`${deezerAPIURL}/chart/0/playlists`)
      .then(response => {
        res.json(response.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  });
  
  app.get('/playlists/:id', (req, res) => {
    axios.get(`${deezerAPIURL}/playlist/${req.params.id}`)
      .then(response => {
        res.json(JSON.parse(response.data));
      })
      .catch(err => {
        console.error(err);
      });
  });
}
