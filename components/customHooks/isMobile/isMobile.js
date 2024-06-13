'use client';
import { useSyncExternalStore } from 'react';

function subscribe(listener) {
  window.addEventListener('resize', listener);
  return () => window.removeEventListener('resize', listener);
}

function getSnapshot() {
  return window.innerWidth;
}

function getServerSnapshot() {
  return 0;
}

export default function useDeviceWidth() {
  const deviceWidth = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return deviceWidth;
}
