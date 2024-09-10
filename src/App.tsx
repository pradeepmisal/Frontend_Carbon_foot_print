import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.scss';
import resets from './components/_resets.module.scss';
import { CarbonFootprintTracker } from './components/CarbonFootprintTracker/CarbonFootprintTracker';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <CarbonFootprintTracker />
    </div>
  );
});
