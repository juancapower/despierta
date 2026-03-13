const https = require('https');
https.get('https://www.juancapower.com/gracias', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const links = data.match(/href="([^"]*mercadopago[^"]*)"/gi);
    const yape = data.match(/yape|plin|bcp|bbva|interbank/gi);
    console.log("MercadoPago Links:", links);
    console.log("Other keywords:", yape);
    
    // Also print all links just in case
    const allLinks = data.match(/href="([^"]*)"/gi);
    console.log("All links:", allLinks ? allLinks.filter(l => l.includes('http')) : []);
  });
});
