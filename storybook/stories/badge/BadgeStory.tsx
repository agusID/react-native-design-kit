import React from 'react';
import {BadgeProps, Badge} from '../../../src';
import {StyleSheet, View} from 'react-native';

export interface BadgeStoryProps extends BadgeProps {}

export default function BadgeStory({...props}: BadgeStoryProps) {
  return (
    <View style={styles.container}>
      <Badge {...props} value="99+" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
