const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./controllers/swaggerController")
const protectedRoute = require('./routes/protectedRoute');
const userRoute = require('./routes/userRoute');
const config = require("./services/configService");
const auth = require('./controllers/authController');


app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", userRoute);

app.use("/protected", auth, protectedRoute);

// start server
app.listen(config.PORT, function () {
  console.log(`app running on ${config.HOST}:${config.PORT}`);
});