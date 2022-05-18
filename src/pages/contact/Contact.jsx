import React from "react";
import {
  Container,
  Grid,
  Loading,
  Input,
  Textarea,
  Text,
  useInput,
  Spacer,
  Button,
} from "@nextui-org/react";

const ContactData = () => {
  const { value, reset, bindings } = useInput("");

  const [btnIsDisabled, setBtnIsDisabled] = React.useState(true);

  const [buttonText, setButtonText] = React.useState(
    <Loading color="currentColor" type="points-opacity" />
  );

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const emailHelper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <Container
      css={{
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
      }}
    >
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text h1>Contact</Text>
        <Spacer y={2} />

        <Input
          clearable
          underlined
          labelPlaceholder="Name"
          status={false ? "error" : "primary"}
          required
        ></Input>
        <Spacer y={2} />
        <Input
          {...bindings}
          clearable
          shadow
          underlined
          onClearClick={reset}
          status={emailHelper.color || "primary"}
          helperText={emailHelper.text}
          type="email"
          labelPlaceholder="Email"
          required
        ></Input>

        <Spacer y={3} />
        <Textarea
          width="100%"
          height="10rem"
          labelPlaceholder="Type Message."
          color="primary"
          bordered
          required
          rows={5}
        ></Textarea>
        <Spacer y={2} />
        <div className="w-[40%]">
          <Button
            rounded
            css={{ width: "100%" }}
            disabled={btnIsDisabled}
            onClick={() => {
              setBtnIsDisabled(true);
              setButtonText(
                <Loading color="currentColor" type="points-opacity" />
              );
            }}
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </Container>
  );
};

const Contact = () => {
  return (
    <Container
      css={{
        position: "absolute",
        padding: "0",
        margin: "0",
        top: "80px",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
        minWidth: "100%",
      }}
      className="animate-fadeIn overflow-hidden"
    >
      <ContactData />
    </Container>
  );
};

export default Contact;
