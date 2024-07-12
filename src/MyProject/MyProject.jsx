import css from './MyProject.module.css';
import project1 from "../image/project1.jpg"
// import project1-2 from '../image/project1-2.jpg'
import project2 from '../image/project2.jpg';
import project3 from '../image/project3.jpg';
import project4 from '../image/project4.jpg'

const MyProject = () => {
    return (
        <div className={css.cont}>
        <div className={css.miniCont}>
            <img className={css.img} src={project1} alt=''/>
        </div>
        <div className={css.miniCont}>
            <img className={css.img} src={project2} alt=''/>
        </div>
        <div className={css.miniCont}>
            <img className={css.img} src={project3} alt=''/>
        </div>
        <div className={css.miniCont}>
            <img className={css.img} src={project4} alt=''/>
        </div>
        </div>
    )
}

export default MyProject;