import Image from "next/image";

export function Card({title, info, image }: { title: string, info: string, image: string }){

    return <div className="card md:card-compact bg-base-200 shadow-2xl h-full hover:shadow-none m-2">
        <figure className="px-5 pt-5">
            <Image className="rounded-xl" data-testid="image" src={image} alt="immagine" width={200} height={200} />
        </figure>
        <div className="card-body">
            <h2 className="card-title" data-testid="title">{title}</h2>
            <p data-testid="info">{ info }</p>
        </div>
    </div>;
}