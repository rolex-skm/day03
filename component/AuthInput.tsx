import { useAuthForm } from '@/hook/useAuthForm';
import { Ionicons } from '@expo/vector-icons';
import { type Href, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalComponet from './Modal';

type AuthInputProps = {
    name: string;
    buttonText: string;
    footerText: string;
    footerLinkText: string;
    footerHref: Href;
};

const StyledSafeAreaView = styled(SafeAreaView);

export default function AuthInput({
    name,
    buttonText,
    footerText,
    footerLinkText,
    footerHref,
}: AuthInputProps) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({ title: '' });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useAuthForm();

    const onSubmit = (data: { email: string; password: string }) => {
        setAlertData({
            title: 'Login Successful',
        });
        setShowAlert(true);
    };

    return (
        <StyledSafeAreaView
            className="flex-1 bg-white"
            edges={['top']}
        >
            <StatusBar
                style="dark"
                backgroundColor="#fef3c7"
                translucent={false}
            />

            <KeyboardAvoidingView
                className={`flex-1 ${showAlert ? 'opacity-50' : ''}`}
                pointerEvents={showAlert ? 'none' : 'auto'}
                behavior={
                    Platform.OS === 'ios'
                        ? 'padding'
                        : isLandscape
                            ? undefined
                            : 'height'
                }
                keyboardVerticalOffset={isLandscape ? 10 : 50}
            >
                {/* Back Button */}
                {router.canGoBack() && (
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="absolute left-4 top-4 z-20 h-11 w-11 items-center justify-center rounded-full bg-white shadow"
                    >
                        <Ionicons
                            name="chevron-back"
                            size={24}
                        // color="#111827"
                        />
                    </TouchableOpacity>
                )}

                <KeyboardAwareScrollView
                    className="flex-1"
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: isLandscape ? 'flex-start' : 'center',
                    }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid
                    extraScrollHeight={10}
                    enableAutomaticScroll
                >
                    <View
                        className={`grow px-5 ${isLandscape
                            ? 'flex-row items-center justify-start'
                            : 'flex-col justify-center py-12'
                            }`}
                    >
                        {/* LEFT SIDE */}
                        <View
                            className={
                                isLandscape
                                    ? 'flex-1 max-w-sm items-center justify-center'
                                    : 'w-full items-center mb-10'
                            }
                        >
                            <Text className="text-3xl font-bold text-red-500">
                                {name}
                            </Text>
                        </View>

                        {/* RIGHT SIDE FORM */}
                        <View
                            className={`${isLandscape
                                ? 'flex-1 max-w-sm rounded-3xl bg-white p-4 shadow-lg'
                                : 'w-full'
                                }`}
                        >
                            {/* EMAIL */}
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Email"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        disableFullscreenUI
                                        className="w-full rounded-xl border border-zinc-300 bg-white p-4"
                                    />
                                )}
                            />
                            {errors.email && (
                                <Text className="mt-1 text-red-500">
                                    {errors.email.message}
                                </Text>
                            )}

                            {/* PASSWORD */}
                            <Controller
                                control={control}
                                name="password"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Password"
                                        secureTextEntry
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        disableFullscreenUI
                                        className="mt-4 w-full rounded-xl border border-zinc-300 bg-white p-4"
                                    />
                                )}
                            />
                            {errors.password && (
                                <Text className="mt-1 text-red-500">
                                    {errors.password.message}
                                </Text>
                            )}

                            {/* BUTTON */}
                            <TouchableOpacity
                                onPress={handleSubmit(onSubmit)}
                                className="mt-6 w-full rounded-xl bg-red-500 p-4 items-center"
                            >
                                <Text className="font-bold text-white">
                                    {buttonText}
                                </Text>
                            </TouchableOpacity>

                            {/* FOOTER */}
                            <View className="mt-5 flex-row justify-center">
                                <Text className="text-gray-600">
                                    {footerText}
                                </Text>

                                <TouchableOpacity
                                    onPress={() => router.push(footerHref)}
                                >
                                    <Text className="ml-1 font-bold text-red-500">
                                        {footerLinkText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </KeyboardAvoidingView>
            <ModalComponet
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                alertData={alertData}
                router={router}
            />
        </StyledSafeAreaView>
    );
}
