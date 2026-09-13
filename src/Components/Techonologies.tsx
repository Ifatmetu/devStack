import { use, useState } from "react";
import type { ITechnology } from "../types/techonology.ts";

import {
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaJava,
    FaDocker,
} from "react-icons/fa";

import {
    SiSvelte,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";


interface ITechonologiesProps {
    users: Promise<ITechnology[]>;
}


const getIcon = (icon: string) => {

    if (icon === "react")
        return <FaReact className="text-3xl text-cyan-400" />;

    if (icon === "vue")
        return <FaVuejs className="text-3xl text-green-500" />;

    if (icon === "svelte")
        return <SiSvelte className="text-3xl text-orange-500" />;

    if (icon === "nextjs")
        return <SiNextdotjs className="text-3xl text-black" />;

    if (icon === "nodejs")
        return <FaNodeJs className="text-3xl text-green-500" />;

    if (icon === "postgresql")
        return <SiPostgresql className="text-3xl text-blue-700" />;

    if (icon === "redis")
        return <SiRedis className="text-3xl text-red-500" />;

    if (icon === "javascript")
        return <SiJavascript className="text-3xl text-yellow-500" />;

    if (icon === "typescript")
        return <SiTypescript className="text-3xl text-blue-500" />;

    if (icon === "java")
        return <FaJava className="text-3xl text-red-500" />;

    if (icon === "tailwindcss")
        return <SiTailwindcss className="text-3xl text-cyan-400" />;

    if (icon === "docker")
        return <FaDocker className="text-3xl text-blue-500" />;

    return null;
};


const Techonologies = ({ users }: ITechonologiesProps) => {

    const data = use(users);

    const [stack, setStack] = useState<ITechnology[]>([]);


    const addToStack = (tech: ITechnology) => {

        const alreadyAdded = stack.some(
            (item) => item.id === tech.id
        );

        if (alreadyAdded) {
            return;
        }

        setStack([...stack, tech]);
    };

    const removeFromStack = (id: string) => {

        setStack(
            stack.filter((item) => item.id !== id)
        );

    };


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


                {/* Tech Cards - mobile এ 1 column, লিস্টে সবার আগে */}
                <div className="order-1 lg:order-none lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {data.map((tech) => (

                        <div
                            key={tech.id}
                            className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
                        >
                            <div className="flex justify-between items-center">

                                {getIcon(tech.icon)}

                                <span className="bg-blue-50 text-blue-500 text-[10px] px-3 py-1 rounded-full">
                                    {tech.badge}
                                </span>

                            </div>


                            <h1 className="text-base font-bold mt-4">
                                {tech.name}
                            </h1>
                            <p className="text-[11px] text-gray-500 leading-4 mt-2">
                                {tech.description}
                            </p>


                            <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-2">

                                <span className="bg-gray-100 text-gray-500 text-[9px] px-2 py-1 rounded">
                                    {tech.category}
                                </span>

                                <span className="text-gray-500 text-[9px]">
                                    {tech.difficulty}
                                </span>

                                <span className="flex items-center gap-1 text-[9px]">

                                    <span className="text-yellow-500">
                                        ★
                                    </span>

                                    {tech.rating}

                                </span>

                            </div>


                            <button
                                onClick={() => addToStack(tech)}
                                className="w-full bg-[#080D1A] hover:bg-gray-800 text-white text-[10px] py-2 rounded-md mt-3"
                            >
                                Add to Stack
                            </button>

                        </div>

                    ))}

                </div>


                {/* Your Stack - mobile এ সবার শেষে, lg এ ডানপাশে sidebar */}
                <div className="order-2 lg:order-none border border-gray-200 rounded-xl p-4 bg-white shadow-sm h-fit lg:sticky lg:top-5">

                    <h1 className="text-sm font-bold">
                        Your Stack
                    </h1>

                    {stack.length === 0 ? (
                        <p className="text-[10px] text-gray-400 mt-1">
                            No technologies selected yet.
                        </p>
                    ) : (
                        <p className="text-[10px] text-gray-400 mt-1">
                            {stack.length} {stack.length === 1 ? "technology" : "technologies"} selected
                        </p>
                    )}

                    {stack.length === 0 ? (

                        <div className="text-[10px] text-gray-400 border border-dashed border-gray-200 rounded-xl h-14 flex items-center justify-center mt-3">
                            Your stack is empty.
                        </div>

                    ) : (

                        <div className="mt-4 space-y-2">

                            {stack.map((tech) => (

                                <div
                                    key={tech.id}
                                    className="border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-between"
                                >

                                    <div className="flex items-center gap-2 min-w-0">

                                        {getIcon(tech.icon)}

                                        <div className="min-w-0">
                                            <h2 className="text-xs font-semibold truncate">
                                                {tech.name}
                                            </h2>

                                            <p className="text-[9px] text-gray-400">
                                                {tech.category}
                                            </p>
                                        </div>

                                    </div>

                                    <button
                                        onClick={() => removeFromStack(tech.id)}
                                        className="text-gray-400 hover:text-red-500 text-xl leading-none ml-2"
                                    >
                                        ×
                                    </button>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};


export default Techonologies;