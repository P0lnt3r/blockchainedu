import { Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './style.less';
import { history } from 'umi';
import { CheckCircleTwoTone } from '@ant-design/icons';

const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_2.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_3.png');
const imgSrc_yxzb_bg = require('@/assets/lessions/yxzb_bg.png');
const imgSrc_hand = require('@/assets/lessions/hand.png');
const imgSrc_nextpage = require('@/assets/lessions/nextpage.png');
const imgSrc_prevpage = require('@/assets/lessions/prevpage.png');

const confirm = Modal.confirm;

const nextConfirm = function () {
  Modal.confirm({
    icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    title: '提示',
    content: (
      <div>
        <p>本堂实训已完成，是否进入下一堂实训?</p>
      </div>
    ),
    okText: '确定',
    cancelText: '取消',
    onOk() {
      history.push('/lessions/2')
    },
  });
}

export default () => {

  useEffect(() => {
    window.document.title = '实训第一堂-数字货币发行';
  })

  const [show1, setShow1] = useState(true);
  const [show1An, setShow1An] = useState(false);

  const [show2, setShow2] = useState(false);
  const [show2An , setShow2An] = useState(false);

  const [show3, setShow3] = useState(false);
  const [show3An , setShow3An] = useState(false);

  return (
    <div className={styles.frame}>
      <div className={styles.frame_l}>
        <div className={styles.practical}>

          <div className={styles.h1}>实训第一堂</div>
          <div className={styles.h2}>数字货币发行</div>

          <div className={styles.con_third} >
            <div className={styles.congra}>恭喜你，本节实训完成！</div>
            <div className={styles.quesTitle}>下面我们来对之前的思考题进行解答 : </div>
              
              {
                show1 &&
                <>
                <div className={styles.ques1}>
                  <span>发行后的数字资产（如BTC），是如何被赋予价值的呢？</span>
                </div>
                <div className={styles.ans} style={{ backgroundColor:'#5473e8' }}>
                  <span className={styles.da}>答</span>
                  {
                    show1An ?
                      (
                        <div className={styles.showcontent}>
                          与所有的货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。P2P的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。
                        </div>
                      )
                      :
                      (
                        <div className={styles.hidecontent} style={{ backgroundColor:'#445ac7' }}>
                          <div className={styles.imgwrapper}>
                            <img src={imgSrc_hand} onClick={ () => { setShow1An(true) } }></img>
                            <p>点击查看答案</p>
                          </div>
                        </div>
                      )
                  }
                  <img className={styles.clk} src={imgSrc_nextpage} onClick={ ()=>{
                    setShow1( false );
                    setShow2( true );
                    setShow3( false );
                  } } />
                </div>
                </>
              }
             
              {
                show2 &&
                <>
                 <div className={styles.ques2}><span>是否所有数字货币资产都有价值？</span></div>
                <div className={styles.ans} style={{ backgroundColor:'#36c2cf' }}>
                  <span className={styles.da}>答</span>
                  {
                    show2An ?
                      (
                        <div className={styles.showcontent}>
                          与所有的货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。P2P的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。
                        </div>
                      )
                      :
                      (
                        <div className={styles.hidecontent} style={{backgroundColor:'#31b4ba'}}>
                          <div className={styles.imgwrapper}>
                            <img src={imgSrc_hand} onClick={ () => { setShow2An(true) } }></img>
                            <p>点击查看答案</p>
                          </div>
                        </div>
                      )
                  }
                   <img className={styles.clk} src={imgSrc_nextpage} onClick={()=>{
                    setShow1(false);
                    setShow2(false);
                    setShow3(true);
                   }} />
                   <img className={styles.clk} src={imgSrc_prevpage} onClick={ ()=>{
                     setShow1( true );
                     setShow2( false );
                     setShow3( false );
                   } } /> 
                </div>
                </>
              }

              {
                show3 &&
                <>
                <div className={styles.ques3}><span>能否总结出一套对价值评判的标准？</span></div>
                <div className={styles.ans} style={{ backgroundColor:'#445ac7' }}>
                  <span className={styles.da}>答</span>
                  {
                    show3An ?
                      (
                        <div className={styles.showcontent}>
                          与所有的货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。P2P的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。
                        </div>
                      )
                      :
                      (
                        <div className={styles.hidecontent} style={{ backgroundColor:'#32449c' }}>
                          <div className={styles.imgwrapper}>
                          <img src={imgSrc_hand} onClick={ () => { setShow3An(true) } }></img>
                            <p>点击查看答案</p>
                          </div>
                        </div>
                      )
                  }
                   <img className={styles.clk} src={imgSrc_prevpage} onClick={ ()=>{
                     setShow1( false );
                     setShow2( true );
                     setShow3( false );
                   } } /> 
                </div>
                </>
              }
            
           
          </div>

          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={() => nextConfirm()}>进入下一堂实训</Button>
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
                1. 发行后的资产都在同一地址，如何转出？<br />
                2. 一笔链上资产的转出需要哪些要素？<br />
                3. 主流公链的转账分别需要多久？
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
                1. 主流公链可以从BTC、ETH、EOS开始<br />
                2. 数字货币交易涉及到一个很重要的概念——矿工费<br />
                3. BTC转账不够理想，出现了“闪电网络”<br />
                4. 对转账速度的提升中，EOS选择了一种特殊的方式，而它是以牺牲什么为代价的？你怎么看？
              </span>
            </div>
          </div>
        </div>
        <div className={styles.yxzb_img}><img src={imgSrc_yxzb_bg} /></div>
      </div>

    </div>
  )
}
