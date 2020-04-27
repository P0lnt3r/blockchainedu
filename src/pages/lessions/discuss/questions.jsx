import { Pagination } from 'antd';
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import styles from './style.less';
import { getQuestions } from '@/services/publics'

export default (props) => {

    const courseId = props.match.params.courseId;
    const [questions, setQuesions] = useState([]);
    const [ pagination , setPagination ] = useState( {
        current:1,
        pageSize:9
    } );
    const fetchQuestions = async function () {
        const response = await getQuestions({
            type:1,
            courseId:courseId,
            page:pagination.current,
            size:pagination.pageSize
        });
        setQuesions(response.data.records)
        setPagination( {
            current:response.data.page,
            pageSize:response.data.size,
            total:response.data.total
        } )
    }
    useEffect(() => {
        fetchQuestions();
    }, [courseId])

    return (
        <div className={styles.innerpage}>
            <div className={styles.innerpages} >
                <h1>答疑专区</h1>
                <div className={styles.con}>
                    <ul style={{minHeight:'700px'}}>
                        {questions.length > 0 &&
                            questions.map(question => {
                                return (
                                    <li key={questions.id} onClick={() => history.push(`/lessions/discuss/replies/${question.id}`)}>
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
                        <Pagination {...pagination} onChange={ ( currentPage )=>{
                            pagination.current = currentPage;
                            setPagination( pagination );
                            fetchQuestions();
                        } } />
                    </div>
                </div>
            </div>
        </div>
    )

}