import { colors } from '@/theme/colors';
import { Platform, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    tabBarWrapper: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 36 : 28,
        left: 20,
        right: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 24,
        elevation: 8,
    },
    tabBar: {
        height: 70,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    tabBarItem: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIconContainer: {
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: colors.primary.default,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
    },
    iconForeground: {
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
});
export default styles;