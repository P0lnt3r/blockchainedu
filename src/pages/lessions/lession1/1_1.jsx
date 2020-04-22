import { Button } from 'antd';
import React, { useState } from 'react';
import styles from './style.less';
import { history } from 'umi';

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

          <div className={styles.con_first} >
            <div className={styles.text} >
              <div className={styles.tle}>相关名词解释：</div>
              <div className={styles.wdfine}>
                <img src={imgSrc_sy_r_2} /> <span>资产名称:</span>即数字货币的命名，可以是中文或英文，依公链要求为准，如比特币标准的命名为Bitcoin；
              </div>
              <div className={styles.wdfine}>
                <img src={imgSrc_sy_r_2} /> <span>资产简称:</span>数字货币简称也是该币种的单位，如比特币的简称是BTC，一个比特币就写作1 BTC；
              </div>
              <div className={styles.wdfine}>
                <img src={imgSrc_sy_r_2} /> <span>发起人:</span>区块链存在匿名性，因此发起人是一个地址，发币后所有资产将全部转入该地址中；
              </div>
              <div className={styles.wdfine}>
                <img src={imgSrc_sy_r_2} /> <span>发行总量:</span>即该币的总数量。总量的设计与其应用场景密切相关，通常会在白皮书有明确解释；
              </div>
              <div className={styles.wdfine}>
                <img src={imgSrc_sy_r_2} /> <span>小数位:</span>即该币种是几位有效数字。目前主流的设定是8位，依情况而定；
              </div>
              <div className={styles.wdfine}>
                <img src={imgSrc_sy_r_2} /> <span>资产描述:</span>发行资产时可以在这里做简单的描述，这是你在平台上介绍自己的唯一机会，但它不会上链。
              </div>
            </div>
          </div>
          
          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={ ()=>{
              history.push( '/lessions/1/2' );
            } }>进入实训</Button>
          </div>

        </div>
      </div>

      <div className={styles.frame_r}>
        <div className={styles.tle}>
          <div className={styles.ico} ><img src={imgSrc_sy_r_1} /></div>
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
