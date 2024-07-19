import {Metadata} from "next"

export const metadata: Metadata ={
  title:{
    
    default: "Next.ja self-codevalution", 
    template:"%s | Codevolution",


  },
  description:"Genrated by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{
            backgroundColor:"lightgreen",
            padding:"1rem",
          }}>
          <p >Header</p>
        </header>
        {children}
        <footer style={{
            backgroundColor:"lightblue",
            padding:"1rem",
          }}>
          <p>footer</p>
        </footer>
        </body>
    </html>
  );
}
