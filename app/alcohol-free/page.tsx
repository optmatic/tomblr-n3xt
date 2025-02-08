import days from "./last-drink";

export default function AlcoholFree() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <p className="text-white text-center px-6 font-sm sm:text-lg">There have been <span className="font-bold">{days}</span> days since I last drank alcohol.</p>
        </main>
    )
}