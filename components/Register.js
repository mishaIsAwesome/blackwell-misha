"use client";
import { useRef } from "react";
import RegisterButton from "./RegisterButton";


export default function Register() {
    const scrollableList = useRef(null);

    const scroll = (scrollOffset) => {
        scrollableList.current.scrollLeft += scrollOffset;
      };

    const steps = [
        {
            text: "Install our app, “Blackwell Invest”",
            image: "/register/step-1.png"
        },
        {
            text: "Login OR create a new account”",
            image: "/register/step-2.png"
        },
        {
            text: "Click “Account”",
            image: "/register/step-3.png"
        },
        {
            text: "Click “Link an account”",
            image: "/register/step-4.png"
        },
        {
            text: "Select “BlackwellGlobalAsia-Live” server",
            image: "/register/step-5.png"
        },
        {
            text: "Fill in your Blackwell Global trading account OR create a new account",
            image: "/register/step-6.png"
        },
        {
            text: "Click “Copy Trades”",
            image: "/register/step-7.png"
        },
        {
            text: "Click “Done”",
            image: "/register/step-8.png"
        }
    ]

    return (
        <div className="w-full px-48 flex-col justify-items-center">
            <h3 className="text-(--light-blue)">How To Link MT4 Account</h3>
            <div className="m-4 w-full relative">
                <button onClick={() => scroll(-320)} className="absolute top-0 bottom-0 m-auto ml-4 z-2 w-8 h-8 bg-[#00000090] hover:bg-black rounded-full justify-items-center cursor-pointer">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button onClick={() => scroll(320)} className="absolute top-0 bottom-0 right-0 m-auto mr-10 z-2 w-8 h-8 bg-[#00000090] hover:bg-black rounded-full justify-items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div ref={scrollableList} className="flex gap-8 items-center overflow-x-scroll no-scrollbar scroll-smooth text-gray-900">
                    
                    {steps.map((step, index) =>
                        <div key={index} className="relative w-80 h-100 p-8 justify-items-center flex flex-col flex-shrink-0 border-1 border-(--orange) rounded-4xl">
                            <img className="max-h-90" src={step.image} />
                            <span className="text-white text-lg text-center font-(family-name:--font-primary)">{step.text}</span>
                            {(steps.length - 1) != index && <img className="absolute w-20 bg-(--background) top-0 bottom-0 m-auto -right-15 z-1" src={"/register/arrow.png"} />}
                        </div>
                    )}
                </div>
            </div>
            <RegisterButton />
        </div>
    )
}