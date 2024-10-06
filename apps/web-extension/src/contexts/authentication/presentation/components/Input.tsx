import { FieldValues, RegisterOptions, useForm, useFormContext } from 'react-hook-form'

const Input = ({
  type = 'text',
  label,
  name,
  validations = {}
}: {
  type?: 'text' | 'password'
  label: string
  name: string
  validations: RegisterOptions<FieldValues, string>
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className='mb-2'>
      <label className='text-sm mb-2 block to-gray-900' htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className='w-full py-3 px-4 block border border-slate-100 transition-all duration-300 transform hover:border-primary focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80'
        {...register(name, validations)}
        aria-invalid={errors[name] != null ? 'true' : 'false'}
      />
      <p className='text-red-600 min-h-5 mt-2 text-sm'>
        {errors[name]?.type === 'required' && 'Este campo es requerido'}
        {errors[name]?.type === 'minLength' &&
          `Este campo debe tener al menos ${validations.minLength} caracteres`}
        {errors[name] == null && ''}
      </p>
    </div>
  )
}

export default Input
