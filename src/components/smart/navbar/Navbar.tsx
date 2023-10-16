import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {

    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        initTheme();
    }, []);

    function initTheme(){
        if(localStorage.theme){
            setTheme(localStorage.theme);        
            localStorage.theme === 'dark' ? setDarkMode(true): null;
        }
    }
    
    function darkModeButtonOnClick($event: React.MouseEvent<HTMLElement>){
        $event.stopPropagation();
        setTheme(isDarkMode ? 'light': 'dark');        
        setDarkMode(!isDarkMode);
    }

    return <div data-testid="navbar" className="navbar bg-base-300 sticky top-0 z-10">
        <div className="navbar-start">
            <a className="btn btn-ghost">Antonio Basile</a>
        </div>
        <div className="navbar-center">
            <Menu className="sm:menu sm:menu-horizontal hidden px-2" />
        </div>
        <div className="navbar-end">
           <button id="darkModeButton"
                role="button" 
                data-testid="darkModeButton" 
                className="btn btn-ghost" 
                onClick={darkModeButtonOnClick}
            >
                {isDarkMode ? darkSvg: lightSvg}
           </button>
           <div className="dropdown dropdown-end sm:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle" >
                    { menuIcon }
                </label>
                <div className="dropdown-content card card-compact w-screen z-10 bg-base-300 mt-1">
                    <Menu className="menu menu-xl" />
                </div>
           </div>
        </div>
    </div>;
}

const lightSvg = <svg xmlns="http://www.w3.org/2000/svg" height="24" id="light" viewBox="0 -960 960 960" width="24" className="fill-accent-content">
    <title>light</title>
    <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 
        0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 
        0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 
        70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 
        0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/>
    </svg>;

const darkSvg = <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="24" 
    viewBox="0 -960 960 960" 
    width="24"
    id="dark"
    className="fill-accent-content"
>
    <title>dark</title>
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 
    0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
</svg>;

const menuIcon = <svg xmlns="http://www.w3.org/2000/svg" 
    height="24" 
    viewBox="0 -960 960 960" 
    width="24"
    className="fill-accent-content"
>
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
</svg>;

function setTheme(theme: 'light' | 'dark'){
    document.documentElement.dataset.theme = theme;
    localStorage.theme = theme;
}

function Menu({ className }: { className: string }){
    return <ul tabIndex={0} className={className}>
        <li><Link data-testid="homepageLink" href='/'>Home</Link></li>
        <li><Link data-testid="projectsLink" href="/projects">Progetti</Link></li>
    </ul>;
}