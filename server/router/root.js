const express = require("express");
const mongoose = require("mongoose");
const Player = require("../model/player");

const router = new express.Router();

router.post("/players", async (req, res) => {
  try {
    const { name, age, email, gender, game } = req.body;

    const new_player = new Player({ player_name: name, age, email, gender, game });
    const add_player = await new_player.save();

    if (add_player) {
      res.status(200).send("Registation Successful");
    }
    else {
      res.status(400).send("Registation Failed");
    }
  } catch (error) {
    res.status(400).send("Error to registation " + error);
  }
});

router.get("/players", async (req, res) => {
  try {
    const player_data = await Player.find({});
    if (player_data) {
      res.status(200).send(player_data);
    } else {
      res.status(200).send("Player data not found");
    }
  } catch (error) {
    res.status(400).send("Error to get player data " + error);
  }
});

router.get("/players/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const player_single_data = await Player.findById({ _id });
    if (player_single_data) {
      res.status(200).send(player_single_data);
    } else {
      res.status(200).send("Player data not found");
    }
  } catch (error) {
    res.status(400).send("Error to get player data " + error);
  }
});

router.patch("/players/:id", async (req, res) => {
  try {
    const update_player = await Player.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (update_player) {
      res.status(200).send("Update player data successfully");
      console.log("ok");
    } else {
      res.status(400).send("Update Failed");
      console.log("okg");
    }
  } catch (error) {
    res.status(400).send("Error to update player data " + error);
    console.log("okgbfdn");
  }
});
router.delete(`/players/:id`, async (req, res) => {
  try {
    const delete_player = await Player.findByIdAndDelete({
      _id: req.params.id,
    });
    if (delete_player) {
      res.status(200).send("Player data delete successful");
    } else {
      res.status(400).send("Player data not found");
    }
  } catch (error) {
    res.status(400).send("Error to delete player data " + error);
  }
});

module.exports = router;
