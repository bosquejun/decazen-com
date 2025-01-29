import CenteredWithLogo from '@/components/Footer';
import { Navbar } from '@/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <main className="z-0">{children}</main>
      <footer>
        <CenteredWithLogo />
      </footer>
    </div>
  );
}
