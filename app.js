const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Get server hostname and IP
  const serverHostname = os.hostname();
  const serverIp = getIpAddress();

  // Get client hostname and IP
  const clientHostname = req.hostname;
  const clientIp = req.ip;

  // Send HTML response
  res.send(`
    <html>
      <head>
        <title>Node.js Web App</title>
      </head>
      <body>
        <h1>Server</h1>
        <p>Hostname: ${serverHostname}</p>
        <p>IP Address: ${serverIp}</p>

        <h1>Client</h1>
        <p>Hostname: ${clientHostname}</p>
        <p>IP Address: ${clientIp}</p>

        <h2>Additional Rows</h2>
        <p>Prathap Vadlakonda 1</p>
        <p>Sample Nodejs Web Application</p>
        <p>to Deploy as a Docker Container</p>
      </body>
    </html>
  `);
});

// Function to get server IP address
function getIpAddress() {
  const interfaces = os.networkInterfaces();
  let ipAddress = '';

  for (const dev in interfaces) {
    interfaces[dev].forEach((details) => {
      if (!details.internal && details.family === 'IPv4') {
        ipAddress = details.address;
      }
    });
  }

  return ipAddress;
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

