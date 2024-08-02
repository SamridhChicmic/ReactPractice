import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { authenticatedRoutes, guestRoutes } from './config';
import AppLayout from '../Layout/AppLayout';



function RootRouter() {
  const guest = useRoutes(guestRoutes);
  const authenticated = useRoutes(authenticatedRoutes);
  const token = useSelector((state:any) => state?.TokenSlice.token);
  return (
    <>
       <AppLayout Authenticated={token}>
        {token ? authenticated : guest}
        </AppLayout>
  
    </>
  );
}

export default RootRouter;
