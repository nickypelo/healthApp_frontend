// QRCodeGenerator.js
import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class QRCodeGenerator extends Component {
  render() {
    // The URL you want to encode in the QR code
    const websiteURL = 'https://www.instagram.com/by_nicodemus';

    return (
      <div>
        <h2>QR Code Generator</h2>
        <p>Scan this QR code to visit the website:</p>
        <QRCode value={websiteURL} />
      </div>
    );
  }
}

export default QRCodeGenerator;
