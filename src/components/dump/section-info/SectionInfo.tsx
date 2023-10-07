//import Image from 'next/image';
'use client';
import { Fade } from "react-awesome-reveal";

export function SectionInfo({ title, info, image}: { title: string, info: string, image: string }){

    return <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <Fade direction="right" delay={500}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img data-testid="profileImage" src={image} className=" lg:max-w-sm rounded-lg shadow-2xl" alt="image"/>
        </Fade>
        <Fade direction="left">
            <div>
                <h1 data-testid="sectionInfoTitle" className="text-3xl lg:text-6xl font-bold">{ title } &#128640;</h1>
                <p data-testid="info" className="text-xl lg:text-3xl py-6">{ info }</p>
            </div>
        </Fade>
    </div>
  </div>;
}