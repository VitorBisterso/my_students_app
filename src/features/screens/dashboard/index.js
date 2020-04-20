import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StudentsApi from '../../redux/students/api';

import Loading from '../../components/loading';
import Text from '../../components/text';
import StudentListItem from '../../components/studentListItem';

import StyleConstants from '../../../styleConstants';
import { Container, NoStudents, ScrollView, TitleView } from './styles';

const renderStudentsList = students => {
  const { BLACK } = StyleConstants.colors;

  return students.length <= 0 ? (
    <NoStudents>
      <Text center color={BLACK}>
        Não há nenhum aluno cadastrado...
      </Text>
    </NoStudents>
  ) : (
    <ScrollView showsVerticalScrollIndicator={false}>
      {students.map(item => (
        <StudentListItem
          key={item.email}
          name={item.name}
          classday={item.classDay}
          level={item.level}
          onPress={() => undefined}
        />
      ))}
    </ScrollView>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const { students, isLoading } = useSelector(state => state.students);

  useEffect(() => {
    dispatch(StudentsApi.fetchAllStudents());
  }, []);

  const { BIGGEST } = StyleConstants.fonts;

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <TitleView>
        <Text size={BIGGEST} center>
          Alunos
        </Text>
      </TitleView>
      {renderStudentsList(students)}
    </Container>
  );
};

export default Dashboard;
