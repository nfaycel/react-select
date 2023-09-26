import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const MyForm = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const { handleSubmit, control,reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "John Doe", // Default value for "name" field
      email: "test@gmail.com", // Default value for "email" field
      selectedOption: options[1], // Default value for "selectedOption" field
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleReset = () => {
    reset(); // Reset the form to its default values
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Select an option:</label>
        <Controller
          name="selectedOption"
          control={control}
          rules={{ required: "Select an option is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isClearable
              placeholder="Select an option"
            />
          )}
        />
         {errors.selectedOption && (
            <p className="error">{errors.selectedOption.message}</p>
          )}
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button> {/* Add Reset button */}
      </div>
    </form>
  );
};

export default MyForm;
