import { useForm } from "react-hook-form";
import DecodePasswordFromKeyTableUseCase from "../application/useCases/DecodePasswordFromKeyTableUseCase";
import "./App.css";

const App = ({ documentFrame }: { documentFrame: Document }) => {
  const decodePasswordFromKeyTableUseCase =
    new DecodePasswordFromKeyTableUseCase();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }: any) => {
    decodePasswordFromKeyTableUseCase.decode({
      username: username,
      rawPassword: password,
      documentFrame,
    });
  };

  return (
    <div className="grid place-content-center h-screen">
      <div>
        <h1 className="text-center font-black text-3xl underline mb-12 text-violet-500">
          UPA UX!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <section className="mb-10 flex flex-col text-slate-700">
            <div className="mb-3">
              <label
                className="text-sm font-semibold mb-1 block"
                htmlFor="username"
              >
                Usuario
              </label>
              <input
                id="username"
                className="py-2 px-3 block rounded-md border border-slate-100 transition-all duration-300 transform hover:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-80"
                {...register("username")}
              />
            </div>
            <div className="mb-3">
              <label
                className="text-sm font-semibold mb-1 block"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                id="password"
                className="py-2 px-3 block rounded-md border border-slate-100 transition-all duration-300 transform hover:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-80"
                type="password"
                {...register("password")}
              />
            </div>
          </section>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" px-6 py-2 font-medium tracking-wide text-white capitalize transition-all duration-300 transform bg-violet-500 rounded-md hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-80"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
