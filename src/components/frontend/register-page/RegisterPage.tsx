import React from "react";
import { Container, Input, Form, Label, Button, Link } from "src/components/ui";
import { useForm } from "react-hook-form";
import { FormValue } from "./types";

const RegisterPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = async ({ email, password, passwordConfirm }) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, passwordConfirm }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    console.log("test", data);
  };

  return (
    <Container maxWidth="50rem">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="50rem" column padding="3rem 0 0 0">
          <Label htmlFor="email">Email</Label>
          <Input type="email" register={{ ...register("email") }} />
        </Container>
        <Container maxWidth="50rem" column padding="3rem 0 0 0">
          <Label htmlFor="password">Password</Label>
          <Input type="password" register={{ ...register("password") }} />
        </Container>
        <Container maxWidth="50rem" column padding="3rem 0 0 0">
          <Label htmlFor="password-confirm">Ponovi password</Label>
          <Input
            type="password"
            register={{ ...register("passwordConfirm") }}
          />
        </Container>
        <Container
          maxWidth="50rem"
          alignItem="center"
          justifyContent="space-between"
          padding="3rem 0 0 0"
        >
          <Button width="100%" type="submit">
            Registruj se
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default RegisterPage;
