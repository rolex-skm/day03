import { useAuthForm } from '@/hook/useAuthForm';
import { Ionicons } from '@expo/vector-icons';
import { type Href, router } from 'expo-router';
import { styled } from 'nativewind';
import { Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    const { control, handleSubmit, formState: { errors } } = useAuthForm();
    const onSubmit = (data: { email: string; password: string }) => {
        console.log(data);
    };

    return (
        <StyledSafeAreaView className="flex-1 bg-black" edges={['top', "bottom"]}>
            <View className="relative flex-1 items-center justify-center px-5 bg-amber-100">
                {router.canGoBack() && (
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="absolute left-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-white/80"
                        accessibilityRole="button"
                        accessibilityLabel="Go back"
                    >
                        <Ionicons name="chevron-back" size={26} color="#111827" />
                    </TouchableOpacity>
                )}

                <Text className="text-3xl font-bold">
                    {name}
                </Text>
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
                <View className="flex-row mt-4">
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
        </StyledSafeAreaView>
    )
}
