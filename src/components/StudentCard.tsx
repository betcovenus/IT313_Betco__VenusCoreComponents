
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
      />

      <View style={styles.studentInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>

        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.flagButton,
            flagged
              ? styles.flaggedButton
              : styles.unflaggedButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.flagText}>
            {flagged
              ? 'Flagged for Advising'
              : 'Flag for Advising'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },
  photo: {
    width: 75,
    height: 75,
    borderRadius: 12,
  },
  studentInfo: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },
  year: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
    marginBottom: 10,
  },
  flagButton: {
    padding: 9,
    borderRadius: 7,
    alignItems: 'center',
  },
  unflaggedButton: {
    backgroundColor: '#2563EB',
  },
  flaggedButton: {
    backgroundColor: '#16A34A',
  },
  pressedButton: {
    opacity: 0.7,
  },
  flagText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});