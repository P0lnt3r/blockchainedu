import { Button } from 'antd';
import React, { useState,useEffect  } from 'react';
import styles from './style.less';
import { history } from 'umi';

const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_22.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_23.png');
const imgSrc_yxzb_bg = require('@/assets/lessions/yxzb_bg.png');

export default () => {

  useEffect( ()=>{
    window.document.title = '实训第二堂-数字货币交易';
  } )

  return (
    <div className={styles.frame}>
      <div className={styles.frame_l}>
        <div className={styles.practical}>

          <div className={styles.h1}>实训第二堂</div>
          <div className={styles.h2}>数字货币交易</div>

          <div className={styles.con_third} >

            <div className={styles.congra}>恭喜你，本节实训完成！</div>
            <div className={styles.quesTitle}>下面我们来对之前的思考题进行解答 : </div>

            <div className={styles.ques1}><span>在数字货币交易中可能出现哪些作弊行为？</span></div>
            <div className={styles.ques2}><span>BTC是如何解决这些作弊问题的？</span></div>
            <div className={styles.ques3}><span>在解决以上问题时，是以牺牲什么为代价的？</span></div>

          </div>
          
          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={ ()=>{
            } }>进入实训</Button>
          </div>

        </div>
      </div>

      <div className={styles.frame_r}>
        <div className={styles.tle}>
          <div className={styles.con} >预习准备</div>
        </div>

        <div className={styles.block} >
          <div className={styles.con} >
            <div className={styles.bjnd} >
              <div className={styles.ico} >
                <img src={imgSrc_sy_r_2} />  下节难度:<font>中</font><br />
              </div>
              <span>
                1. 常见的数字货币钱包有哪些？<br />
                2. 什么是钱包私钥？<br />
                3. 什么是冷钱包？热钱包？
              </span>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.con}>
            
            <div className={styles.bjnd} >
              <div className={styles.ico} >
                <img src={imgSrc_sy_r_3} /> 思考题 <br />
              </div>
              <span>
                1. 钱包的本质就是管理数字货币资产<br />
                2. 私钥、公钥和签名之间的关系是一个学习难点<br />
                3. 有兴趣的同学可以查看助记词背后的实现原理<br />
                4. 钱包的冷与热，与是否触网有关，两种钱包各有利弊，各有使用场景
              </span>
            </div>
          </div>
        </div>
        <div className={ styles.yxzb_img }><img src={imgSrc_yxzb_bg} /></div>
      </div>

    </div>
  )
}
