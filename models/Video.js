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

VideoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        // returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.models.Video || mongoose.model('Video', VideoSchema)