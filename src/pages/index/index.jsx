import React, { useState } from 'react';
import styles from './style.less';
import { history } from 'umi';

const banner = require('@/assets/lessions/banner.png');
const index_jcp = require('@/assets/lessions/index_jcp.png');
const index_jjp = require('@/assets/lessions/index_jjp.png');


export default () => {
  return (
    <div className={styles.box}>
      <div className={styles.boxs}>
        <div className={styles.banner}>
          <h1>欢迎来到实训课堂！</h1>
          <div className={styles.banner_l}><img src={banner} /></div>
          <div className={styles.banner_r}>
            区块链本质上是密码学的产物，其中包含了复杂的数学原理，这也是普及区块链教育的难点所在。<br /><br />
  实训课堂的目的，皆在通过一些现实生活中的实例，通俗易懂的讲解，使学生对理论知识有更好的接受能力，为今后更深入的学习打下基础。<br /><br />
  实训课共8堂：前四堂主要介绍了区块链基础原理，为基础课程，后四堂注重区块链的应用场景，为进阶课程。</div>
        </div>

        <div className={styles.con} >
          <div className={styles.jcp} style={{ float: 'left', marginLeft: '15px' }}>
            <div className={styles.tle} >基础篇</div>
            <div className={styles.pro} ><img src={index_jcp} /></div>
            <ul>
              <li>
                <span onClick={()=>history.push('/lessions/1')}>实训第一堂 数字货币发行</span>
                <button onClick={() => history.push('/lessions/discuss/questions')} className={styles.button} >答疑专区</button>
              </li>
              <li>
                <span onClick={()=>history.push('/lessions/2')}>实训第二堂 数字货币交易</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
              <li>
                <span>实训第一堂 数字货币发行</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
              <li>
                <span>实训第一堂 数字货币发行</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
            </ul>
          </div>

          <div className={styles.jcp} style={{ float: 'right', marginRight: '15px' }} >
            <div className={styles.tle}>进阶篇</div>
            <div className={styles.pro}><img src={index_jjp} /></div>
            <ul>
              <li>
                <span>实训第一堂 数字货币发行</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
              <li>
                <span>实训第一堂 数字货币发行</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
              <li>
                <span>实训第一堂 数字货币发行</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
              <li>
                <span>实训第一堂 数字货币发行</span>
                <button onClick={() => console.log(1)} className={styles.button} >答疑专区</button>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}
