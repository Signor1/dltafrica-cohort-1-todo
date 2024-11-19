import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Layouts = ({ children }) => {
    return (
        <main className="w-full h-screen flex flex-col justify-between bg-stone-950">
            {/* header */}
            <div className="w-full h-20 flex justify-between items-center px-4 border-b border-stone-400 bg-stone-950 rounded-e-lg">
                <h3 className="text-lg font-medium text-amber-600 ">Todo Dapp</h3>
                <appkit-button />
            </div>
            <section className="flex-1 p-8">
                {children}
            </section>
            {/* Footer */}
            <footer className="w-full h-20 flex justify-center items-center bg-stone-800">
                <p className="text-stone-300">Todo Dapp &copy; 2024. All Right Reserved.</p>
            </footer>
            <ToastContainer theme="dark" position="top-right" />
        </main>
    )
}

export default Layouts