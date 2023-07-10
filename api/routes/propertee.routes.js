module.exports = app => {
    const ctrler = require("../controllers/propertee.controller.js");
  
    var router = require("express").Router();
  
    // User Table APIs --------------------------------------------------------------------------------
    // Create a new Tutorial
    //router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/all", ctrler.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ctrler.findOne);
  
    // Update a Tutorial with id
    //router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    //router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    //router.delete("/", tutorials.deleteAll);

    // Employee Table APIs --------------------------------------------------------------------------------


    // Organisations Table APIs --------------------------------------------------------------------------------


    // Positions Table APIs --------------------------------------------------------------------------------


    // OrganisationAdmins Table APIs --------------------------------------------------------------------------------


    // Properties Table APIs --------------------------------------------------------------------------------


    // CalendarEvents Table APIs --------------------------------------------------------------------------------


    // EventTypes Table APIs --------------------------------------------------------------------------------


    // SavedSearches Table APIs --------------------------------------------------------------------------------


    // Properties Table APIs --------------------------------------------------------------------------------
  
    app.use("/api", router);
  };