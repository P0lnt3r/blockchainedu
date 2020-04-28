import { Button } from 'antd';
import React, { useState , useEffect } from 'react';
import styles from './style.less';
import { history } from 'umi';

const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_22.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_23.png');
const imgSrc_sy_r_4 = require('@/assets/lessions/sy_r_4.png');

const second_shwt = require('@/assets/lessions/second_shwt.png');
const second_kg = require('@/assets/lessions/second_kg.png');
const second_ck = require('@/assets/lessions/second_ck.png');
const second_fxzl = require('@/assets/lessions/second_fxzl.png');
const second_xws = require('@/assets/lessions/second_xws.png');
const second_zcms = require('@/assets/lessions/second_xws.png');



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

          <div className={styles.con_first} >
            <div className={styles.text} >
              <div className={styles.tle}>相关名词解释(通俗理解版本)</div>
              <div className={styles.wdfine}>
                <img src={second_shwt} /> <span>双花问题：</span>即只消耗一次资产但却成功消费了两次，是一种典型的支付作弊行为；
              </div>
              <div className={styles.wdfine}>
                <img src={second_kg} /> <span>矿工：</span>区块链网络需要算力来维持运转，矿工即付出算力而得到挖矿数字货币奖励的个体；
              </div>
              <div className={styles.wdfine}>
                <img src={second_ck} /> <span>出块：</span> 一个区块中可以包含多笔交易；
              </div>
              <div className={styles.wdfine}>
                <img src={second_fxzl} /> <span>发行总量:</span>即该币的总数量。总量的设计与其应用场景密切相关，通常会在白皮书有明确解释；
              </div>
              <div className={styles.wdfine}>
                <img src={second_xws} /> <span>小数位:</span>即该币种是几位有效数字。目前主流的设定是8位，依情况而定；
              </div>
              <div className={styles.wdfine}>
                <img src={second_zcms} /> <span>资产描述:</span>发行资产时可以在这里做简单的描述，这是你在平台上介绍自己的唯一机会，但它不会上链。
              </div>
            </div>
          </div>
          
          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={ ()=>{
              history.push( '/lessions/2/2' );
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
