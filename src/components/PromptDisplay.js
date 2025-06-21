import React from 'react';

const PromptDisplay = ({ keyName, noteMaterial, rhythmText }) => {
  return (
    <div className="prompt-display">
      <h2>Current Practice Prompt</h2>
      <p>
        <strong className="prompt-label">
          <span role="img" aria-label="Key Icon">🎼</span> Key:
        </strong> 
        <span>{keyName || 'N/A'}</span>
      </p>
      <p>
        <strong className="prompt-label">
          <span role="img" aria-label="Note Material Icon">🎷</span> Note Material:
        </strong> 
        <span>{noteMaterial || 'N/A'}</span>
      </p>
      <p>
        <strong className="prompt-label">
          <span role="img" aria-label="Rhythm Icon">🥁</span> Rhythm (Text):
        </strong> 
        <span>{rhythmText || 'N/A'}</span>
      </p>
    </div>
  );
};

export default PromptDisplay;
