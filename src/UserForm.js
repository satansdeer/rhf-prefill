import React from "react";
import { useForm } from "react-hook-form";

export function UserForm({preloadedValues}) {
  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValues
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register}
        placeholder="First Name"
        type="text"
        name="firstname"
      />
      <input
        ref={register}
        placeholder="Last Name"
        type="text"
        name="lastname"
      />
      <button>Submit</button>
    </form>
  );
}