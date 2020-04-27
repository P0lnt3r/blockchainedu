import { Pagination, Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './style.less';
import { getReplies, getQuestion } from '@/services/publics'
import Reply from './Reply';

export default (props) => {

    const discussId = props.match.params.discussId;

    const [question, setQuestion] = useState(undefined);
    const fetchQuestion = async function () {
        const response = await getQuestion(discussId);
        setQuestion(response.data);
    };
    useEffect(() => {
        fetchQuestion();
    }, [discussId])

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
        response.data.records.forEach(reply => {
            butsState[reply.id] = false;
        })
        setButsState({ ...butsState });
    }
    useEffect(() => {
        fetchReplies();
    }, [discussId])

    const [butsState, setButsState] = useState({});
    const [replyVisible, setReplyVisible] = useState(false);
    const [discuss, setDiscuss] = useState(undefined);

    return (
        <div className={styles.innerpage}>
            <div className={styles.innerpages} >
                <h1>答疑专区</h1>
                <div className={styles.con}>
                    <div style={{ minHeight: '700px', paddingTop: '30px' }}>
                        {
                            question &&
                            <div key={question.id}
                                onMouseEnter={() => {
                                    butsState[question.id] = true;
                                    setButsState({ ...butsState })
                                }}
                                onMouseLeave={() => {
                                    butsState[question.id] = false;
                                    setButsState({ ...butsState })
                                }}>
                                <div className={styles.buts} >
                                    <div style={{ float: "right", marginRight: '45px', height: '22px' }}>
                                        <Button style={{ display: butsState[question.id] ? 'inline-block' : 'none' }} onClick={
                                            () => {
                                                setDiscuss( {
                                                    courseId:question.courseId,
                                                    discussId:question.id,
                                                    discussTitle:question.title,
                                                    discussContent:question.content
                                                } );
                                                setReplyVisible(true)
                                            }
                                        }>引用</Button>
                                        <Button style={{ display: butsState[question.id] ? 'inline-block' : 'none' }} type='primary' onClick={
                                            () => {
                                                setDiscuss( {
                                                    courseId:question.courseId,
                                                    discussId:question.id,
                                                    discussTitle:question.title,
                                                    discussContent:question.content
                                                } );
                                                setReplyVisible(true)
                                            }
                                        }>回复</Button>
                                    </div>
                                </div>
                                <br />
                                <dl>
                                    <dt>
                                        <div className={styles.wz}>
                                            <div className={styles.wz_tle} >姓名</div>{question.userName}
                                        </div>
                                        <div className={styles.wz} >
                                            <div className={styles.wz_tle} >身份</div>{question.userType}
                                        </div>
                                        <div className={styles.wz}>
                                            <div className={styles.wz_tle} >注册时间</div>{question.userRegistTime}
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className={styles.txtcon}>
                                            <div className={styles.bt} >{question.title}</div>
                                            <div className={styles.time} >{question.createTime}</div>
                                            <br />
                                            <div className={styles.describe} >
                                                <pre>{question.content}</pre>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        }


                        {
                            replies.length > 0 &&
                            replies.map(reply => {
                                return (
                                    <div key={reply.id}
                                        onMouseEnter={() => {
                                            butsState[reply.id] = true;
                                            setButsState({ ...butsState })
                                        }}
                                        onMouseLeave={() => {
                                            butsState[reply.id] = false;
                                            setButsState({ ...butsState })
                                        }}>
                                        <div className={styles.buts} >
                                            <div style={{ float: "right", marginRight: '45px', height: '22px' }}>
                                                <Button style={{ display: butsState[reply.id] ? 'inline-block' : 'none' }} onClick={
                                                    () => {
                                                        setDiscuss(reply);
                                                        setReplyVisible(true)
                                                    }
                                                }>引用</Button>
                                                <Button style={{ display: butsState[reply.id] ? 'inline-block' : 'none' }} type='primary' onClick={
                                                    () => {
                                                        setDiscuss(reply);
                                                        setReplyVisible(true)
                                                    }
                                                }>回复</Button>
                                            </div>
                                        </div>
                                        <br />
                                        <dl>
                                            <dt>
                                                <div className={styles.wz}>
                                                    <div className={styles.wz_tle} >姓名</div>{reply.userName}
                                                </div>
                                                <div className={styles.wz} >
                                                    <div className={styles.wz_tle} >身份</div>{reply.userType}
                                                </div>
                                                <div className={styles.wz}>
                                                    <div className={styles.wz_tle} >注册时间</div>{reply.userRegistTime}
                                                </div>
                                            </dt>
                                            <dd>
                                                <div className={styles.txtcon}>
                                                    <div className={styles.bt} >{ '#'+((pagination.current - 1 ) * pagination.pageSize + replies.indexOf(reply) + 1) }</div>
                                                    <div className={styles.time} >{reply.createTime}</div>
                                                    <br />
                                                    <div className={styles.describe} >
                                                        <pre>{reply.content}</pre>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
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

            <Modal
                width={800}
                visible={replyVisible}
                footer={null}
                title='编辑答案'
                destroyOnClose
                onCancel={() => setReplyVisible(false)}
            >
                <Reply data={discuss} callback={() => {
                    setReplyVisible(false);
                    fetchReplies();
                }}></Reply>
            </Modal>


        </div>
    )

}