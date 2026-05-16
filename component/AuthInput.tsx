import { useAuthForm } from '@/hook/useAuthForm';
import { Ionicons } from '@expo/vector-icons';
import { type Href, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';
import { Controller } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    const { control, handleSubmit, formState: { errors } } = useAuthForm();

    // Compare the current window width and height so the auth screen can
    // switch between a stacked portrait layout and a split landscape layout.
    const isLandscape = width > height;

    const onSubmit = (data: { email: string; password: string }) => {
        console.log(data);
        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };

    return (
        <StyledSafeAreaView className="flex-1 bg-black" edges={['top']}>
            <StatusBar style="light" backgroundColor="#000000" translucent={false} />
            <View className="flex-1 bg-amber-100">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1 bg-amber-100"
                >
                    {router.canGoBack() && (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="absolute left-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-white/80 z-10"
                            accessibilityRole="button"
                            accessibilityLabel="Go back"
                        >
                            <Ionicons name="chevron-back" size={26} color="#111827" />
                        </TouchableOpacity>
                    )}
                    <ScrollView
                        className="flex-1 bg-amber-100"
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        automaticallyAdjustKeyboardInsets={true}
                    >
                        <View
                            className={`flex-1 bg-amber-100 px-5 ${isLandscape
                                ? 'flex-row items-center justify-center gap-8 py-6'
                                : 'flex-col items-center justify-center py-14'
                                }`}
                        >
                            <View className={isLandscape ? 'w-5/12 items-center' : 'w-full items-center'}>
                                <Text className="text-3xl font-bold">
                                    {name}
                                </Text>
                            </View>

                            <View className={isLandscape ? 'w-5/12 max-w-md' : 'w-full'}>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            placeholder="Email"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            className="w-full border border-zinc-500 rounded-md p-3 my-2.5"
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            disableFullscreenUI={true}
                                        />
                                    )}
                                />
                                {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}
                                <Controller
                                    control={control}
                                    name='password'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            placeholder="Password"
                                            secureTextEntry
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            className="w-full border border-zinc-500 rounded-md p-3 my-2.5"
                                            disableFullscreenUI={true}
                                        />
                                    )}
                                />
                                {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}

                                <TouchableOpacity
                                    onPress={handleSubmit(onSubmit)}
                                    className="bg-red-500 w-full p-4 rounded-md mt-5 items-center"
                                >
                                    <Text className="text-white font-bold">
                                        {buttonText}
                                    </Text>
                                </TouchableOpacity>
                                <View className="flex-row mt-4 justify-center">
                                    <Text className="text-gray-600">
                                        {footerText}
                                    </Text>
                                    <TouchableOpacity onPress={() => router.push(footerHref)}>
                                        <Text className="text-red-500 font-bold ml-1">
                                            {footerLinkText}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </StyledSafeAreaView>
    )
}
