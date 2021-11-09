import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { Form, Input } from "@alifd/next"
import styles from './index.module.css'

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        fixedSpan: 5
    },
    wrapperCol: {
        span: 15
    }
};

const LoginForm = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // console.log(isLoggedIn);
        window.localStorage.setItem('loggedUser', isLoggedIn);
        const loggedUser = window.localStorage.getItem('loggedUser');
        // console.log(loggedUser);
    })

    const handleLogin = async (values, errors) => {
        console.log(values, errors);
        const username = values.baseUser;
        const password = values.password;
        const loginRes = await axios.post(router.basePath + '/api/login', {
            username: username, 
            password: password 
        }).then((res) => {
            console.log(res);
        })
        .catch (function (err) {
            console.log(err);
        });
        setIsLoggedIn(true);
    }

    return (
        <div className={styles.content}>
            <h2 className={styles.login}>Login to application</h2>
            {
                !isLoggedIn ?
            <Form style={{ width: "60%" }} {...formItemLayout} colon>
                <FormItem
                    name="username"
                    label="Username"
                    required
                    requiredMessage="Please input your username!"
                >
                    <Input placeholder="Please Enter Username"/>
                </FormItem>
                <FormItem
                    name="password"
                    label="Password"
                    required
                    requiredMessage="Please input your password!"
                >
                    <Input.Password placeholder="Please Enter Password" />
                </FormItem>
                <FormItem label=" " colon={false}>
                    <Form.Submit
                        type="normal"
                        validate
                        onClick={handleLogin}
                        style={{ marginRight: 8 }}
                    >
                        Submit
                    </Form.Submit>
                    <Form.Reset>Reset</Form.Reset>
                </FormItem>
            </Form>
            :
            <h2 className={styles.login}>You have already logged in</h2>
            }
        </div>
    )
}

export default LoginForm