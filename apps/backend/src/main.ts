import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";

// import { AdministratorDbSeed } from "./utils/administrator.dbseed";
import cors from "cors";
import { allRoutes } from "./routes/index";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use(cors());

    //routes
    app.use(allRoutes);

  // start express server
  if (process.env.SECRET_KEY) {
    app.listen(5000);
    // await new AdministratorDbSeed(connection).createAdmin();
    console.log(`Express server has started on port 5000.`);
  } else {
    console.log(
      `Please set the SECRET_KEY env first. => export SECRET_KEY=somekey `
    );
    process.exit(1);
  }
}).catch(error => console.log(error));



// createConnection()
//   .then(async (connection) => {
//     // create express app
//     const app = express();
//     app.use(bodyParser.json());
//
//     app.use(cors());
//
//     //routes
//     app.use(allRoutes);
//
//     // start express server
//     if (process.env.SECRET_KEY) {
//       app.listen(3000);
//       await new AdministratorDbSeed(connection).createAdmin();
//       console.log(`Express server has started on port 3000.`);
//     } else {
//       console.log(
//         `Please set the SECRET_KEY env first. => export SECRET_KEY=somekey `
//       );
//       process.exit(1);
//     }
//   })
//   .catch((error) => console.log(error));
