import { Pagination } from 'antd';
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import styles from './style.less';
import { getQuestions } from '@/services/publics'

export default (props) => {

    const courseId = props.match.params.courseId;
    const [questions, setQuesions] = useState([]);
    const fetchQuestions = async function () {
        const response = await getQuestions(courseId);
        setQuesions(response.data.records)
    }
    useEffect(() => {
        fetchQuestions();
    }, [courseId])


    return (
        <div className={styles.innerpage}>
            <div className={styles.innerpages} >
                <h1>答疑专区</h1>
                <div className={styles.con}>
                    <ul style={{minHeight:'600px'}}>
                        {questions.length > 0 &&
                            questions.map(question => {
                                return (
                                    <li onClick={() => history.push('/lessions/discuss/replies')}>
                                        <div className={styles.num} >{ question.replyCount }</div>
                                        <div className={styles.describe} >{ question.title }</div>
                                        <div className={styles.time} >{ question.userName }<br />{ question.createTime }</div>
                                        <div className={styles.curriculum} >{ question.courseName }</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.pagination}>
                        <Pagination defaultCurrent={1} total={50} size={9} />
                    </div>
                </div>
            </div>
        </div>
    )

}