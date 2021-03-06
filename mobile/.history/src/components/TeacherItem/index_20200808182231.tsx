import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

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
            com programação, amo minha familia e quero muito
            me tornar um profissional de referencia no mercado
        </Text>
        </View>
    )
}

export default TeacherItem;