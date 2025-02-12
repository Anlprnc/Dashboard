import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}
