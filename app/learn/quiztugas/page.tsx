export default function taskpage () {
    return (
        <section className="h-screen bg-gray-200 flex flex-col justify-center items-center gap-9 relative p-12">
            <div className="bg-white p-8 h-[400px] w-[500px] rounded-3xl flex flex-col relative">
                <div className="flex gap-3">
                    <div className="absolute top-9 right-8">
                        <img src="/icons/x.svg" alt="x icon" className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl text-black">client details</h2>
                    <div className="flex flex-row gap-3">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-white flex items-center justify-start overflow-hidden">
                            <img src="/icons/orang.svg" alt="user" />
                        </div>
                        <h2 className="text-2xl font-black text-black">
                            Firzan Andrianto
                        </h2>
                        <div className="absolute bottom-3 left-[21px]">
                            <div className="bg-green-200 p-3 h-4 w-[120px] rounded-3xl flex flex-col relative"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}