
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import StudentCard from './StudentCard';

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

export default function StudentDirectory() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 's1',
      name: 'Ana Cruz',
      year: '3rd Year',
      photoUrl: 'https://i.pravatar.cc/100?img=1',
      flagged: false,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      year: '2nd Year',
      photoUrl: 'https://i.pravatar.cc/100?img=2',
      flagged: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      year: '4th Year',
      photoUrl: 'https://i.pravatar.cc/100?img=3',
      flagged: false,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      year: '1st Year',
      photoUrl: 'https://i.pravatar.cc/100?img=4',
      flagged: false,
    },
    {
      id: 's5',
      name: 'Eli Tan',
      year: '3rd Year',
      photoUrl: 'https://i.pravatar.cc/100?img=5',
      flagged: false,
    },
  ]);

  const [query, setQuery] = useState('');

  const toggleFlag = (id: string) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student name..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {filteredStudents.length === 0 && (
          <Text style={styles.noResults}>
            No students found.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    paddingTop: 55,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E293B',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    fontSize: 15,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 25,
    color: '#777777',
  },
});