
export function HocCard({ children }: {
    children: React.ReactNode[];
  }){

    return <div className="sm:flex sm:flex-col md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 items-stretch">
        { children.map((item, index) => <div className="py-2 md:py-0" key={index}>{ item }</div>) }
    </div>;
}