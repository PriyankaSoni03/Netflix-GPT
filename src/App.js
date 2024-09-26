import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Components/Login Components/Login";
import Browse from "./Components/Browse Components/Browse";
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;



