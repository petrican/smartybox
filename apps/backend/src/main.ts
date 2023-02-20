import "reflect-metadata";
import express from "express";
import * as bodyParser from "body-parser";

import cors from "cors";
import {allRoutes} from "./routes/index";
import {AdministratorDbSeed} from "./utils/administrator.dbseed";


    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use(cors());

    //routes
    app.use(allRoutes);

  // start express server
  if (process.env.SECRET_KEY) {
    app.listen(5001);
    (async () => {
      await new AdministratorDbSeed().createAdmin();
    })();
    console.log(`Express server has started on port 5001.`);
  } else {
    console.log(
      `Please set the SECRET_KEY env first. => export SECRET_KEY=somekey `
    );
    process.exit(1);
  }




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
