import React, { useState, useEffect } from 'react';

const PptxPreview = ({url}) => {
  
  return (
    <iframe
      id="iframe"
      style={{ width: '100%', height: '100%' }}
      src={`/index.html?url=${encodeURIComponent(url)}`}
    ></iframe>

  );
};

export default PptxPreview;