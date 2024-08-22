const express = require("express");
const bodyParser = require("body-parser");
const addSchoolRoute = require("./routes/addSchool");
const listSchoolsRoute = require("./routes/listSchools");

const app = express();

app.use(bodyParser.json());

app.use("/addSchool", addSchoolRoute);
app.use("/listSchools", listSchoolsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
