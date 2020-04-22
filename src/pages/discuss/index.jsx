import React, { useState, useEffect, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card,Row, Col, Tabs, Statistic } from 'antd';
import { listCourse } from '@/services/discuss'
import Questions from './components/Questions';
import Replies from './components/Replies'

const { TabPane } = Tabs;

export default (props) => {

  const [courses, setCourses] = useState([]);
  const fetchCourses = async function () {
    const response = await listCourse();
    setCourses(response.data)
  }
  useEffect(() => {
    fetchCourses();
  }, [])



  return (
    <PageHeaderWrapper subTitle='管理系统内的答疑内容'>
      <Row>
        {
          courses.length > 0 &&
          courses.map(course => {
            return (
              <Col span={6} key={`${course.name}-col`} style={{ padding:'5px' }} >
                <Card hoverable key={`${course.name}-col-card`} >
                  <Row>
                    <Col span={16} style={{marginTop:'20px'}}>{course.name}</Col>
                    <Col span={4}><Statistic title="提问数" value={course.questions} /></Col>
                    <Col span={4}><Statistic title="回复数" value={course.replies} /></Col>
                  </Row>
                </Card>
              </Col>
            )
          })
        }
      </Row>
        
      <Card style={{marginTop:'2%'}}>
        <Tabs defaultActiveKey='1'>
          <TabPane tab="提问列表" key="1">
            <Questions course={courses}/>
          </TabPane>
          <TabPane tab="回复列表" key="2">
            <Replies course={courses}/>
          </TabPane>
        </Tabs>
      </Card>

        

    </PageHeaderWrapper>
  )

}





