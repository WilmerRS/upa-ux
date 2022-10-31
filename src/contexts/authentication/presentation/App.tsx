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
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} />
        <input type="password" {...register("password")} />
        <input type="submit" value="Send form" />
      </form>
    </div>
  );
};

export default App;
