function App() {
    return (
        <div className="w-full h-screen">
            <div className="flex-center w-full h-full">
                <div className="border-2 rounded-lg sm:rounded-2xl mx-6 pt-2 sm:m-0 bg-white flex-col-center gap-2 max-w-xs">
                    <img
                        src="/image-qr-code.png"
                        alt="qr-code"
                        className="rounded sm:rounded-lg m-0 p-0 w-[90%]"
                    />
                    <div className="w-full h-full flex-col-center">
                        <p className="text-slate-900 w-[90%] text-center text-[15px] font-bold sm:px-1 px-2">
                            Improve your front-end
                        </p>
                        <p className="text-slate-900 w-[90%] text-center text-[15px] font-bold sm:px-1 px-2">
                            skills by building projects
                        </p>
                    </div>
                    <p className="text-slate-500 w-[90%] text-center text-[15px] sm:p-1 p-2">
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
