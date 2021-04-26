const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));