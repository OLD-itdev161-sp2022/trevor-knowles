import { Mongoose } from "mongoose";

const PostSchema = new Mongoose.Schema({
    user: {
        type: 'ObjectId',
        ref: 'User'
    },
    titls: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Post = Mongoose.mode('post', PostSchema);

export default Post;