import {AppLayoutProps} from './AppLayout.d'
import PrivateLayout from './Private/PrivateLayout'
import PublicLayout from './Public/PublicLayout';

function AppLayout({Authenticated,children}:AppLayoutProps) {
    return Authenticated ? (
        <PrivateLayout>{children}</PrivateLayout>
      ) : (
        <PublicLayout>{children}</PublicLayout>
      );
  
}

export default AppLayout