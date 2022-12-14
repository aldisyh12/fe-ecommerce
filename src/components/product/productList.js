import {Link} from "react-router-dom";

export default function ProductList(){
    return(
        <>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto">
                    <div>
                        <span className="inline-block w-12 h-1 bg-red-700"></span>

                        <h2
                            className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl"
                        >
                            Trainers
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
                        <Link to="/product-detail" className="block">
                            <div className="flex justify-center">
                                <strong
                                    className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"
                                >
                                    New
                                </strong>
                            </div>

                            <img
                                alt="Trainer"
                                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="object-cover w-full -mt-3 h-96"
                            />

                            <h5 className="mt-4 text-sm text-black/90">
                                Limited Edition Sports Trainer
                            </h5>

                            <div className="flex items-center justify-between mt-4 font-bold">
                                <p className="text-lg">$189.99</p>

                                <p className="text-xs tracking-wide uppercase">6 Colors</p>
                            </div>
                        </Link>

                        <a href="#" className="block">
                            <div className="flex justify-center">
                                <strong
                                    className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"
                                >
                                    New
                                </strong>
                            </div>

                            <img
                                alt="Trainer"
                                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="object-cover w-full -mt-3 h-96"
                            />

                            <h5 className="mt-4 text-sm text-black/90">
                                Limited Edition Sports Trainer
                            </h5>

                            <div className="flex items-center justify-between mt-4 font-bold">
                                <p className="text-lg">$189.99</p>

                                <p className="text-xs tracking-wide uppercase">6 Colors</p>
                            </div>
                        </a>

                        <a href="#" className="block">
                            <div className="flex justify-center">
                                <strong
                                    className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"
                                >
                                    New
                                </strong>
                            </div>

                            <img
                                alt="Trainer"
                                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="object-cover w-full -mt-3 h-96"
                            />

                            <h5 className="mt-4 text-sm text-black/90">
                                Limited Edition Sports Trainer
                            </h5>

                            <div className="flex items-center justify-between mt-4 font-bold">
                                <p className="text-lg">$189.99</p>

                                <p className="text-xs tracking-wide uppercase">6 Colors</p>
                            </div>
                        </a>

                        <a href="#" className="block">
                            <div className="flex justify-center">
                                <strong
                                    className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"
                                >
                                    New
                                </strong>
                            </div>

                            <img
                                alt="Trainer"
                                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="object-cover w-full -mt-3 h-96"
                            />

                            <h5 className="mt-4 text-sm text-black/90">
                                Limited Edition Sports Trainer
                            </h5>

                            <div className="flex items-center justify-between mt-4 font-bold">
                                <p className="text-lg">$189.99</p>

                                <p className="text-xs tracking-wide uppercase">6 Colors</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
