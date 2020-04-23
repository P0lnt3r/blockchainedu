import { Button } from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';
import styles from './style.less';

const imgSrc_sy_l_1 = require('@/assets/lessions/sy_l_1.png');
const imgSrc_sy_r_1 = require('@/assets/lessions/sy_r_1.png');
const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_2.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_3.png');
const imgSrc_sy_r_4 = require('@/assets/lessions/sy_r_4.png');

export default () => {

  return (
    <div className={styles.frame}>
      <div className={styles.frame_l}>
        <div className={styles.practical}>

          <div className={styles.h1}>实训第一堂</div>
          <div className={styles.h2}>数字货币发行</div>

          <div className={styles.con} >
            <div className={styles.text} >
              <div className={styles.tle}>实训内容介绍：</div>
              <div className={styles.introduce}>比特币的崛起颠覆了人类对货币的概念，它和数字货币的出现与扩展正在改变人类使用货币的方式。从过去人类使用实物交易，到发展物理货币及后来的信用货币，都是随着人类的商业行为及社会发展不断演进。随着电子金融及电子商务的崛起，数字货币安全，便利，低交易成本的独特性，更合适基于网络的商业行为，将来有可能取代物理货币的流通。<br />
                <br />
  本节的实训，将以比特币（BTC）为代表，帮助大家了解其发币过程，通过对这些基本要素的理解，将有助于后续章节的学习。由于实训中的课时限制，课程简化了其中的很多复杂的发币逻辑，对课程兴趣的同学可以自行去搜索相关资料，进一步加深自己的理解。<br />
                <br />
  数字货币自出现之日起就饱受争议，很多所谓的数字货币其实是与区块链的无关编局，如此区分它们呢？请在实训后思考这一问题。</div>
            </div>
          </div>

          <div className={styles.lct}>
            <img src={imgSrc_sy_l_1} />
          </div>
          
          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={ ()=>{
              history.push('/lessions/1/1')
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
                <img src={imgSrc_sy_r_2} />  本节难度:<font>低</font><br />
              </div>
              <span>
                1.了解数字货币的构成属性，名称及基本含义<br />
                2.对当前主流数字货币资产的属性有初步了解<br />
                3.通过学习，能够分辨哪些是伪“数字货币”资产
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
                1.发行后的数字资产（如BTC），是如何被赐予价值的呢？<br />
                2.是否所有数字货币资产都有价值<br />
                3.能否总结出一套对价值评判的标准<br />
                4.有些数字货币存在“增发”现象，这些数字货币又是如何实现的呢？
              </span>
            </div>
          </div>
        </div>
        <div className={ styles.block_img }><img src={imgSrc_sy_r_4} /></div>
      </div>

    </div>
  )
}
