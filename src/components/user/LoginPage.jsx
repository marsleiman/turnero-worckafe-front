import { useState } from "react";
import loginService from "../../servicies/loginService";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setLogin((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginService(login);
        navigate("/login");
    }

    return (
        <section class="bg-[#fefae0] min-h-screen flex items-center justify-center">
            <div class="bg-[#79B473] flex rounded-2xl shadow-lg max-w-3xl p-5">
                {/* login container */}
                <div class="md: w-1/2 px-12">
                    <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                        <h2 class="font-mono text-2xl flex items-center justify-center">Bienvenido</h2>
                        <h2 class="font-mono text-2xl flex items-center justify-center">al work-café</h2>
                        <p class="text-sm mt-4 font-mono flex items-center justify-center"> Ingrese a su cuenta</p>
                        <input class="p-2 mt-8 font-mono rounded-xl border"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={login.email}
                            onChange={handleChange} >

                        </input>
                        <input class="p-2 mt-5 font-mono rounded-xl border"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={login.password}
                            onChange={handleChange}></input>
                        <button class="bg-[#6F8F72] font-mono rounded-xl py-2 hover:scale-105 duration-300" type="submit">Login</button>
                    </form>

                    < div class="mt-10 grid grid-cols-1 items-center text-black font-mono">
                        <hr class="border-gray-500"></hr>
                        <hr class="border-gray-500"></hr>
                        <p class="font-mono text-sm flex items-center justify-center p-4">No estás registrado?</p>
                        <Link to="/register" class="font-bold flex items-center justify-center py-1 hover:scale-105 duration-100"><button>Registrarme</button></Link>
                    </div>
                </div>
                {/* image container  */}

                <div class="md:block hidden w-1/2">
                    <img class="rounded-2xl" src="/images/test.jpeg" alt="" />

                </div>

            </div>
        </section>
    )
}

export default LoginPage;