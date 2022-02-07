import React, { useState } from 'react';

const CopyButton = ({ toCopy }) => {
  const [copied, setCopied] = useState(false);

  function copy(val) {
    const el = document.createElement('input');
    el.value = val;
    document.body.appendChild(el);
    el.select();
    console.log(el.value);
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }

  return (
    <button onClick={() => copy(toCopy)}>
      {!copied ? "Copy link" : "Copied!"}
    </button>
  )
}

export default CopyButton;
