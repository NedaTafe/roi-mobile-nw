import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { imageIndex } from '../constants/images.js';

// Import helper code

// Import styling and components
import Styles from "../styles/MainStyle.js";
import { MyButton } from '../components/MyButton.js';
// import { MyImage } from '../components/MyImage';
import { TextH1, TextParagraph } from "../components/StyledText.js";
import Box from '../components/Box.js';


export default function HomeScreen(props) {

  const [isLogoColor, setIsLogoColor] = React.useState(true);

  function toggleLogo() {
    setIsLogoColor(!isLogoColor);
  }

  function showViewPeople() {
    props.navigation.replace('Root', { screen: 'People' });
  }

  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <ScrollView style= {Styles.container} contentContainerStyle={Styles.contentContainer}>
            <View style= {Styles.homeLogoContainer}>
                <Pressable onPress={toggleLogo} >
                    <Image source={imageIndex[isLogoColor?"logo":"mono"]} style={Styles.homeLogo} resizeMode='contain'/>
                </Pressable>
            </View>
            <View style={Styles.homeHeadingContainer}> 
                <Text style={Styles.homeHeading}>
                    "ROI HR Management System - Home"
                </Text>    
            </View>
            <View style={Styles.homeButtonContainer}>
                <MyButton
                  text = "Staff Directory"
                  type='major'
                  size = 'large'
                  onPress={showViewPeople}
                  buttonStyle={Styles.homeButton}
               />                
                <MyButton
                  text = "Show Help"
                  type='default'
                  size = 'large'
                  onPress={showHelp}
                  buttonStyle={Styles.homeButton}
                />             
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}


    // <SafeAreaView style={Styles.safeAreaView}>
    //   <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

    //     <TextH1>This is the home screen</TextH1>

    //     <TextParagraph>Here is some sample text for the home screen.</TextParagraph>

    //     <TextParagraph>There is no place like 127.0.0.1</TextParagraph>

    //     <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 40 }}>
    //       <MyButton
    //         text="Show help screen"
    //         type="major" // default*|major|minor
    //         size="large" // small|medium*|large
    //         onPress={showHelp}
    //       />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>