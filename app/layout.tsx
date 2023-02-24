import "../styles/globals.css";
import Login from "../components/Login";
import SessionProvider from "../components/SessionProvider";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      {/* Topbar */}
      

      {/* Sidebar */}
      <body>
      <SessionProvider session={session}>
      
        {
        (session) 
        ? 
            
              <div className="flex overflow-hidden h-screen w-screen" >
                <Sidebar />
                <div className="flex-1 h-full" >{children}</div>
              </div>
          
        :
          <Login />
        }
      </SessionProvider>
      </body>
    </html>
  )
}
