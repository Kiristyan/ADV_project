import { StyleSheet } from 'react-native';

const signupStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 25,
  },
  inputGroup: {
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#F5772B',
    marginHorizontal: 23,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  orangeText: {
    color: '#F5772B',
  },
  backgroundImage: {
    flex: 1,
  },
  centerAlign: {
    paddingLeft: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
    marginLeft: 65,
  },
  logo: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  Betatitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 5,
    marginBottom: 10,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  bottomLink: {
    flex: 1,
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  passwordPolicyText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 17,
    marginTop: 15,
  },
  orangeText: {
    color: '#F5772B',
  },
});

export default signupStyle;
