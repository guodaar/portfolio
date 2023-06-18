import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { border, roundedBorder, transition } from "../../styles/stylevariables";

import Button from "../../components/Button/Button";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

const FORM_URL = import.meta.env.VITE_FORM_URL;

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  closeForm: () => void;
};

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please leave your email!"),
  message: Yup.string().required("Cannot be empty"),
});

const ContactForm = ({ closeForm }: Props) => {
  const [query, setQuery] = useState(initialValues);

  const handleSubmit = (values: FormData) => {
    axios
      .post(FORM_URL, values, { headers: { Accept: "application/json" } })
      .then((response) => {
        setQuery(initialValues);
        closeForm();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputsWrapper>
              <InputContainer>
                <StyledLabel htmlFor="name">Name:</StyledLabel>
                <Field as={StyledInput} name="name" type="name" id="name" />
                <StyledError name="name" component="div" />
              </InputContainer>
              <InputContainer>
                <StyledLabel htmlFor="email">Email:</StyledLabel>
                <Field as={StyledInput} name="email" type="email" id="email" />
                <StyledError name="email" component="div" />
              </InputContainer>
            </InputsWrapper>

            <InputContainer>
              <StyledLabel htmlFor="message">Message:</StyledLabel>
              <Field
                as={StyledTextArea}
                name="message"
                type="text"
                id="message"
                rows="6"
              />
              <StyledError name="message" component="div" />
            </InputContainer>
            <ButtonWrapper>
              <Button type="submit" disabled={isSubmitting} accent>
                Submit
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;

const StyledForm = styled(Form)`
  padding: 32px 10vw;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledInput = styled.input`
  padding: 18px 2vw;
  border: none;
  border-radius: ${roundedBorder};
`;

const StyledTextArea = styled.textarea`
  padding: 18px 2vw;
  border: none;
  border-radius: 25px;
  resize: none;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.border};
  margin-left: 24px;
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledError = styled(ErrorMessage)`
  margin-left: 24px;
  color: ${({ theme }) => theme.text};
`;
