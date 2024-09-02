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
      <div className="w-full sm:w-[350px]">
        <h1 className="text-center font-black text-3xl mb-12 text-gray-900">
          Campus Virtual
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="mb-10 flex flex-col text-slate-700">
            <div className="mb-2">
              <label
                className="text-sm text-gray-600 mb-1 block"
                htmlFor="username"
              >
                Usuario
              </label>
              <input
                id="username"
                className="w-full py-3 px-3 block rounded-md border border-slate-100 transition-all duration-300 transform hover:border-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                {...register("username", { required: true, minLength: 3 })}
                aria-invalid={errors.username ? "true" : "false"}
              />
              <p className="text-red-600 min-h-6">
                {errors.username?.type === "required" &&
                  "Este campo es requerido"}
                {errors.username?.type === "minLength" &&
                  "Este campo debe tener al menos 3 caracteres"}
                {!errors.username && ""}
              </p>
            </div>

            <div className="mb-2">
              <label
                className="text-sm text-gray-600 mb-1 block"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                id="password"
                className="w-full py-3 px-3 block rounded-md border border-slate-100 transition-all duration-300 transform hover:border-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                type="password"
                {...register("password", { required: true, minLength: 8 })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <p className="text-red-600 min-h-6">
                {errors.password?.type === "required" &&
                  "Este campo es requerido"}
                {errors.password?.type === "minLength" &&
                  "Este campo debe tener al menos 8 caracteres"}
                {!errors.password && ""}
              </p>
            </div>
          </section>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-6 py-3 font-medium tracking-wide text-white capitalize transition-all duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"
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
