/**
 *
 * Asynchronously loads the component for ContactMeComponent
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
