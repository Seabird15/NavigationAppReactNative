import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#1d7765',
  border: '#f1f5f4',
  secondary: '#060606',
  tertiary: '#c5cb4b',
  success: '#4cc9f0',
  warning: '#ffba08',
  danger: '#ff5252',
  dark: '#22223b',
  gray: '#e5e7e9',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  containerAboutTop: {
    padding: 20,
    backgroundColor: globalColors.background,
  },
  containerAboutBottom: {
    padding: 20,
    backgroundColor: globalColors.background,
  },
  containerAboutMiddle: {
    padding: 20,
    backgroundColor: globalColors.gray,
  },
  imgContainer: {
    width: 400,
    height: 200,
    borderColor: globalColors.border,
    borderWidth: 5,
    borderRadius: 10,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
  titleText: {
    textAlign: 'center',

    fontSize: 24,
    fontWeight: 'bold',
    color: globalColors.primary,
    marginBottom: 10,
  },
});
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },
  sectionTitle: {
    textAlign: 'center',

    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  info: {
    textAlign: 'center',

    fontSize: 16,
    marginBottom: 3,
  },
});
