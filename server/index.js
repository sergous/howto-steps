const express = require("express");
const dotenv = require("dotenv").config();
const { default: ParseServer, ParseGraphQLServer } = require("parse-server");
const ParseDashboard = require("parse-dashboard");

const config = require("./config.json");

const parseServer = new ParseServer({
  ...config,
  appId: process.env.APPLICATION_ID,
  masterKey: process.env.MASTER_KEY
});

const parseGraphQLServer = new ParseGraphQLServer(parseServer, config);

const parseDashboard = new ParseDashboard({
  apps: [
    {
      ...config,
      appId: process.env.APPLICATION_ID,
      masterKey: process.env.MASTER_KEY
    }
  ]
});

const app = express();
app.use("/parse", parseServer.app); // (Optional) Mounts the REST
app.use("/dashboard", parseDashboard); // Make the Parse Dashboard available at /dashboard
parseGraphQLServer.applyGraphQL(app); // Mounts the GraphQL API
parseGraphQLServer.applyPlayground(app); // (Optional) Mounts the GraphQL Playground - do NOT use in Production

app.listen(8000, function() {
  console.log("REST API running on http://localhost:8000/parse");
  console.log("GraphQL API running on http://localhost:8000/graphql");
  console.log("GraphQL Playground running on http://localhost:8000/playground");
  console.log("Parse Dashboard running on http://localhost:8000/dashboard");
});
