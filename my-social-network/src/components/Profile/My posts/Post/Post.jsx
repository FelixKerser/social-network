import classes from './Post.module.css';

function Post(props){
    return(
      <div className={classes.post__wrapper}>
        <div>
          <img alt='' src="https://pbs.twimg.com/profile_images/1469062206377582600/8uH6FfBy_400x400.png"/>
        </div>

        <div>
          <div className={classes.item}>{props.message}</div>
          <div><span>Likes: {props.likes}</span></div>
        </div>
      </div>
    );
}

export default Post;