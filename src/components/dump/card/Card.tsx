import Image from "next/image";

export function Card({title, info, image }: { title: string, info: string, image: string }){

    return <div className="card lg:card-side md:card-compact bg-base-200 shadow-2xl">
        <figure className="max-md:px-5 max-md:pt-5">
            <Image className="rounded-xl" data-testid="image" src={image} alt="immagine" width={350} height={350} />
        </figure>
        <div className="card-body">
            <h2 className="card-title" data-testid="title">{title}</h2>
            <p data-testid="info">{ info }</p>
        </div>
    </div>;
}