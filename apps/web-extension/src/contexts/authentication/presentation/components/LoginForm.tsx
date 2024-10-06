import { FormProvider, useForm } from 'react-hook-form'
import DecodePasswordFromKeyTableUseCase from '../../application/useCases/DecodePasswordFromKeyTableUseCase'
import Button from './Button'
import Input from './Input'

const LoginForm = ({ documentFrame }: { documentFrame: Document }) => {
  const decodePasswordFromKeyTableUseCase =
    new DecodePasswordFromKeyTableUseCase()

  const methods = useForm()

  const onLogin = ({ username, password }: any) => {
    decodePasswordFromKeyTableUseCase.decode({
      username,
      rawPassword: password,
      documentFrame
    })
  }

  return (
    <div className='my-auto px-4 sm:max-[450px] md:max-w-[550px] mx-auto'>
      <header className='mb-12'>
        <h1 className='font-black text-5xl mb-8  text-gray-900'>
          Iniciar sesión
        </h1>
        <p className='text-xl text-gray-600 mb-8'>
          Ingresa tu contraseña habitual para iniciar sesión en el campus
          virtual de la Universidad de Pamplona.
        </p>
      </header>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onLogin)}>
          <section className='mb-10 flex flex-col text-slate-700'>
            <Input
              label='Nombre de usuario'
              name='username'
              validations={{ required: true, minLength: 3 }}
            />
            <Input
              type='password'
              label='Contraseña'
              name='password'
              validations={{ required: true, minLength: 8 }}
            />
          </section>

          <Button>Iniciar sesión</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default LoginForm
