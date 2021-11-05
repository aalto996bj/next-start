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
                const video = await Video.findById(id)
                if (!video) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: video })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const video = await Video.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })
                if (!video) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: video })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedVideo = await Video.deleteOne({ id: id })
                if (!deletedVideo) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
