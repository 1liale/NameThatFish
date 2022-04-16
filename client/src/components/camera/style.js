import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

// stylesheet for camera
export default StyleSheet.create({
  camera: {
    flex: 1,
    zIndex: 5,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  flipCamera: {
    position: 'absolute',
    left: 3,
    top: 3,
  },
  capture: {
    backgroundColor: '#f5f6f5',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    top: height * 0.6,
  },
  previewContiner: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 0,
    zIndex: 2,
  },
  previewImgBg: {
    flex: 1,
    marginTop: -100,
    backgroundColor: 'black',
  },
  retakeButton: {
    zIndex: 10,
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: 12,
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  cropButton: {
    zIndex: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 12,
    marginTop: 15,
  },
  label: {
    fontWeight: '900',
    fontFamily: 'sans-serif',
    color: '#00a4e6',
  },
  labelBtnContainer: {
    position: 'absolute',
    height: 50,
    width: '100%',
    opacity: 0.5,
    backgroundColor: 'black',
    zIndex: 9,
  },
  saveBtn: {
    zIndex: 11,
    height: 30,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: width / 2 - 50,
    top: height * 0.8,
  },
  checkmarkWrapper: {
    alignSelf: 'flex-end',
    marginLeft: 10,
  },
});