import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    backdrop_path: {
        type: String,
        required: true,
    },
    poster_path: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
    },
    vote_average: {
        type: Number,
    },
    vote_count: {
        type: Number,
    },
})

export default mongoose.models.Video || mongoose.model('Video', VideoSchema)