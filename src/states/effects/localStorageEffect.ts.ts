// src/recoil/effects/localStorageEffect.ts

import type { AtomEffect } from "recoil";

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        if (Array.isArray(newValue)) {
          const valueToStore = newValue.map((item) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { pointsToSend, isSelected, ...rest } = item;
            return rest;
          });
          localStorage.setItem(key, JSON.stringify(valueToStore));
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      }
    });
  };

export default localStorageEffect;
