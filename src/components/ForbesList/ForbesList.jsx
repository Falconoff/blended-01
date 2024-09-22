import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css'
export const ForbesList = ({forbes}) => {
  return <div className={style.board}>
  <div className={style.header}>
    <h2 className={style.title}>
      <span className={style.titleTop}>Forbes</span>
      <span className={style.titleBottom}>Leader board</span>
    </h2>
  </div>

    <ul className={style.list}>
      {forbes.map(item => {
        return <li className={style.item} key={item.id}><ForbesListItem avatar={item.avatar} capital={item.capital} isIncrease={item.isIncrease} name={item.name}/></li>
      })}
    
  </ul>
</div>
};
