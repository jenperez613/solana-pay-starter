import React from 'react'

const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Footer = () => {
  return (
    <div className='footer-container'>
      <img
        alt='Twitter Logo'
        className='twitter-logo'
        src='twitter-logo.svg'
      />
      <a
        className='footer-text'
        href={TWITTER_LINK}
        target='_blank'
        rel='noreferrer'>
        {`built on @${TWITTER_HANDLE}`} by JenPerez
      </a>
    </div>
  );
}

export default Footer