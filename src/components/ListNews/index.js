import {View, FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Item from './Item';
import PopUp from '../Modal/PopUp';
import AlertWithOneOption from '../Modal/Alert';

const ListNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://ingenierowhite.com/wp-json/wp/v2/posts?per_page=5',
        );
        const data = await res.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        setModalVisible(true);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container} testID="list-news-container">
      {loading && (
        <View testID="loader">
          <Text>Loading...</Text>
        </View>
      )}
      {news.length > 0 && (
        <View>
          <FlatList
            data={news}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Item data={item} />}
          />
        </View>
      )}
      <PopUp visible={modalVisible}>
        <AlertWithOneOption
          setAlert={() => setModalVisible(false)}
          title="Ocurrio un error"
          desc="Descripcion del error"
          textFirstButton="Aceptar"
        />
      </PopUp>
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
