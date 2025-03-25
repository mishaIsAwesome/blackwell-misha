export default function RegisterButton({circle = false}) {

    return (
        <button className={`my-2 ${!circle && "text-xl"} bg-(--orange) hover:opacity-70 ${circle ? "rounded-full" : "rounded-sm"} shadow-md py-2 px-6`}>
            {circle ? "REGISTER NOW" : "Register Now"}
        </button>
    )
}