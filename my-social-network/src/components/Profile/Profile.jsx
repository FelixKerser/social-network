import classes from './Profile.module.css';
import Myposts from './My posts/Myposts';

function Profile(){
    return(
    <div className="content">
        <div>

          <img className={classes.content__banner} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            
            <div className={classes.user__info}>

              <div>
                <img className={classes.avatar__img} src="https://lapkins.ru/upload/iblock/130/1309222f033fb6928ea065578276ab44.jpg"/>
              </div>
              
              <div>

                <div className={classes.user__name}> F. Kerser </div>

                <div className=""> F. Kerser </div>
                <div className=""> F. Kerser </div> 
                <div className=""> F. Kerser </div>
                <div className=""> F. Kerser </div>

              </div>

            </div>

            <Myposts />

        </div>

    </div>
    );
}

export default Profile;