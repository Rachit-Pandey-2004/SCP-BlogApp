import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        default:'https://scontent.fdel25-5.fna.fbcdn.net/v/t39.30808-6/217393290_191242409704132_4991412305816226393_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LHm0wb2rYYAAX9cprff&_nc_ht=scontent.fdel25-5.fna&oh=00_AfBOvgkLWKuNkKGJWrcUBBhp6xqWl5lT0lSJei459iSb4A&oe=65EF0FA3',
    },
    category:{
        type:String,
        default:'uncategorized',
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true}
);

const Post =mongoose.model('Post',postSchema);
export default Post;