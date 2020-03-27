import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incident: {
    marginTop: 48,
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  incidentProperty: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414b',
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },
  contactBox: {
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#13131a',
  },
  heroDescription: {
    marginTop: 16,
    fontSize: 16,
    color: '#737380',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#e02041',
  },
  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
