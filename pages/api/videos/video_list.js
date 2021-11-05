import dbConnect from '../../../lib/dbConnect'
import Video from '../../../models/Video'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        // Get: get all video list
        case 'GET':
            try {
                const video_list = await Video.find({})
                // console.log("video_list:", video_list)
                res.status(200).json({ success: true, data: video_list })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}