import React from "react";
import {withOidcFetch} from "@axa-fr/react-oidc";

const CustomDiv = ({props}) => {
    return (
        <div>
            Hello
        </div>
    );
};

export default withOidcFetch(CustomDiv);