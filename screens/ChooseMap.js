import React, {useState, useContext} from 'react';
import {View, Text} from 'native-base';
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import TourMap from '../image/tourist.png';
import AccidentImage from '../image/accident2-01.png';
// import {getLogin, getUser} from '../Data/TicApi';
// import {StaffContext} from '../Context/StaffContext';
// import {StaffAccidentContext} from '../Context/StaffAccidentContext';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
const ChooseMap = ({navigation}) => {
  const [state, setState] = useState({seg: 0});
//   const staffContext = useContext(StaffContext);
//   const staff = useContext(StaffAccidentContext);
  const GoMap = async () => {
    if (state.seg === 1) {
      navigation.navigate('tourism');
    //   const token = await AsyncStorage.getItem('token');
    //   const username = await AsyncStorage.getItem('username');
    //   const pass = await AsyncStorage.getItem('pass');
    //   if (token !== null) {
    //     const login = await getLogin(username, pass);
    //     staffContext.setAccept(login.accept);
    //     const user = await getUser(login.token, login.user_id);
    //     staffContext.setUser({
    //       ...staffContext.user,
    //       username: user.data[0].username,
    //       first: user.data[0].first_name,
    //       last: user.data[0].last_name,
    //     });
    //   } else {
    //   }
    } else if (state.seg === 2) {
    //   navigation.navigate('accident');
    //   const token = await AsyncStorage.getItem('tokenacc');
    //   const username = await AsyncStorage.getItem('usernameacc');
    //   const pass = await AsyncStorage.getItem('passacc');
    //   if (token !== null) {
    //     const login = await getLogin(username, pass);
    //     staff.setAccept(login.accept);
    //     const user = await getUser(login.token, login.user_id);
    //     staff.setUser({
    //       ...staff.user,
    //       username: user.data[0].username,
    //       first: user.data[0].first_name,
    //       last: user.data[0].last_name,
    //     });
    //   } else {
    //   }
    }
  };
  return (
    <>
      <View style={styles.background}>
        <View>
          <Text style={styles.text}>Please Choose the Map</Text>
          <TouchableHighlight
            underlayColor="#ffffffd9"
            onPress={() => {
              if (state.seg === 1) {
                setState({seg: 0});
              } else {
                setState({seg: 1});
              }
            }}
            style={[
              styles.card,
              {borderWidth: state.seg === 1 ? 3 : 0, borderColor: '#49c0c0'},
            ]}>
            <View style={styles.insidecard}>
              <View
                style={{
                  height: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Image style={styles.image} source={TourMap} />
              </View>
              <View
                style={{
                  height: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>Tourism Map</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#ffffffd9"
            onPress={() => {
              if (state.seg === 2) {
                setState({seg: 0});
              } else {
                setState({seg: 2});
              }
            }}
            style={[
              styles.card,
              {borderWidth: state.seg === 2 ? 3 : 0, borderColor: '#49c0c0'},
            ]}>
            <View style={styles.insidecard}>
              <View
                style={{
                  height: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Image style={styles.image} source={AccidentImage} />
              </View>
              <View
                style={{
                  height: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>Accidental Map</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#41c0c1d9"
            style={styles.start}
            onPress={() => GoMap()}>
            <Text style={styles.stateText}>Get Start</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default ChooseMap;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#faf7f1',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    height: HEIGHT / 3.2,
    width: WIDTH / 1.6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 20,
  },
  image: {width: '100%', height: '90%'},
  insidecard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'AvenirLTStd-Roman',
    color: '#0f2e47',
  },
  start: {
    marginTop: 20,
    backgroundColor: '#49c0c0',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateText: {
    color: '#faf7f1',
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 20,
  },
});
