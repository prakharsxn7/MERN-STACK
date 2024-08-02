function Navbar(){
    return(
        <div className="border shadow-2xl" >
            <nav className="flex justify-between px-4 ">
            <h1 className=" cursor-pointer text-[50px] font-extrabold">Crypso - <span className="text-blue-700">A Crypto Tracker</span></h1>
            <navItem className="flex gap-4 text-[25px]">
                <p className=" cursor-pointer  hover:text-blue-400">Top 10</p>
                <p className=" cursor-pointer  hover:text-blue-400">Trending</p>
                <p className=" cursor-pointer hover:text-blue-400">Watchlist</p>
            </navItem>
            </nav>
        </div>
    )
}
export default Navbar