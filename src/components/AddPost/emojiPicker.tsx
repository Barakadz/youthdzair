// components/EmojiPickerComponent.tsx
import React, { useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

const EmojiPickerComponent: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [showPicker, setShowPicker] = useState<boolean>(false);

  // Define the type of the emoji parameter as EmojiClickData
  const addEmoji = (emojiData: EmojiClickData) => {
    setInput(input + emojiData.emoji); // emojiData.emoji contains the emoji character
  };

  return (
    <div>
      <h1>Emoji Picker with Input</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setShowPicker(!showPicker)}>😊</button>
      {showPicker && (
        <div>
          <EmojiPicker onEmojiClick={addEmoji} />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
