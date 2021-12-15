import express from 'express';

const axios = require('axios');

const deezerAPIURL = 'https://api.deezer.com';

export default (app) => {
  app.use(express.json());
  
  app.get('/playlists', async (req, res) => {
    const { data: { data: playlists, } } = await axios.get(`${deezerAPIURL}/chart/0/playlists?limit=20`);
    res.json(playlists);
  });
  
  app.get('/playlists/:id', async (req, res) => {
    const { data: playlist } = await axios.get(`${deezerAPIURL}/playlist/${req.params.id}`);
    res.json(playlist);
  });
}
