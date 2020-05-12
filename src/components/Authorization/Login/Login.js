import React from "react";
import LoginForm from './Form';
import FormBox from '../../../components/UI/FormBox/FormBox';

import Aux from '../../../hoc/Aux';


const LoginBox = () => (
        <Aux>
            <FormBox />
            <LoginForm />
        </Aux>

)

export default LoginBox;