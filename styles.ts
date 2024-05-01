
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    display:'flex'
  },
  inputBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#102C57',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#29ADB2',
    textAlign: 'center',
    padding:58
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#176B87',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#2D9596', // Green background color
    borderRadius: 8, // Rounded corners
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    marginTop: 10, // Space between input and button
    alignItems: 'center', // Center content horizontally
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold text
  },
  taskList: {
    alignItems: 'center', // Center tasks horizontally
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%', // Set width for task list
    marginBottom: 10,
  },
  task: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  completeButton: {
    backgroundColor: '#2D9596',
    borderRadius: 8,
    padding: 5,
    marginRight: 5,
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    marginTop: 10, // Space between input and button
    alignItems: 'center', // Center content horizontally
  },
  deleteButton: {
    backgroundColor: '#074173',
    borderRadius: 5,
    padding: 5,
  },
});
