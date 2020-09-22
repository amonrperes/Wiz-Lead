import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';



    function AddPhone(){
          Linking.openURL(`tel:${981037250}`);
    }

    export default AddPhone;

