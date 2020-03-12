import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
    'pk.eyJ1IjoianVzbWFueiIsImEiOiJjangyczU3azgwNHBzNDlxb2w5OWgzeDZvIn0.xqxSzNNuDT1lHvqZpfMh4g',
  );

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "transparent"
  },
  map: {
    flex: 1
  }
});

const TourMap =()=>{

  React.useEffect(()=>{
    MapboxGL.setTelemetryEnabled(false);

  },[])
  
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  
}
export default TourMap