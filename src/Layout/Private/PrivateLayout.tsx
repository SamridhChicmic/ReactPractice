import { AppLayoutProps } from "../AppLayout.d"

function PrivateLayout({children}:AppLayoutProps) {
  return (
    <div>{children}</div>
  )
}

export default PrivateLayout