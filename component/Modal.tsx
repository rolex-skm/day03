import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function ModalComponet({ showAlert, setShowAlert, alertData, router }: { showAlert: boolean, setShowAlert: (value: boolean) => void, alertData: { title: string }, router: ReturnType<typeof useRouter> }) {
    const handleOkPress = () => {
        setShowAlert(false);
        router.push('/home');
    };

    return (
        <Modal
            animationType="fade"
            transparent
            visible={showAlert}
            statusBarTranslucent
            onRequestClose={() => setShowAlert(false)}
        >
            <BlurView
                intensity={30}
                tint="dark"
                style={{ flex: 1, zIndex: 999, elevation: 999 }}
            >
                <Pressable
                    className="flex-1 items-center justify-center px-6"
                    onPress={() => setShowAlert(false)}
                >
                    <Pressable
                        className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl items-center"
                        style={{ zIndex: 1000, elevation: 1000 }}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-red-100">
                            <Ionicons name="alert-circle" size={36} color="#ef4444" />
                        </View>

                        <Text className="mb-2 text-center text-xl font-extrabold text-gray-900">
                            {alertData.title}
                        </Text>
                        <TouchableOpacity
                            className="mt-4 self-center rounded-2xl bg-red-500 px-8 py-3 shadow-sm shadow-red-300"
                            onPress={handleOkPress}
                            activeOpacity={0.8}
                        >
                            <Text className="text-center text-sm font-bold text-white">
                                OK
                            </Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </BlurView>
        </Modal>
    );
}
