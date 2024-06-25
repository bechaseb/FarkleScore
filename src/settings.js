import React from 'react';

const Settings = ({ settings, onSettingsChange }) => {
  return (
    <div>
      <h2>Settings</h2>
      <label>
        Text Size:
        <input
          type="number"
          value={settings.textSize.replace('px', '')}
          onChange={e => onSettingsChange({ textSize: `${e.target.value}px` })}
        />
      </label>
      <label>
        Text Color:
        <input
          type="color"
          value={settings.textColor}
          onChange={e => onSettingsChange({ textColor: e.target.value })}
        />
      </label>
      <label>
        Background Color:
        <input
          type="color"
          value={settings.bgColor}
          onChange={e => onSettingsChange({ bgColor: e.target.value })}
        />
      </label>
    </div>
  );
};

export default Settings;
