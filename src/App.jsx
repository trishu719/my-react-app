import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/DataModeRoutes';
import { WishlistProvider } from './ContextAPI/Providers/WishlistProvider';

function App() {

  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  )
}

export default App;