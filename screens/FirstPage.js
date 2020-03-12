import React, {useState} from 'react';
import {
  View,
  Text,
  Container,
  Footer,
  Content,
  Left,
  Button,
  Right,
} from 'native-base';
import {StyleSheet, Image, Dimensions} from 'react-native';
import SearchImage from '../image/4-01.png';
import ShowImage from '../image/2.png';
import CreateImage from '../image/5-01.png';

import {Slider} from 'react-native-elements';

const FirstPage = ({navigation}) => {
  const infomation = [
    {
      image: SearchImage,
      text1: 'Lorem ipsum dolor sit amet,',
      text2: 'consectetur adipiscing elit,',
      title: 'Search the place',
    },
    {
      image: CreateImage,
      text1: 'Lorem ipsum dolor sit amet,',
      text2: 'consectetur adipiscing elit,',
      title: 'Create location',
    },
    {
      image: ShowImage,
      text1: 'Lorem ipsum dolor sit amet,',
      text2: 'consectetur adipiscing elit,',
      title: 'Show location',
    },
  ];
  const {width: WIDTH} = Dimensions.get('screen');
  const [value, setValue] = useState(0.1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = infomation.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Container style={styles.background}>
        <View style={styles.component}>
          {currentPost.map(res => {
            return (
              <View
                key={res.title}
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 60,
                }}>
                <Image style={{width: 250, height: 300}} source={res.image} />
                <Text style={styles.title}>{res.title}</Text>
                <Text style={styles.second}>{res.text1}</Text>
                <Text style={styles.second}>{res.text2}</Text>
              </View>
            );
          })}
        </View>
        <Footer style={styles.footer}>
          <Content>
            <View style={styles.content}>
              <Left style={styles.left}>
                <Button
                  transparent
                  onPress={() => {
                    navigation.navigate('choose');
                  }}>
                  <Text style={styles.text}>Skip</Text>
                </Button>
              </Left>
              <View>
                <Slider
                  disabled
                  style={{width: WIDTH / 2, marginTop: 3}}
                  value={value}
                  thumbStyle={{
                    width: WIDTH / 7,
                    height: 10,
                    backgroundColor: '#41c0c1',
                  }}
                />
              </View>
              <Right style={styles.right}>
                <Button
                  transparent
                  onPress={() => {
                    if (currentPage === 3) {
                      navigation.navigate('choose');
                    } else {
                      setValue(value + 0.5);
                      setCurrentPage(currentPage + 1);
                    }
                    // navigation.navigate('second');
                  }}>
                  <Text style={styles.text}>Next</Text>
                </Button>
              </Right>
            </View>
          </Content>
        </Footer>
      </Container>
    </>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#faf7f1',
    width: '100%',
    height: '100%',
  },
  component: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    elevation: 3,
  },
  title: {
    fontSize: 36,
    color: '#0f2e47',
    marginBottom: 20,
    fontFamily: 'AvenirLTStd-Roman',
  },

  second: {
    fontSize: 18,
    color: '#0f2e47',
    fontFamily: 'AvenirLTStd-Book',
  },
  footer: {
    elevation: 0,
    backgroundColor: '#faf7f1',
    position: 'absolute',
    bottom: 0,
    borderTopWidth:0
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  text: {
    color: '#95a8a9',
    textTransform: 'capitalize',
    fontFamily: 'AvenirLTStd-Roman',
  },
  left: {marginLeft: 10},
  right: {marginRight: 10},
});
