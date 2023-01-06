import React from 'react';
import useIPFS from '../hooks/useIPFS';

const IpfsDownload = ({ hash, filename }) => {
  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className='download-component'>
          <a
            className='download-button'
            href={file}
            download={filename}>
            Download
          </a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IpfsDownload;
