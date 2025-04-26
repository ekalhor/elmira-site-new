// src/app/layout.js
import '../../globals.css';

export const metadata = {
  title: 'Elmira Kalhor',
  description: 'Quantitative Research Scientist Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
