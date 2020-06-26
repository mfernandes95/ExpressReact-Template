import React, { useState } from "react";

import ForgotPassword from "views/Passwords/ForgotPassword/index";
import Login from "views/SignIn/index";

import { Wrapper, Image } from "./styles";

export default function InitialPage() {
  const [login, setLogin] = useState(true);

  return (
    <Wrapper>
      <Image className="avatar hidden-sm" />
      {login ? <Login state={setLogin} /> : <ForgotPassword state={setLogin} />}
    </Wrapper>
  );
}
