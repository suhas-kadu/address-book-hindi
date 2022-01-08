import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { ReactTransliterate } from "react-transliterate";


const ReactSearchbar = (props) => {
  const [text, setText] = useState("");
  return (
    <>
      <Form className="w-100 mx-lg-5 px-lg-5 mx-md-3">
        <div className=" rounded-pill ">
          <ReactTransliterate
            className="rounded-pill ps-4 py-2 form-control"
            // style={{ width: "100%" }}
            placeholder="अपना नाम दर्ज करें"
            value={text}
            onChangeText={(text2) => {
              setText(text2);
            }}
            lang="hi"
          />
        </div>
      </Form>
    </>
  );
};

export default ReactSearchbar;
