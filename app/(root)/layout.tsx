import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logedIn = {
    firstName: "Hanafi",
    lastName: "Aji",
  };
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar user={logedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src={'/icons/logo.svg'} alt='menu icon' width={30} height={30}  />
          <div>
            <MobileNav user={logedIn} />
          </div>
        </div>
      {children}
      </div>

    </main>
  );
}
