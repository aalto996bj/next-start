import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { Button, Card, Form, Input, Message } from "@alifd/next"
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

const LoginForm = (props) => {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [loadingKey, setLoadingKey] = useState()
    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser');
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            setUser(user)
        }
    }, [])
    useEffect(()=>{
        props.setUserstate(user)
    }, [user])
    const handleLogin = async (values, errors) => {
        console.log(values, errors);
        setLoadingKey('login')
        const username = values.username;
        const password = values.password;
        const loginRes = await axios.post(router.basePath + '/api/login', {
            username: username, 
            password: password 
        }).then((res) => {
            setTimeout(() => {
                console.log(res);
                window.localStorage.setItem(
                    'loggedUser', JSON.stringify(res.data)
                )
                console.log()
                setUser(res.data)
                Message.success("Login succeed!")
                setLoadingKey()
            }, 800);
        })
        .catch (function (err) {
            console.log(err);
            setLoadingKey()
            Message.error("Your credentials are incorrect, please try again!")
        });
    }
    const onClickSignout = () => {
        setLoadingKey('signout')
        setTimeout(() => {
            localStorage.removeItem('loggedUser')
            setUser()
            setLoadingKey()
        }, 800);
    }
    const checkLogin = () => {
        let now = (new Date).valueOf()
        console.log( 'checklogin: ' ,user , user?.data ? (now - user.data.loginTime) : undefined)
        let hasLogged = user && ((now - user.data.loginTime) < 60000)
        return hasLogged
    }
    return (
        <Card className={styles.content} free>
            <h2 className={styles.login}>Login to application</h2>
            { // simple expireTime for login status
                !(checkLogin()) ? 
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
                        loading={loadingKey === 'login'}
                    >
                        Submit
                    </Form.Submit>
                    <Form.Reset>Reset</Form.Reset>
                </FormItem>
            </Form>
            :
            <>
                <h2 className={styles.login}>You have already logged in </h2>
                <Button loading={loadingKey==='signout'} className={styles.signout} onClick={onClickSignout}>Sign out</Button>
            </>
            }
        </Card>
    )
}

export default LoginForm