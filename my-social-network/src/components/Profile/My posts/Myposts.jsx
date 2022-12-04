import classes from './Myposts.module.css';
import Post from './Post/Post';

function Myposts(){
    return(
        <div>
              <div className={classes.add__post}>
                <textarea></textarea>
                <button>Add post</button>
              </div>

              <div className={classes.posts}>

                <Post message="123" likes='2'/>
                <Post message="321" likes='20'/>

              </div>
        </div>
    );
}

export default Myposts;