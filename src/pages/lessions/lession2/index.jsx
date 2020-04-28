import { Button } from 'antd';
import React, { useState,useEffect  } from 'react';
import { history } from 'umi';
import styles from './style.less';

const imgSrc_sy_l_1 = require('@/assets/lessions/sy_l_21.png');
const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_22.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_23.png');
const imgSrc_sy_r_4 = require('@/assets/lessions/sy_r_4.png');

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

          <div className={styles.con} >
            <div className={styles.text} >
              <div className={styles.tle}>实训内容介绍：</div>
              <div className={styles.introduce}>
                在上一堂-数字货币发行中，我们学到了数字货币的基本属性及含义。当一种数字货币被发行出来之后，通常情况下所有资产会在创建人的地址上，这时候我们就需要通过交易来让这种货币资产流通起来，逐渐赋予其应用场景和价值。数字货币的交易过程是区块链技术的关键所在，涉及到很多密码学相关的知识，本堂实训课我们将用较为易懂的方式为大家讲解。 
                <br />
                <br />
                本堂的实训中，将以用比特币购买咖啡为例，为大家讲解数字货币交易的本质和原理。由于涉及到密码学相关知识，实训中涉及到部分专用名词，请大家耐心的阅读稍后的名词解释部分，并结合相关课件参考学习。 
                <br />
                <br />
                数字货币解决了一个核心问题——双花（double spending），那么在比特币的实现中是如何处理的呢？请在实训后思考这一问题。
              </div>
            </div>
          </div>

          <div className={styles.lct}>
            <img src={imgSrc_sy_l_1} />
          </div>
          
          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={ ()=>{
              history.push('/lessions/2/1')
            } }>进入实训</Button>
          </div>

        </div>
      </div>

      <div className={styles.frame_r}>
        <div className={styles.tle}>
          <div className={styles.con} >实训目标</div>
        </div>

        <div className={styles.block} >
          <div className={styles.con} >
            <div className={styles.bjnd} >
              <div className={styles.ico} >
                <img src={imgSrc_sy_r_2} />  本节难度:<font>中</font><br />
              </div>
              <span>
                1. 了解数字货币交易的相关名词含义<br />
                2. 理解数字货币交易的整个流程<br />
                3. 理解数字货币交易的创新之处
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
                1. 在数字货币交易中可能出现哪些作弊行为？<br />
                2. BTC是如何解决这些作弊问题的？<br />
                3. 在解决以上问题时，是以牺牲什么为代价的？<br />
                4. 客观对比和分析其它数字货币与BTC的不同之处，以及背后的设计出发点。 
              </span>
            </div>
          </div>
        </div>
        <div className={ styles.block_img }><img src={imgSrc_sy_r_4} /></div>
      </div>

    </div>
  )
}
