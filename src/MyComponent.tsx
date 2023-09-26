import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const MyComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { selectedOption: { value: "option2", label: "Option 2" } },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Select an option:</label>
        <Controller
          name="selectedOption"
          control={control}
          rules={{ required: "Select an option is required" }}
          //defaultValue={defaultSelectedOption} // Set "Option 2" as the default value
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent;
