import React from 'react';
import { Adsense } from 'react-adsense';
// import { GoogleAd } from 'react-google-ad';


const Ads = () => {

  return (
    <>
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>Content of your app goes here...</p>
        
        {/* Insert the Google AdSense ad */}
        <Adsense.Google
          client="healthier"
          slot='4259737880'
          style={{ width: 300, height: 250 }}
          format=""
        />
      </header>
    </>
  );
}

export default Ads;
