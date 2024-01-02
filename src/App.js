import ToggleProvider from './context/Toggle';
import './index.scss';
import { Home } from './pages/Home';

import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const growthbook = new GrowthBook({
    apiHost: 'https://cdn.growthbook.io',
    clientKey: 'sdk-I2NjWeqEQHzix9sW',
    enableDevMode: true,
    subscribeToChanges: true,
    trackingCallback: (experiment, result) => {
      // TODO: Use your real analytics tracking system
      console.log('Viewed Experiment', {
        experimentId: experiment.key,
        variationId: result.key,
      });
    },
  });

  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, [growthbook]);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <ToggleProvider>
        <div className="App">
          <Home />
        </div>
      </ToggleProvider>
    </GrowthBookProvider>
  );
}

export default App;
