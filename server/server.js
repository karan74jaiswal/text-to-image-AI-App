// server.js
require("dotenv").config();
const express = require("express");
const Replicate = require("replicate");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/convert", async (req, res) => {
  const replicateApiToken = process.env.SERVER_REPLICATE_API_TOKEN;
  try {
    const replicate = new Replicate({
      auth: replicateApiToken,
    });
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: req.body.prompt,
        },
      }
    );
    // You might want to process 'output' and send a specific part of it to the client
    res.json({ result: output });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});