import React, { useState, useRef } from 'react';
import { LANGUAGES } from "../constants";
import "flowbite";

function Navbar() {
    const [language, setLanguage] = useState(LANGUAGES[0].label);
    const dropdownRef = useRef(null);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage.label);
        if (dropdownRef.current) {
            dropdownRef.current.classList.toggle('hidden');
        }
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="YTraveling Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">YTraveling</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button type="button" data-dropdown-toggle="language-dropdown" className="inline-flex items-center text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 lg:px-5 py-2.5 mr-2 focus:outline-none">
                            {language}
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div ref={dropdownRef} className="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow" id="language-dropdown">
                            <ul className="py-1" role="none">
                                {LANGUAGES.map(lang => {
                                    return (
                                        <li key={lang.code}>
                                            <a href="#" onClick={() => changeLanguage(lang)} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                {lang.label}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Nous rejoindre</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;