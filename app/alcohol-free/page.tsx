import days from "./last-drink";

export default function AlcoholFree() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p>There have been <span className="font-bold">{days}</span> days since I last drank alcohol.</p>
        </div>
    )
}