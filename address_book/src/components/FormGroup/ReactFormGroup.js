import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ReactTransliterate } from "react-transliterate";

const ReactFormGroup = ({
  formLabel,
  inputType,
  inputPlaceHolder,
  onSubmit,
}) => {
  const [text, setText] = useState("");

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{formLabel}</Form.Label>

        <ReactTransliterate
          type={inputType}
          placeholder={inputPlaceHolder}
          required
          className="form-control "
          value={text}
          onChangeText={(text2) => {
            setText(text2);
          }}
          onChange={(e) => {
            onSubmit(e.target.value);
          }}
          lang="hi"
        />
      </Form.Group>
    </>
  );
};

export default ReactFormGroup;
