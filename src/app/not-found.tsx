import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="text-center py-52 col-span-full py-auto" >
            <h2 className="text-3xl lg:text-7xl mb-10">404: Pagina non trovata...</h2>
            <h3 className="text-xl lg:text-3xl mb-5">Non trovo la pagina richiesta</h3>
            <Link href="/" className='link link-hover hover:text-primary'>Ritorna alla homepage</Link>
    </div>
  );
}