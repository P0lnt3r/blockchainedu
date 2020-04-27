import { Pagination , Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import styles from './style.less';
import { getReplies } from '@/services/publics'

export default (props) => {

    const discussId = props.match.params.discussId;
    const [replies, setReplies] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4
    });
    const fetchReplies = async function () {
        const response = await getReplies({
            discussId: discussId,
            page: pagination.current,
            size: pagination.pageSize
        });
        setReplies(response.data.records)
        setPagination({
            current: response.data.page,
            pageSize: response.data.size,
            total: response.data.total
        })

        response.data.records.forEach( reply => {
            butsState[ reply.id ] = false;
        } )
        setButsState( { ...butsState } );
       
    }
    useEffect(() => {
        fetchReplies();
    }, [discussId])


    const [ butsState ,setButsState ] = useState( {} );

    return (
        <div className={styles.innerpage}>
            <div className={styles.innerpages} >
                <h1>答疑专区</h1>
                <div className={styles.con}>
                    <div style={{ minHeight: '700px', paddingTop: '30px' }}>
                        {
                            replies.length > 0 &&
                            replies.map(reply => {
                                return (
                                    <>
                                    <div className={styles.buts} >
                                            <div style={{ float:"right" }}>XXXXXXXX</div>
                                            <div style={{ float:"right" }}>
                                                <Button style={{ display:butsState[reply.id] ? 'inline-block':'inline-block' }} >引用</Button>
                                                <Button style={{ display:butsState[reply.id] ? 'inline-block':'inline-block' }} type='primary'>回复</Button>
                                            </div>
                                    </div>

                                    <dl 
                                        onMouseEnter = { () => {
                                            butsState[ reply.id ] = true;
                                            setButsState( { ...butsState } )
                                        } }
                                        onMouseLeave = { () => {
                                            butsState[ reply.id ] = false;
                                            setButsState( { ...butsState } )
                                        } }
                                        >
                                        
                                        
                                        <dt>
                                            <div className={styles.wz}>
                                                <div className={styles.wz_tle} >姓名</div>{reply.userName}
                                            </div>
                                            <div className={styles.wz} >
                                                <div className={styles.wz_tle} >身份</div>{reply.userType}
                                            </div>
                                            <div className={styles.wz}>
                                                <div className={styles.wz_tle} >注册时间</div>{reply.registTime}
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className={styles.txtcon}>
                                                <div className={styles.bt} >{reply.discussTitle}</div>
                                                <div className={styles.time} >{reply.createTime}</div>
                                                <br />
                                                <div className={styles.describe} >{reply.content}</div>
                                            </div>
                                        </dd>
                                    </dl>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className={styles.pagination}>
                        <Pagination {...pagination} onChange={(currentPage) => {
                            pagination.current = currentPage;
                            setPagination(pagination);
                            fetchReplies();
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )

}