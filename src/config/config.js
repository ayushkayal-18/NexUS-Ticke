/**
 * Copyright (c) 2025 openUwU
 * Code by bre4d777
 * MIT License
 */

import dotenv from "dotenv";
dotenv.config();


export const config = {
  token:
    process.env.token ||
    "MTUwMjkyMzA5NTgzNTY3MjY4Nw.G6rZt8.R1fXuVILiZZLzbFccjUtdTMDApea-MgV1TELC0",

  clientId: "1502923095835672687",
  prefix: process.env.PREFIX || ".",


  environment: process.env.NODE_ENV || "development",
  database: {
    url: "mongodb+srv://AeroX:AeroX@aerox.xik7huh.mongodb.net/?retryWrites=true&w=majority&appName=AeroX",
  },
  debug: true,
  
  links: {
    supportServer: "https://discord.gg/aerox",
    github: "https://github.com/OpenUwU",
    invite:
      "https://discord.com/oauth2/authorize?client_id=1502923095835672687&permissions=8&integration_type=0&scope=bot",
  },

  watermark: "coded by Luffy",
  version: "2.0.0",
};

// bread signature
