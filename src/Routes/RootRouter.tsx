import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { authenticatedRoutes, guestRoutes } from './config';



function RootRouter() {
  const guest = useRoutes(guestRoutes);
  const authenticated = useRoutes(authenticatedRoutes);
  const token = useSelector((state:any) => state?.TokenSlice.token);
  return (
    <>
     
        {token ? authenticated : guest}
  
    </>
  );
}

export default RootRouter;
