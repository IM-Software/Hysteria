import React, { useState, useEffect } from 'react';
import { useFeatureIsOn } from '@growthbook/growthbook-react';
import { Construction } from '../pages/Construction';

export default function ToggleProvider({ children }) {
  const [isFeatureReady, setIsFeatureReady] = useState(false);
  const isPreview = useFeatureIsOn('hysteria-preview');

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      setIsFeatureReady(true);
    };

    fetchData();
  }, []);

  if (!isFeatureReady) {
    return children;
  }

  if (isPreview) {
    return children;
  } else {
    return <Construction/>;
  }
}