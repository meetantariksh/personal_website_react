/**
 *
 * Asynchronously loads the component for ExperiencesComponent
 *
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
