export default async function handler(req, res) {
    const {
        method
    } = req


    switch (method) {
        case 'POST' /* Login by username and password */:
            try {
                const username = req.body.username;
                const password = req.body.password;
                if (username !== "test" || password !== "123") {
                    return res.status(400).json({ success: false })
                }
                // console.log(username)
                res.status(200).json({ success: true, data: {
                        username: username,
                        avatar: 'https://xzifan.oss-cn-shanghai.aliyuncs.com/images/avatar.jpg',
                        loginTime: (new Date()).valueOf()
                    } 
                })
            } catch (error) {
                console.log("error:", error)
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
