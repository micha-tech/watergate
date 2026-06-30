import { Footer } from "@/components/public/footer";
import { Navbar } from "@/components/public/navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
