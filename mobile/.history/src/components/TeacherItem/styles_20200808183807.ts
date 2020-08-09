import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },

    profile:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee',
    },

    profileInfo:{
        marginLeft: 16,
    },

    name:{
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    subject:{
        fontFamily:'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#646180',
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
    },

    price:{
        fontFamily: 'Poppins_400Regular',
        color: '#646180',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton:{
        backgroundColor: '#fafafc',
    },

})

export default styles;

