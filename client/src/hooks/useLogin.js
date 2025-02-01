import { useMutationHook } from '~/hooks/useMutationHook';
import * as AccessService from '~/services/AccessService';

const useLogin = () => {
    const mutationLogin = useMutationHook((data) => AccessService.login(data));
    const { isPending: isPendingLogin, isSuccess: isSuccessLogin, mutate: login } = mutationLogin;


    return {
        login,
        isPendingLogin,
        isSuccessLogin
    };
};

export default useLogin;
