import React from 'react';
import {OidcSecure, useOidcAccessToken, useOidcFetch, useOidcIdToken} from "@axa-fr/react-oidc";
import {useOidcUser} from "@axa-fr/react-oidc";
import Layout from "../Layout";

const Admin = () => {
    const {oidcUser, oidcUserLoadingState} = useOidcUser();
    const {idToken, idTokenPayload} = useOidcIdToken();
    const {accessToken, accessTokenPayload} = useOidcAccessToken();
    const {sessionToken, sessionTokenPayload} = useOidcFetch();
    const showData = () => {
        // fetch("https://localhost:44348/api/sras/admin-hello",{
        //     method: 'GET',
        //     headers: new Headers({
        //         'Authorization': idToken
        //     })
        // })
        //     .then(response => {
        //         console.log(response.json())
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    };
    return (
        <OidcSecure>
            <Layout>
                Admin
                <p>Hello</p>
                <p>{JSON.stringify(oidcUser)}</p>
                <p>Id</p>
                <p>{JSON.stringify(idTokenPayload)}</p>
                <p>Access</p>
                <p>{JSON.stringify(accessTokenPayload)}</p>
                <p><button onClick={showData}>Show Data</button> </p>
            </Layout>
        </OidcSecure>
    );
};

export default Admin;