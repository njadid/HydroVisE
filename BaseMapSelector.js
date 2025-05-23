import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { config } from './mock-config';

const BaseMapSelector = () => {
  const { baseMapType } = config.controls;
  const defaultSelected = Object.keys(baseMapType).find(
    (key) => baseMapType[key].selected
  );
  const [selectedMap, setSelectedMap] = useState(defaultSelected);

  const handleMapSelection = (mapKey) => {
    setSelectedMap(mapKey);
    // In a real app, you might call a function here like the one specified in onEvent
    // e.g., if (baseMapType[mapKey].onEvent) { eval(baseMapType[mapKey].onEvent); }
    // For this example, we'll just log it.
    console.log(`Selected base map: ${baseMapType[mapKey].var_name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Base Map:</Text>
      {Object.entries(baseMapType).map(([key, mapOption]) => (
        <TouchableOpacity
          key={mapOption.var_id}
          style={[
            styles.button,
            selectedMap === key && styles.selectedButton,
          ]}
          onPress={() => handleMapSelection(key)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedMap === key && styles.selectedButtonText,
            ]}
          >
            {mapOption.var_name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#007bff',
    borderColor: '#0056b3',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default BaseMapSelector;
