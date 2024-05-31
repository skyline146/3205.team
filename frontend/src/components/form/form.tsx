import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import { Inputs } from "../../shared/types";

interface IFormProps {
  onFormSubmit: (searchData: Inputs) => void;
}

export const Form = ({ onFormSubmit }: IFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { email: "", number: "" } });

  const onSubmit: SubmitHandler<Inputs> = (searchData) => {
    onFormSubmit(searchData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <label>*Email:</label>
        <input
          type="email"
          placeholder="test@gmail.com"
          {...register("email", {
            required: true,
            pattern: /^([\w.]+)@([a-zA-Z]{3,}).([a-zA-Z]{2,4})$/,
          })}
        />
        {errors.email && <p style={{ color: "red" }}>Invalid email address</p>}
      </div>
      <div>
        <label>Phone number:</label>
        <Controller
          control={control}
          name="number"
          rules={{ pattern: /^\d{6}$/ }}
          render={({ field: { onChange, name, value } }) => (
            <PatternFormat
              format="##-##-##"
              placeholder="12-34-56"
              mask="_"
              name={name}
              value={value}
              onValueChange={(v) => onChange(v.value)}
            />
          )}
        />
        {errors.number && <p style={{ color: "red" }}>Invalid phone number</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
