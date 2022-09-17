import React from 'react';
import styles from './HotelSearch.module.scss'
import starFull from '../../assests/starsFull.png'
import starNull from '../../assests/starsNull.png'

const Stars = ({stars}) => {
   if(stars===1){
   return(
       <div className={styles.stars}>
          <img src={starFull} alt=""/>
          <img src={starNull} alt=""/>
          <img src={starNull} alt=""/>
          <img src={starNull} alt=""/>
          <img src={starNull} alt=""/>
       </div>
   )
   }
   if(stars===2){
      return(
          <div className={styles.stars}>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starNull} alt=""/>
             <img src={starNull} alt=""/>
             <img src={starNull} alt=""/>
          </div>
      )

   }
   if(stars===3){
      return(
          <div className={styles.stars}>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starNull} alt=""/>
             <img src={starNull} alt=""/>
          </div>
      )

   }
   if(stars===4)  {
      return(
          <div className={styles.stars}>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starNull} alt=""/>
          </div>
      )
   }

   if(stars===5){
      return(
          <div className={styles.stars}>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
             <img src={starFull} alt=""/>
          </div>
      )

   }
};

export default Stars;


// return <img src={star} alt=""/>
