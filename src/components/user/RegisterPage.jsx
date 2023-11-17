import { useState } from "react";
import registerService from "../../servicies/registerService";
import loginService from "../../servicies/loginService";
import { useNavigate } from "react-router-dom";


const RegisterPage = (props) => {
    const navigate = useNavigate();

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setRegister((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value,
        }));
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await registerService(register)
        .then(() => {
            let body = {
                email: register.email,
                password: register.password,
            }
            loginService(body);
            navigate("/");
        })
    }

    return (
        <section class="bg-[#fefae0] min-h-screen flex items-center justify-center">
            <div class="bg-[#79B473] flex rounded-2xl shadow-lg max-w-3xl p-5">
                {/* login container */}
                <div class="md: w-1/2 px-12">
                    <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                        <h2 class="font-mono text-2xl flex items-center justify-center">Bienvenido</h2>
                        <h2 class="font-mono text-2xl flex items-center justify-center">al work-café</h2>
                        <p class="text-sm mt-4 font-mono flex items-center justify-center"> Ingrese sus datos</p>
                        <input class="p-2 mt-8 font-mono rounded-xl border"
                            type="name"
                            name="name"
                            placeholder="Nombre"
                            value={register.name}
                            onChange={handleChange} ></input>
                        <input class="p-2 mt-5 font-mono rounded-xl border"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={register.email}
                            onChange={handleChange} >

                        </input>
                        <input class="p-2 mt-5 font-mono rounded-xl border"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={register.password}
                            onChange={handleChange}></input>
                        <button class="bg-[#6F8F72] font-mono rounded-xl py-2 hover:scale-105 duration-300" type="submit">Registrarme</button>
                    </form>
                </div>
                {/* image container  */}

                <div class="md:block hidden w-1/2">
                    <img class="rounded-2xl" src="/images/test2.jpeg" alt="" />

                </div>

            </div>


        </section>
    );


}
export default RegisterPage;