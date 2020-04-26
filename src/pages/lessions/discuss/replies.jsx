import { Button } from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';
import styles from './style.less';

export default (props) => {

    return (
        <div className={styles.innerpage}>
            <div className={styles.innerpages} >
                <h1>答疑专区</h1>
                <div className={styles.con}>
                    <dl style={{ paddingTop:'40px' }}>
                        <dt>
                            <div className={styles.wz}>
                                <div className={styles.wz_tle} >姓名</div>小敏
                            </div>
                            <div className={styles.wz} >
                                <div className={styles.wz_tle} >身份</div>学生
                            </div>
                            <div className={styles.wz}>
                                <div className={styles.wz_tle} >注册时间</div>2020.02.12
                            </div>
                        </dt>
                        <dd>
                            <div className={styles.txtcon}>
                                <div className={styles.bt} >请问，BTC的核心价值到底是什么呢？</div>
                                <div className={styles.time} >2020.02.20</div>
                                <div className={styles.describe} >与所有的货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。P2P的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。</div>
                            </div>
                        </dd>
                    </dl>

                    <dl style={{ paddingTop:'40px' }}>
                        <dt>
                            <div className={styles.wz}>
                                <div className={styles.wz_tle} >姓名</div>小敏
                            </div>
                            <div className={styles.wz} >
                                <div className={styles.wz_tle} >身份</div>学生
                            </div>
                            <div className={styles.wz}>
                                <div className={styles.wz_tle} >注册时间</div>2020.02.12
                            </div>
                        </dt>
                        <dd>
                            <div className={styles.txtcon}>
                                <div className={styles.bt} >请问，BTC的核心价值到底是什么呢？</div>
                                <div className={styles.time} >2020.02.20</div>
                                <div className={styles.describe} >与所有的货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。P2P的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。</div>
                            </div>
                        </dd>
                    </dl>

                </div>
                <div className={styles.cons}></div>
            </div>
        </div>
    )

}