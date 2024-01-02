import { useFeatureIsOn } from '@growthbook/growthbook-react';

export default function ToggleProvider({ children }) {
  const isPreview = useFeatureIsOn('hysteria-preview');

  if (isPreview) {
    return children;
  } else {
    return <div>Site em construção</div>;
  }
}
