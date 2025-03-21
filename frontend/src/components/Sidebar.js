export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-green-900 text-white p-5 fixed">
            <h1 className="text-2xl font-bold">Jardim Botânico UFSM</h1>
            <nav className="mt-5">
                <ul>
                    <li className="mb-2"><a href="#" className="hover:text-gray-300">Início</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-300">Atrações</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-300">Sobre</a></li>
                </ul>
            </nav>
        </div>
    );
}
