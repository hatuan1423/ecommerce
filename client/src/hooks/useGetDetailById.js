import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "~/redux/Slices/shopSlice";
import * as ShopService from "~/services/ShopService";

const useGetDetailUserById = ({ reload = false, userId }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    const fetchUser = async () => {
        setLoading(true);
        try {
            const res = await ShopService.getDetail({ shopId: userId });
            if (res?.status === 200) {
                setUser(res?.metadata);
                dispatch(login({ ...res?.metadata }))
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId, reload]);

    return { loading, user, reload: fetchUser };
};

export default useGetDetailUserById;
