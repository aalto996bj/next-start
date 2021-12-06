import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { Form, Input, Message } from "@alifd/next"
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
    const [user, setUser] = useState('');

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser');
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            setUser(user)
        }
    }, [])

    const handleLogin = async (values, errors) => {
        console.log(values, errors);
        const username = values.username;
        const password = values.password;
        const loginRes = await axios.post(router.basePath + '/api/login', {
            username: username, 
            password: password 
        }).then((res) => {
            console.log(res);
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(res.data)
            )
            setUser(JSON.stringify(res.data))
            Message.success("Login success!")
        })
        .catch (function (err) {
            console.log(err);
            Message.error("Your credentials are incorrect, please try again!")
        });
    }

    return (
        <div className={styles.content}>
            <h2 className={styles.login}>Login to application</h2>
            {
                !user ?
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