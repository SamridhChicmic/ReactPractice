import { AppLayoutProps } from "../AppLayout.d"

function PublicLayout({children}:AppLayoutProps) {
    return (
      <div>{children}</div>
    )
  }

export default PublicLayout