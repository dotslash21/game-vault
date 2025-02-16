interface LayoutProps {
  children: React.ReactNode;
}

import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Game Vault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
