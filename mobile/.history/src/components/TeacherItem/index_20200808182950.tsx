import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
            <Image 
            style={styles.avatar}
            source={{uri: 'https://avatars2.githubusercontent.com/u/46411054?s=460&u=c3f92c619bac6c318c07610c662d7fa846ea36bc&v=4'}}
            />
        <View style={styles.profileInfo}>
            <Text style={styles.name}>Augusto Barbosa</Text>
            <Text style={styles.subject}> Matematica</Text>
        </View>
        </View>

        <Text style={styles.bio}>
            Eu gosto de doce e de gastar neoronio 
            com programação.
            {'\n'}{'\n'}
            Amo minha familia e quero muito
            me tornar um profissional de referencia no mercado
        </Text>

        <View styles={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ 20,00</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style {styles.favoriteButton}
            </View>
        </View>
        </View>
    )
}

export default TeacherItem;