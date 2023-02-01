/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import Wrapper from "./Wrapper";
// import messages from "./messages.json";

defineMessages(messages);

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage
          id="glob"
          defaultMessage="Glob :3"
          key="poweredBy"
        />
        <a
          key="website"
          href="https://reactavancado.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
