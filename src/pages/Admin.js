import React from 'react';
import {
    OidcSecure,
    useOidcAccessToken,
    useOidcIdToken,
    useOidcUser
} from "@axa-fr/react-oidc";
import Layout from "../Layout";
import CustomDiv from "./CustomDiv";

const Admin = () => {
    const {oidcUser, oidcUserLoadingState} = useOidcUser();
    const {idToken, idTokenPayload} = useOidcIdToken();
    const {accessToken, accessTokenPayload} = useOidcAccessToken();
    return (
        <OidcSecure>
            <Layout>
                Admin
                <p>Hello</p>
                <p>{JSON.stringify(oidcUser)}</p>
                <p>Id</p>
                <p>{JSON.stringify(idToken)}</p>
                <p>Payload</p>
                <p>{JSON.stringify(idTokenPayload)}</p>
                <p>Access</p>
                <p>{JSON.stringify(accessToken)}</p>
                <p>Payload</p>
                <p>{JSON.stringify(accessTokenPayload)}</p>
                <CustomDiv fetch={fetch('https://localhost:44348/api/sras/admin-hello', {
                    method: 'GET'
                }).then(response => response.json())
                    .then(data => {console.log(data)})
                    .catch(error => {
                        console.log(error);
                    })}/>
            </Layout>
        </OidcSecure>
    );
};

export default Admin;