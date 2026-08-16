import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/DataModeRoutes';

function App() { 

  return <RouterProvider router={router} />
}

export default App;