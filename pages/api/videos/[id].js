import dbConnect from '../../../lib/dbConnect'
import Video from '../../../models/Video'

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const video = await Video.findOne({ id: parseInt(id) })
                console.log("video:", video)
                if (!video) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: video })
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
