import Marca from "./marca/NavMarca";
function NavBar(){
    return (
        <nav className="font-sans fixed flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-black shadow sm:items-baseline w-full">
            <Marca titulo="Gaming Zone - Ledezma"></Marca>
        </nav>
    );
}
export default NavBar;
