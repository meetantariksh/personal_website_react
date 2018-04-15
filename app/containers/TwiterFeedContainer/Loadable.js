/**
 *
 * Asynchronously loads the component for TwiterFeedContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
