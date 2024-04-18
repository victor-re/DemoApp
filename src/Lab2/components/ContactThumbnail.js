import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Corrected import statement
import PropTypes from 'prop-types';

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = { color: textColor }; // Corrected colorStyle assignment
  
  const ImageComponent = onPress ? TouchableOpacity : View; // Corrected ImageComponent assignment

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
      </ImageComponent>
      {name && <Text style={[styles.name, colorStyle]}>{name}</Text>} {/* Corrected name conditional rendering */}
      {phone && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} /> {/* Corrected Icon component */}
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold', // Corrected fontWeight spelling
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactThumbnail;
