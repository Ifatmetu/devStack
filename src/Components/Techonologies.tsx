import React from 'react';

import {
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaStar,
    FaJava,
    FaDocker,
} from "react-icons/fa"

import {
    SiSvelte,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiJavascript,
    SiTypescript,
    SiTailwindcss
} from "react-icons/si"


const Techonologies = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Explore the{" "}
                    <span className="text-pink-500">
                        Technologies
                    </span>
                </h1>

                <p className="text-sm text-gray-400 mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <FaReact className="text-2xl text-cyan-400" />

                            <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                Popular
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            React
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            A declarative, component-based JavaScript library
                            for building modern user interfaces.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Frontend
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Beginner-Friendly
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <FaVuejs className="text-2xl text-green-500" />

                            <span className="bg-green-50 text-green-500 text-[10px] px-3 py-1 rounded-full">
                                Versatile
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Vue.js
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            An approachable, performant, and versatile
                            framework for building web user interfaces.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Frontend
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Beginner-Friendly
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.8
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiSvelte className="text-2xl text-orange-500" />

                            <span className="bg-orange-50 text-orange-500 text-[10px] px-3 py-1 rounded-full">
                                Fast
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Svelte
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            Cybernetically enhanced web apps with
                            compile-time reactivity and zero virtual DOM overhead.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Frontend
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.8
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiNextdotjs className="text-2xl text-black" />
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Next.js
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            The React framework for full-stack web
                            applications with hybrid static & server rendering.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Frontend
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <FaNodeJs className="text-2xl text-green-500" />

                            <span className="bg-green-50 text-green-500 text-[10px] px-3 py-1 rounded-full">
                                Standard
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Node.js
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            An asynchronous event-driven JavaScript
                            runtime built on Chrome's V8 engine.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Backend
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.8
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiPostgresql className="text-2xl text-blue-800" />

                            <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                Top SQL
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            PostgreSQL
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            A powerful, open-source object-relational
                            database system with proven reliability.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Database
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiRedis className="text-2xl text-red-600" />

                            <span className="bg-red-50 text-red-500 text-[10px] px-3 py-1 rounded-full">
                                Cache
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Redis
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            In-memory data structure store used as a
                            high-speed database, cache, and message broker.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Database
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.8
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    {/* JavaScript */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiJavascript className="text-2xl text-yellow-500" />

                            <span className="bg-yellow-50 text-yellow-600 text-[10px] px-3 py-1 rounded-full">
                                Ubiquitous
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            JavaScript
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            The versatile, ubiquitous scripting language
                            powering dynamic behavior across the web.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Language
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Beginner-Friendly
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    {/* TypeScript */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiTypescript className="text-2xl text-blue-500" />

                            <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                Essential
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            TypeScript
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            A strongly typed programming language
                            that builds on JavaScript for robust tooling.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Language
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    {/* Java */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <FaJava className="text-2xl text-red-500" />

                            <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                Robust
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Java
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            A secure, object-oriented programming
                            language designed for portability and scale.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Language
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.6
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    {/* Tailwind CSS */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <SiTailwindcss className="text-2xl text-cyan-400" />

                            <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                Modern
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Tailwind CSS
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            A utility-first CSS framework packed with
                            classes that can be composed to build custom UI.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                Styling
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Beginner-Friendly
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>


                    {/* Docker */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                        <div className="flex justify-between items-center">
                            <FaDocker className="text-2xl text-blue-500" />

                            <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                Containers
                            </span>
                        </div>

                        <h1 className="text-base font-bold mt-4">
                            Docker
                        </h1>

                        <p className="text-[11px] text-gray-500 leading-4 mt-2">
                            A platform designed to build, share, and run
                            containerized applications reliably.
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                            <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                DevOps
                            </span>

                            <span className="text-gray-500 text-[9px]">
                                Intermediate
                            </span>

                            <span className="flex items-center gap-1 text-[9px]">
                                <FaStar className="text-yellow-500" />
                                4.9
                            </span>

                        </div>

                        <button className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3">
                            Add to Stack
                        </button>
                    </div>

                </div>


                {/* Your Stack */}
                <div className="border border-gray-200 rounded-xl p-3 bg-white shadow-sm h-fit">

                    <h1 className="text-sm font-bold">
                        Your Stack
                    </h1>

                    <p className="text-[10px] text-gray-400 mt-1">
                        No technologies selected yet.
                    </p>

                    <div className="text-[10px] text-gray-400 border border-dashed border-gray-200 rounded-xl h-14 flex items-center justify-center mt-3">
                        Your stack is empty.
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Techonologies;