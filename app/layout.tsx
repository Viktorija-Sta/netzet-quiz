import { QuizProvider } from "./context/QuizContext";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-figtree', 
  weight: ['400', '600', '700', '800'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans`}>
        <QuizProvider> 
          {children}
        </QuizProvider>
      </body>
    </html>
  )
}