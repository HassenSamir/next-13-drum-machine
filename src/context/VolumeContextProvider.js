"use client";
import React from "react";

export const VolumeContext = React.createContext(null);

const VolumeContextProvider = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

  const toggleIsSoundEnabled = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  return (
    <VolumeContext.Provider
      value={{
        isSoundEnabled,
        toggleIsSoundEnabled,
      }}
    >
      {children}
    </VolumeContext.Provider>
  );
};

export const useSoundEnabled = () => {
  const data = React.useContext(VolumeContext);

  if (!data) {
    throw new Error(
      "Cannot consume SoundEnabled context without a SoundEnabledProvider"
    );
  }
  return data;
};

export default VolumeContextProvider;
