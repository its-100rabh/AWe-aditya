import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Tree1 from '../../assets/svg/kys/Tree1';
import Tree2 from '../../assets/svg/kys/Tree2';
import ArrowStart from '../../assets/svg/kys/ArrowStart';

const KYSTree = () => (
  <View>
    <View style={styles.arrowIcon}>
      <ArrowStart />
    </View>
    <View style={styles.tree1}>
      <Tree1 />
    </View>
    <View style={styles.tree2}>
      <Tree2 />
    </View>
    <View style={styles.tree3}>
      <Tree1 />
    </View>
    <View style={styles.tree4}>
      <Tree1 />
    </View>
    <View style={styles.tree5}>
      <Tree1 />
    </View>
    <View style={styles.tree6}>
      <Tree1 />
    </View>
    <View style={styles.tree7}>
      <Tree1 />
    </View>
    <View style={styles.tree8}>
      <Tree1 />
    </View>
    <View style={styles.tree9}>
      <Tree1 />
    </View>
    <View style={styles.tree10}>
      <Tree1 />
    </View>
    <View style={styles.tree11}>
      <Tree1 />
    </View>
    <View style={styles.tree12}>
      <Tree1 />
    </View>
    <View style={styles.tree13}>
      <Tree1 />
    </View>
    <View style={styles.tree14}>
      <Tree1 />
    </View>
    <View style={styles.tree15}>
      <Tree1 />
    </View>
    <View style={styles.tree16}>
      <Tree1 />
    </View>
    <View style={styles.tree17}>
      <Tree1 />
    </View>
    <View style={styles.tree18}>
      <Tree1 />
    </View>
    <View style={styles.tree19}>
      <Tree1 />
    </View>
    <View style={styles.tree20}>
      <Tree1 />
    </View>
    <View style={styles.tree21}>
      <Tree1 />
    </View>
    <View style={styles.tree22}>
      <Tree1 />
    </View>
    <View style={styles.tree23}>
      <Tree1 />
    </View>
    <View style={styles.tree24}>
      <Tree1 />
    </View>
    <View style={styles.tree25}>
      <Tree1 />
    </View>
    <View style={styles.tree26}>
      <Tree1 />
    </View>
    <View style={styles.tree27}>
      <Tree1 />
    </View>
  </View>
);

export default KYSTree;

const styles = StyleSheet.create({
  tree1: {
    position: 'absolute',
    top: heightPercentageToDP(40),
    left: 20,
  },
  tree2: {
    position: 'absolute',
    top: heightPercentageToDP(40),
    right: 0,
  },
  tree3: {
    position: 'absolute',
    top: heightPercentageToDP(60),
    left: 20,
  },
  tree4: {
    position: 'absolute',
    top: heightPercentageToDP(75),
    left: '50%',
  },
  tree5: {
    position: 'absolute',
    top: heightPercentageToDP(8),
    left: '80%',
    zIndex: 0,
    // zIndex: ,
  },
  tree6: {
    position: 'absolute',
    top: heightPercentageToDP(1),
    left: '60%',
    zIndex: 0,
  },
  tree7: {
    position: 'absolute',
    top: heightPercentageToDP(1),
    left: '10%',
  },
  tree8: {
    position: 'absolute',
    top: heightPercentageToDP(-6),
    left: '25%',
  },
  tree9: {
    position: 'absolute',
    top: heightPercentageToDP(-8),
    left: '46%',
  },
  tree10: {
    position: 'absolute',
    top: heightPercentageToDP(90),
    left: '50%',
  },
  tree11: {
    position: 'absolute',
    top: heightPercentageToDP(90),
    left: '40%',
  },
  tree12: {
    position: 'absolute',
    top: heightPercentageToDP(85),
    left: '30%',
  },
  tree13: {
    position: 'absolute',
    top: heightPercentageToDP(85),
    left: '20%',
  },
  tree14: {
    position: 'absolute',
    top: heightPercentageToDP(85),
    left: '15%',
  },
  tree15: {
    position: 'absolute',
    top: heightPercentageToDP(83),
    left: '70%',
  },
  tree16: {
    position: 'absolute',
    top: heightPercentageToDP(86),
    left: '75%',
  },
  tree17: {
    position: 'absolute',
    top: heightPercentageToDP(82),
    left: '85%',
  },
  tree18: {
    position: 'absolute',
    top: heightPercentageToDP(85),
    left: '90%',
  },
  tree19: {
    position: 'absolute',
    top: heightPercentageToDP(87),
    left: '95%',
  },
  tree20: {
    position: 'absolute',
    top: heightPercentageToDP(83),
    left: '60%',
  },
  tree21: {
    position: 'absolute',
    top: heightPercentageToDP(84),
    left: '65%',
  },
  tree22: {
    position: 'absolute',
    top: heightPercentageToDP(88),
    left: '50%',
  },
  tree23: {
    position: 'absolute',
    top: heightPercentageToDP(88),
    left: '55%',
  },
  tree24: {
    position: 'absolute',
    top: heightPercentageToDP(88),
    left: '10%',
  },
  tree25: {
    position: 'absolute',
    top: heightPercentageToDP(88),
    left: '15%',
  },
  tree26: {
    position: 'absolute',
    top: heightPercentageToDP(88),
    left: '10%',
  },
  tree27: {
    position: 'absolute',
    top: heightPercentageToDP(88),
    left: '0%',
  },
  arrowIcon: {
    position: 'absolute',
    top: heightPercentageToDP(12),
    left: '40%',
  },
});
